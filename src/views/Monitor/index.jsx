import { Col, Layout, Row } from 'antd';

const { Content } = Layout;

export const MonitorScreen = () => {

  return (
    <Content>
      <h1>
        Monitorear
      </h1>
        <Row>
          <Col span={10}>
          

          </Col>
          <Col span={14}>
            <h3>Data table</h3>
          </Col>
        </Row>
    </Content>
  );
};