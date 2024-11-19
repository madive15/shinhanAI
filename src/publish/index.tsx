import "./pubilsh.scss";

export default function PubIndex() {
    return (
        <>
            <div>
                <div>1. Color</div>
                <div>
                    <div className="sample-color-box color1"></div>
                </div>
            </div>
            <div>
                <div>2. Font</div>
                <h1>h1 신한은행 Ai스튜디오에 오신것을 환영합니다.</h1>
                <h2>h2 신한은행 Ai스튜디오에 오신것을 환영합니다.</h2>
                <h3>h3 신한은행 Ai스튜디오에 오신것을 환영합니다.</h3>
                <div className="typography-text1">본문 신한은행 Ai스튜디오에 오신것을 환영합니다.</div>
                <div className="typography-text1">본문 비활성 신한은행 Ai스튜디오에 오신것을 환영합니다.</div>
                <div className="typography-text2">보조 Ai스튜디오에 오신것을 환영합니다.</div>
                <div className="typography-text3">캡션 Ai스튜디오에 오신것을 환영합니다.</div>
                <div className="typography-text4">작은글자 Ai스튜디오에 오신것을 환영합니다.</div>
                <div>Publish Index test</div>
            </div>
        </>
    );
}
