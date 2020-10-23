import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";
import { Row, Col } from "antd";

import BreadcrumbComponent from "./components/BreadcrumbComponent/BreadcrumbComponent";
import DatePickers from "./components/DatepickerComponent/DatepickerComponent";
import DropdownComponent from "./components/DropdownComponent/DropdownComponent";
import CardComponent from "./components/CardComponent/CardComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import CheckboxComponent from "./components/CheckboxComponent/CheckboxComponent";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <div className="title">
          <h1>M12 Exercici. Creant un layout amb Ant Design</h1>
        </div>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Row style={{ width: "1500px", height: "600px" }}>
          <Col span={12}>
            <Row style={{ height: "300px" }}>
              <Col
                span={16}
                style={{
                  background: "green",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BreadcrumbComponent />
              </Col>
              <Col
                span={8}
                style={{
                  background: "aqua",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardComponent />
              </Col>
            </Row>
            <Row style={{ height: "300px" }}>
              <Col
                span={8}
                style={{
                  background: "coral",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DatePickers />
              </Col>
              <Col
                span={16}
                style={{
                  background: "purple",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DropdownComponent />
              </Col>
            </Row>
          </Col>
          <Col
            span={6}
            style={{
              background: "khaki",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormComponent />
          </Col>
          <Col span={6}>
            <Row style={{ height: "300px" }}>
              <Col
                span={24}
                style={{ background: "orange", paddingTop: "100px" }}
              >
                <SliderComponent />
              </Col>
            </Row>
            <Row style={{ height: "300px", textAlign: "center" }}>
              <Col
                span={24}
                style={{ background: "mediumpurple", paddingTop: "100px" }}
              >
                <CheckboxComponent />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
