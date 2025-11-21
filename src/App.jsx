/* eslint-disable */
import { useState, createContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./routes/Detail.jsx";
import AboutPage from "./routes/About.jsx";
import data from "./data.js";
import Page404 from "./routes/Page404";
import Layout from "./routes/Layout.jsx";
import axios from "axios";
import "./App.css";
import Cart from "./routes/Cart.jsx";

export let Context1 = createContext();

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched") == null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  const [clothes, setclothes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  return (
    <div>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route
            path="/"
            element={
              <MainPage clothes={clothes} setclothes={setclothes}></MainPage>
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고, clothes }}>
                <DetailPage clothes={clothes}></DetailPage>
              </Context1.Provider>
            }
          ></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}>
            <Route
              path="member"
              element={<div>멤버 소개 페이지임</div>}
            ></Route>
            <Route
              path="location"
              element={<div>위치 소개 페이지임</div>}
            ></Route>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

function MainPage(props) {
  let 꺼낸거 = localStorage.getItem("watched");
  let 변환된거 = JSON.parse(꺼낸거);
  const [count, setCount] = useState(1);
  let [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="main-bg">
        <video
          src="https://newera5950.jpg3.kr/video/25fw_bc_pc.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="main-text">
        <h4>NEW ERA 2025 COLLECTION</h4>
        <p>NEW & SPECIAL</p>
      </div>
      <Container>
        <Row>
          {props.clothes.map((clothes, i) => {
            return (
              <Col key={i}>
                <Link
                  to={`/detail/${i}`}
                  onClick={() => {
                    if (변환된거.find((id) => id == clothes.id)) {
                    } else {
                      변환된거.push(clothes.id);
                      localStorage.setItem("watched", JSON.stringify(변환된거));
                    }
                  }}
                >
                  <img
                    src={`/img/neweraItem${i + 1}.jpg`}
                    alt=""
                    width="80%"
                    className="itemImg"
                  />
                  <h4 className="itemTitle">{clothes.title}</h4>
                  <p className="itemPrice">{clothes.price}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
        <Button
          variant="dark"
          onClick={(e) => {
            if (count === 1) {
              setLoading(true);
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((data) => {
                  let copy = [...props.clothes, ...data.data];
                  props.setclothes(copy);
                  setLoading(false);
                })
                .catch(() => {
                  console.log("실행 실패");
                  setLoading(false);
                });
              setCount(2);
            } else if (count === 2) {
              setLoading(true);
              axios
                .get("https://codingapple1.github.io/shop/data3.json")
                .then((data) => {
                  let copy = [...props.clothes, ...data.data];
                  props.setclothes(copy);
                  setLoading(false);
                })
                .catch(() => {
                  console.log("실행 실패");
                  setLoading(false);
                });
              setCount(3);
            } else {
              alert("더이상 상품이 없습니다.");
            }
          }}
        >
          {loading ? "loading..." : "더보기"}
        </Button>
      </Container>
    </div>
  );
}

export default App;
