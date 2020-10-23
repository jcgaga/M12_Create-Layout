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
      <Content style={{ margin: "50px" }}>
        <Row style={{ height: "600px" }}>
          <Col span={12}>
            <Row style={{ height: "300px" }}>
              <Col span={16} style={{ background: "green" }}>
                <BreadcrumbComponent />
              </Col>
              <Col span={8} style={{ background: "aqua" }}>
                <CardComponent />
              </Col>
            </Row>
            <Row style={{ height: "300px" }}>
              <Col span={8} style={{ background: "coral" }}>
                <DatePickers />
              </Col>
              <Col
                span={16}
                style={{ background: "purple"}}
              >
                <DropdownComponent />
              </Col>
            </Row>
          </Col>
          <Col span={6} style={{ background: "khaki" }}>
            <FormComponent />
          </Col>
          <Col span={6} style={{ background: "green" }}>
            <Row style={{ height: "300px" }}>
              <Col span={24} style={{ background: "orange" }}>
                <SliderComponent />
              </Col>
            </Row>
            <Row style={{ height: "300px" }}>
              <Col span={24} style={{ background: "mediumpurple" }}>
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
