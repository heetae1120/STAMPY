import { Link } from '../router';
import { useTitle } from '../components/ui';
import { Mascot } from '../art/Mascot';

export default function NotFound() {
  useTitle('페이지를 찾을 수 없어요');
  return (
    <div className="wrap section">
      <div className="empty" style={{ maxWidth: 560, margin: '0 auto' }}>
        <Mascot pose="discover" size={120} />
        <h1 className="h2">지도에 없는 길이에요</h1>
        <p>주소가 바뀌었거나 사라진 페이지예요. 보물지도에서 다시 출발해 볼까요?</p>
        <div className="row-btns" style={{ justifyContent: 'center' }}><Link to="/" className="btn btn-primary btn-sm">홈으로</Link><Link to="/explore" className="btn btn-sm">보물지도</Link></div>
      </div>
    </div>
  );
}
