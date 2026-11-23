/** Shared SVG filters, mounted once by the layout. */
export function ArtDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden="true" focusable="false">
      <defs>
        {/* Die-cut paper sticker: white border + soft drop shadow. */}
        <filter id="f-sticker" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="5.5" result="edge" />
          <feFlood floodColor="#ffffff" />
          <feComposite in2="edge" operator="in" result="white" />
          <feGaussianBlur in="edge" stdDeviation="2.6" />
          <feOffset dy="3.2" result="blur" />
          <feFlood floodColor="#4a3a42" floodOpacity=".24" />
          <feComposite in2="blur" operator="in" result="shadow" />
          <feMerge><feMergeNode in="shadow" /><feMergeNode in="white" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Paper cut-out layer for islands and map objects. */}
        <filter id="f-cutout" x="-20%" y="-20%" width="140%" height="150%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="3.5" result="edge" />
          <feFlood floodColor="#fffdf7" />
          <feComposite in2="edge" operator="in" result="white" />
          <feGaussianBlur in="edge" stdDeviation="3" />
          <feOffset dy="6" result="blur" />
          <feFlood floodColor="#6b5560" floodOpacity=".2" />
          <feComposite in2="blur" operator="in" result="shadow" />
          <feMerge><feMergeNode in="shadow" /><feMergeNode in="white" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Missing sticker: flat paper-coloured silhouette. */}
        <filter id="f-silhouette" colorInterpolationFilters="sRGB">
          <feFlood floodColor="#eadcc6" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="f-soft" x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dy="4" />
          <feComponentTransfer><feFuncA type="linear" slope=".18" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </svg>
  );
}
