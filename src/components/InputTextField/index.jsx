import { Input, Space, Typography } from "antd";
const { Text } = Typography;

// eslint-disable-next-line react/prop-types
export const InputTextField = ({Label, Placeholder, Icon, Name, HandleChange}) => {
    return (
        <Space size={'small'} direction={'vertical'} style={{display: 'flex', textAlign: 'left'}}>
            <Text> { Label }: </Text>
            <Input
                size={'large'}
                prefix={Icon}
                onChange={HandleChange}
                name={Name}
                placeholder={Placeholder}/>
        </Space>
    );
};