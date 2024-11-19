import "./pubilsh.scss";

export default function PubIndex() {
  return (
    <div className="guide-wrap">
      <div className="guide-color">
        <h2 className="guide-title">1. Color</h2>
        <strong>Primary color</strong>
        <div className="color-box">
          <div className="sample-color-box color-box1"></div>
          <div className="sample-color-box color-box2"></div>
          <div className="sample-color-box color-box3"></div>
        </div>
        <strong>Secondary color</strong>
        <div className="color-box">
          <div className="sample-color-box sub-color-box1"></div>
          <div className="sample-color-box sub-color-box2"></div>
          <div className="sample-color-box sub-color-box3"></div>
          <div className="sample-color-box sub-color-box4"></div>
        </div>
        <strong>Text Color</strong>
        <div className="color-box">
          <div className="sample-color-box text-color-box1"></div>
          <div className="sample-color-box text-color-box2"></div>
          <div className="sample-color-box text-color-box3"></div>
        </div>
        <strong>Boder Color</strong>
        <div className="color-box">
          <div className="sample-color-box border-color-box1"></div>
          <div className="sample-color-box border-color-box2"></div>
          <div className="sample-color-box border-color-box3"></div>
          <div className="sample-color-box border-color-box4"></div>
        </div>
        <strong>Background Color</strong>
        <div className="color-box">
          <div className="sample-color-box bg-color-box1"></div>
          <div className="sample-color-box bg-color-box2"></div>
          <div className="sample-color-box bg-color-box3"></div>
          <div className="sample-color-box bg-color-box4"></div>
        </div>
        <strong>Positive/Negative</strong>
        <div className="color-box">
          <div className="sample-color-box positive-box"></div>
          <div className="sample-color-box negative-box"></div>
        </div>
      </div>
      <div className="guide-text">
        <h2 className="guide-title">2. Font</h2>
        <h1>h1 신한은행 Ai스튜디오에 오신것을 환영합니다.</h1>
        <h2>h2 신한은행 Ai스튜디오에 오신것을 환영합니다.</h2>
        <h3>h3 신한은행 Ai스튜디오에 오신것을 환영합니다.</h3>
        <div className="text1">
          본문 신한은행 Ai스튜디오에 오신것을 환영합니다.
        </div>
        <div className="text1 disabled">
          본문 비활성 신한은행 Ai스튜디오에 오신것을 환영합니다.
        </div>
        <div className="text2">보조 Ai스튜디오에 오신것을 환영합니다.</div>
        <div className="text3">캡션 Ai스튜디오에 오신것을 환영합니다.</div>
        <div className="text4">작은글자 Ai스튜디오에 오신것을 환영합니다.</div>
        <div>Publish Index test</div>
      </div>
    </div>
  );
}
