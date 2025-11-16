/* eslint-disable */
import { useCallback, useContext, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "./../App.jsx";

function DetailPage({ clothes }) {
  let { 재고 } = useContext(Context1);

  const navigator = useNavigate();
  let [fade, setfade] = useState("");

  useEffect(() => {
    let time = setTimeout(() => {
      setAlert(false);
    }, 2000);

    let fadeTimer = setTimeout(() => {
      setfade("end");
    }, 100);

    return () => {
      clearTimeout(time, fadeTimer);
      setfade("");
    };
  }, []);

  let [count, setCount] = useState(0);
  let { id } = useParams();
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  let 찾은상품 = clothes.find(function (data) {
    return data.id == id;
  });

  return (
    <div className={`container start ${fade}`}>
      {alert == true ? (
        <Alert id="alert" key="info" variant="info">
          2초이내 구매시 할인
        </Alert>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={`/img/neweraItem${Number(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <input
            onChange={(e) => {
              let value = e.target.value;
              if (isNaN(value)) {
                window.alert("숫자 입력");
              } else {
              }
            }}
            type="text"
            placeholder="수량"
          />
          <button className="btn btn-danger">주문하기</button>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item
            onClick={() => {
              setTab(0);
            }}
          >
            <Nav.Link eventKey="link0">상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setTab(1);
            }}
          >
            <Nav.Link eventKey="link1">상품리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item
            onClick={() => {
              setTab(2);
            }}
          >
            <Nav.Link eventKey="link2">상품문의</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent clothes={clothes} tab={tab}></TabContent>
      </div>
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setfade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setfade("end");
    }, 100);

    return () => {
      clearTimeout;
      setfade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>
            <img src="/img/alpha_pc_01.jpg" style={{ width: "100%" }} alt="" />
            <img src="/img/alpha_pc_02.jpg" style={{ width: "100%" }} alt="" />
            <img src="/img/alpha_pc_03.jpg" style={{ width: "100%" }} alt="" />
            <img
              src="/img/collection_pc_60684010.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <p>
              밀리터리 감성의 대명사 알파 인더스트리(ALPHA INDUSTRIES)와 글로벌
              헤드웨어 브랜드 뉴에라, MLB가 만나 탄생한 협업 컬렉션을
              소개합니다. 이번 협업 컬렉션은 헤드웨어 4종과 어패럴 8종으로
              선보이며, 알파 인더스트리의 시그니처인 레드 컬러의 플라이트 태그와
              MLB 각 구단의 로고, 패치를 활용한 디자인으로 강렬한 존재감을
              나타냅니다. 헤드웨어는 내구성 높은 플라이트 나일론 소재의 59FIFTY
              도그이어 피티드캡 2종과 가벼운 착용감의 러닝 제트캡 2종으로
              구성되었습니다. 어패럴은 알파 인더스트리의 아이코닉한 실루엣인
              MA-1 플라이트 재킷 6종과 파카 2종으로 스포츠의 정통성과 밀리터리
              감성을 동시에 담아냈습니다. MLB의 팀 헤리티지와 뉴에라의 감각적인
              디자인, 알파 인더스트리의 밀리터리 디테일까지 완벽한 조화를 이뤄낸
              협업 컬렉션을 지금 바로 만나보세요.
            </p>
          </div>,
          <div>
            <p>상품리뷰</p>
          </div>,
          <div>
            <p>상품문의</p>
          </div>,
        ][tab]
      }
    </div>
  );
}

export default DetailPage;
