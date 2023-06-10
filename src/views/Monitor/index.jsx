import { Layout } from 'antd';
import FormEvidencias from '../../components/forms/FormEvidencias';

const { Content } = Layout;

export const MonitorScreen = () => {

  return (
    <Content>
        <h1>
          Welcome Monitor
        </h1>
        <FormEvidencias />
    </Content>
  );
};