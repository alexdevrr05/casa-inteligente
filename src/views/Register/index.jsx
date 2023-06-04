import {Button, Card, Space, Typography} from "antd";
import {MailOutlined, UserOutlined} from '@ant-design/icons';
import {InputTextField, InputTextPassword} from "../../components/index.jsx";
import {useForm} from "../../hooks/index.js";
import './styles.css';

const { Title } = Typography;

export const Register = () => {

    const INIT_FORM = {
        name: '',
        email: '',
        password: ''
    };

    const [stateCurrent, handleChange] = useForm(INIT_FORM);
    const {email, password} = stateCurrent;

    const register = () => {
        console.log(email, password);
    }

    return (
        <main className={'container-main'}>
            <Card className={'animate__animated  animate__zoomIn container-register'}>
                <Title level={2}> Smart House </Title>
                <Title level={4}> Crear nueva cuenta </Title>

                <Space direction={'vertical'} size={'large'} style={{display: 'flex'}}>

                    <InputTextField
                        Label={'Nombre completo'}
                        Placeholder={'EJ: Ismael Romero'}
                        Icon={<UserOutlined/>}
                        Name={'name'}
                        HandleChange={handleChange}/>

                    <InputTextField
                        Label={'Correo'}
                        Placeholder={'ingresa tu correo electrónico'}
                        Icon={<MailOutlined />}
                        Name={'email'}
                        HandleChange={handleChange}/>

                    <InputTextPassword
                        Label={'Contraseña'}
                        Placeholder={'Ingresa tu contraseña'}
                        Name={'password'}
                        HandleChange={handleChange}/>

                    <Space direction={'vertical'} size={'small'} style={{display: 'flex'}}>
                        <Button type={'primary'} size={'large'} block onClick={register}>
                            Registrarse
                        </Button>
                    </Space>

                </Space>
            </Card>
        </main>
    );
}