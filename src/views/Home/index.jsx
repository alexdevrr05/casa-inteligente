import { Layout } from 'antd';
import { useSelector } from 'react-redux';

const { Content } = Layout;

export const HomeScreen = () => {

  const { displayName } = useSelector((state) => state.auth);

  return (
    <Content>
      Welcome {displayName || ''} 🤩
    </Content>
  );
};