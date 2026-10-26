/* NAVER Maps adapter. The SDK is requested only when a public web Key ID is configured. */
(function () {
  'use strict';
  var sdkPromise;
  function loadSDK(keyId, onError) {
    if (window.naver && window.naver.maps && window.naver.maps.Map) return Promise.resolve(window.naver.maps);
    if (sdkPromise) return sdkPromise;
    sdkPromise = new Promise(function (resolve, reject) {
      if (!/^[A-Za-z0-9_-]+$/.test(keyId || '')) { reject(new Error('Missing or invalid public map Key ID')); return; }
      var script = document.createElement('script'), settled = false;
      var timer = setTimeout(function () { fail(); }, 20000);
      function fail() {
        if (onError) onError();
        if (!settled) { settled = true; clearTimeout(timer); reject(new Error('NAVER Maps could not be loaded or authorized')); }
      }
      var previousAuthFailure = window.navermap_authFailure;
      window.navermap_authFailure = function () {
        fail();
        if (typeof previousAuthFailure === 'function') previousAuthFailure();
      };
      window.__stampyNaverReady = function () {
        if (settled) return;
        if (!window.naver || !window.naver.maps || !window.naver.maps.Map) { fail(); return; }
        settled = true; clearTimeout(timer); resolve(window.naver.maps);
      };
      script.async = true;
      script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=' + encodeURIComponent(keyId) + '&callback=__stampyNaverReady';
      script.onerror = fail;
      document.head.appendChild(script);
    });
    return sdkPromise;
  }
  function Adapter(options, maps) {
    this.options = options; this.maps = maps; this.stores = []; this.markers = []; this.listeners = [];
    this.signature = null; this.renderedZoom = null;
    var bounds = options.bounds;
    this.map = new maps.Map(options.container, {
      center: new maps.LatLng(36.0, 127.7), zoom: 7, minZoom: 7, maxZoom: 19,
      maxBounds: new maps.LatLngBounds(new maps.LatLng(bounds[0][0], bounds[0][1]), new maps.LatLng(bounds[1][0], bounds[1][1])),
      scrollWheel: true, pinchZoom: true, zoomControl: true
    });
    this.info = new maps.InfoWindow({ content: '', borderWidth: 0, disableAnchor: false });
    var self = this;
    this.idleListener = maps.Event.addListener(this.map, 'idle', function () { self.renderMarkers(); });
  }
  // Geographic clustering at the current zoom avoids an additional remote plugin.
  function pixel(store, zoom) {
    var size = 256 * Math.pow(2, zoom), sin = Math.sin(Math.max(-85.051, Math.min(85.051, store.lat)) * Math.PI / 180);
    return { x: (store.lng + 180) / 360 * size, y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * size };
  }
  Adapter.prototype.setStores = function (stores) {
    var signature = stores.map(function (store) { return store.id + ':' + store.lat + ':' + store.lng; }).join(',');
    this.stores = stores;
    if (signature === this.signature) return;
    this.signature = signature;
    if (stores.length === 1) {
      this.map.setCenter(new this.maps.LatLng(stores[0].lat, stores[0].lng)); this.map.setZoom(14, false);
    } else if (stores.length > 1) {
      var latitudes = stores.map(function (s) { return s.lat; }), longitudes = stores.map(function (s) { return s.lng; });
      this.map.fitBounds(new this.maps.LatLngBounds(
        new this.maps.LatLng(Math.min.apply(null, latitudes), Math.min.apply(null, longitudes)),
        new this.maps.LatLng(Math.max.apply(null, latitudes), Math.max.apply(null, longitudes))
      ), { top: 40, right: 40, bottom: 40, left: 40, maxZoom: 14 });
    }
    this.renderMarkers(true);
  };
  Adapter.prototype.renderMarkers = function (force) {
    var zoom = this.map.getZoom(), self = this, maps = this.maps;
    if (!force && this.renderedZoom === zoom) return;
    this.renderedZoom = zoom;
    this.info.close();
    this.listeners.forEach(function (listener) { maps.Event.removeListener(listener); }); this.listeners = [];
    this.markers.forEach(function (marker) { marker.setMap(null); }); this.markers = [];
    var groups = [];
    this.stores.forEach(function (store) {
      var point = pixel(store, zoom), group = groups.filter(function (g) { return Math.hypot(g.point.x - point.x, g.point.y - point.y) < 48; })[0];
      if (group) group.stores.push(store); else groups.push({ point: point, stores: [store] });
    });
    groups.forEach(function (group) {
      var stores = group.stores;
      var lat = stores.reduce(function (sum, s) { return sum + s.lat; }, 0) / stores.length;
      var lng = stores.reduce(function (sum, s) { return sum + s.lng; }, 0) / stores.length;
      var position = new maps.LatLng(lat, lng);
      var content = document.createElement('div'); content.tabIndex = 0; content.setAttribute('role', 'button');
      var title = stores.length > 1 ? stores.length + '개 매장 확대해서 보기' : self.options.title(stores[0]);
      content.setAttribute('aria-label', title);
      var icon = document.createElement('div'); icon.className = stores.length > 1 ? 'naver-store-cluster' : 'store-pin';
      var number = document.createElement('span'); number.textContent = stores.length > 1 ? stores.length : self.stores.indexOf(stores[0]) + 1;
      icon.appendChild(number); content.appendChild(icon);
      var marker = new maps.Marker({ map: self.map, position: position, title: title, icon: { content: content, size: new maps.Size(36, 36), anchor: new maps.Point(18, 36) } });
      function activate() {
        if (stores.length === 1) self.openStore(stores[0]);
        else { self.map.setCenter(position); self.map.setZoom(Math.min(zoom + 2, 19), false); self.renderMarkers(); }
      }
      self.listeners.push(maps.Event.addListener(marker, 'click', activate));
      content.addEventListener('keydown', function (event) { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
      self.markers.push(marker);
    });
  };
  Adapter.prototype.openStore = function (store) {
    var wrapper = document.createElement('div'); wrapper.className = 'naver-store-info';
    wrapper.style.maxHeight = Math.max(180, Math.min(380, this.options.container.clientHeight - 90)) + 'px';
    wrapper.style.width = Math.min(280, this.options.container.clientWidth - 64) + 'px';
    var close = document.createElement('button'); close.type = 'button'; close.className = 'naver-store-close';
    close.setAttribute('aria-label', '매장 정보 닫기'); close.textContent = '×';
    var self = this; close.addEventListener('click', function () { self.info.close(); });
    wrapper.appendChild(close); wrapper.appendChild(this.options.popupContent(store));
    this.info.setContent(wrapper); this.info.open(this.map, new this.maps.LatLng(store.lat, store.lng));
  };
  Adapter.prototype.focusStore = function (id) {
    var store = this.stores.filter(function (s) { return s.id === id; })[0]; if (!store) return;
    this.map.setCenter(new this.maps.LatLng(store.lat, store.lng)); this.map.setZoom(15, false);
    this.renderMarkers(); this.openStore(store);
  };
  Adapter.prototype.resize = function () {
    if (!this.options.container.clientWidth || !this.options.container.clientHeight) return;
    var center = this.map.getCenter(); this.map.setSize(new this.maps.Size(this.options.container.clientWidth, this.options.container.clientHeight)); this.map.setCenter(center);
  };
  window.StampyNaverMap = {
    create: function (options) { return loadSDK(options.keyId, options.onError).then(function (maps) { return new Adapter(options, maps); }); }
  };
})();
