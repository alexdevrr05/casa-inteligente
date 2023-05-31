import { Input, Space, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from "@ant-design/icons";
const { Text } = Typography;

// eslint-disable-next-line react/prop-types
export const InputTextPassword = ({Label, Placeholder, Name, HandleChange }) => {
    return (
        <Space size={'small'} direction={'vertical'} style={{display: 'flex', textAlign: 'left'}}>
            <Text> { Label }: </Text>
            <Input.Password
                size={'large'}
                prefix={<LockOutlined />}
                onChange={HandleChange}
                name={Name}
                placeholder={Placeholder}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
        </Space>
    );
};