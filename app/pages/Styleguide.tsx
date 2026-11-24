import { useTitle, StampIcon, StickerIcon } from '../components/ui';
import { Mascot, type Pose } from '../art/Mascot';
import { Sticker, STICKER_ART } from '../art/Sticker';
import { Island } from '../art/Island';
import { TreasureMap } from '../art/TreasureMap';
import { Chest, StampImprint, StampTool, Star, Sparkle } from '../art/Deco';
import { CATEGORIES } from '../data/catalog';

const POSES: Pose[] = ['idle', 'walk', 'discover', 'joy', 'stamp', 'chest', 'flag', 'sleep'];
const COLORS = [['Cream Paper', '#FFF8EB'], ['Warm Ivory', '#FFFCF5'], ['Soft Lavender', '#BCA7F5'], ['Grape Purple', '#7652BA'], ['Butter Yellow', '#FFE39A'], ['Peach Coral', '#FFAE98'], ['Mint Green', '#B7DFC4'], ['Sky Blue', '#B7DBF3'], ['Petal Pink', '#F7BBD0'], ['Ink Brown', '#4A3A42']];

export default function Styleguide() {
  useTitle('디자인 시스템');
  return (
    <div className="wrap section sg">
      <p className="eyebrow">Design System</p>
      <h1 className="h1">STAMPY 디자인 시스템</h1>
      <p className="lead">Treasure Map × Sticker Collection 세계관에서 쓰는 색, 글꼴, 버튼, 일러스트 자산을 한곳에 모았어요.</p>

      <h2 className="h2 sg-h">컬러</h2>
      <div className="sg-colors">{COLORS.map(([n, c]) => <div key={c}><i style={{ background: c }} /><b>{n}</b><span>{c}</span></div>)}</div>

      <h2 className="h2 sg-h">타이포그래피</h2>
      <div className="card sg-type">
        <p className="h-display">리뷰로 떠나는 작은 보물찾기</p>
        <p className="h2">헤드라인 · Jua</p>
        <p>본문은 Pretendard를 써서 긴 안내와 유의사항도 편하게 읽을 수 있어요.</p>
        <p className="en" style={{ fontSize: 24 }}>Treasure Map · Sticker Collection</p>
        <p className="num" style={{ fontSize: 40, margin: 0 }}>12 / 24</p>
      </div>

      <h2 className="h2 sg-h">버튼과 배지</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
        <button className="btn btn-primary">보물지도 펼쳐보기</button><button className="btn">체험단 둘러보기</button>
        <button className="btn btn-yellow">교환 신청</button><button className="btn" disabled>모집 마감</button>
        <span className="badge badge-open">모집 중</span><span className="badge badge-upcoming">모집 예정</span><span className="badge badge-closed">모집 마감</span><span className="badge badge-demo">데모</span>
        <span className="stamp-pill"><StampIcon /> 스탬프 = 교환 재화</span><span className="stamp-pill sticker-pill"><StickerIcon /> 스티커 = 수집 기록</span>
      </div>

      <h2 className="h2 sg-h">STAMPY 캐릭터</h2>
      <div className="sg-row">{POSES.map(p => <figure key={p}><Mascot pose={p} size={120} /><figcaption>{p}</figcaption></figure>)}</div>

      <h2 className="h2 sg-h">카테고리 섬</h2>
      <div className="sg-row">{CATEGORIES.map(c => <figure key={c.id}><Island cat={c.id} top={c.color} side={c.deep} size={220} /><figcaption>{c.island}</figcaption></figure>)}</div>

      <h2 className="h2 sg-h">스티커</h2>
      <div className="sg-row">{Object.keys(STICKER_ART).map((a, i) => <figure key={a}><Sticker art={a} size={96} tilt={(i % 5) * 3 - 6} /><figcaption>{a}</figcaption></figure>)}</div>
      <div className="sg-row"><figure><Sticker art="cup" size={96} locked /><figcaption>미획득</figcaption></figure></div>

      <h2 className="h2 sg-h">보물상자 · 스탬프</h2>
      <div className="sg-row">
        <figure><Chest size={200} /><figcaption>닫힘</figcaption></figure>
        <figure><Chest size={200} open /><figcaption>열림</figcaption></figure>
        <figure><StampImprint size={110} /><figcaption>스탬프 자국</figcaption></figure>
        <figure><StampTool size={90} /><figcaption>도장</figcaption></figure>
        <figure><Star size={50} /><Sparkle size={40} /><figcaption>장식</figcaption></figure>
      </div>

      <h2 className="h2 sg-h">보물지도</h2>
      <div className="paper" style={{ padding: 16 }}><TreasureMap counts={{ beauty: 3, food: 2, living: 1, home: 2, fashion: 1, tech: 1 }} /></div>
    </div>
  );
}
