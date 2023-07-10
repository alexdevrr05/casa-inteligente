import { Col, Layout, Row } from 'antd';

const { Content } = Layout;

export const ControlScreen = () => {

  return (
    <Content>
        <Row>
          <Col span={9}>

          </Col>
          <Col span={15}>
            <h3>Data table </h3>
          </Col>
        </Row>
    </Content>
  );
};