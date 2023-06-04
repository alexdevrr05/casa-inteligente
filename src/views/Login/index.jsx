import {Button, Card, Space, Typography} from "antd";
import {GoogleOutlined, UserOutlined} from '@ant-design/icons';
import {InputTextField, InputTextPassword} from "../../components/index.jsx";
import {useForm} from "../../hooks/index.js";
import {NavLink} from "react-router-dom";
import './styles.css';

const { Title } = Typography;

export const Login = () => {

    const INIT_FORM = {
        email: '',
        password: ''
    };

    const [stateCurrent, handleChange] = useForm(INIT_FORM);
    const {email, password} = stateCurrent;

    const login = () => {
        console.log(email, password);
    }

    return (
        <main className={'container-main'}>
            <Card className={'animate__animated  animate__zoomIn container-login'}>
                <Title level={2}> Smart House </Title>
                <Title level={4}> Iniciar sesión </Title>

                <Space direction={'vertical'} size={'large'} style={{display: 'flex'}}>

                    <InputTextField
                        Label={'Usuario'}
                        Placeholder={'ingresa tu correo electrónico'}
                        Icon={<UserOutlined/>}
                        Name={'email'}
                        HandleChange={handleChange}/>

                    <InputTextPassword
                        Label={'Contraseña'}
                        Placeholder={'Ingresa tu contraseña'}
                        Name={'password'}
                        HandleChange={handleChange}/>

                    <Space direction={'vertical'} size={'small'} style={{display: 'flex'}}>
                        <Button type={'primary'} size={'large'} block onClick={login}>
                            Iniciar sesión
                        </Button>

                        <Button size={'large'} icon={<GoogleOutlined />} block onClick={login}>
                            Iniciar sesión con Google
                        </Button>
                    </Space>

                    <Space direction={'vertical'} size={'small'} style={{display: 'flex'}}>
                        <NavLink to={'/auth/register'} style={{textAlign: 'center'}}>
                            ¿No tienes una cuenta?
                        </NavLink>
                    </Space>
                </Space>
            </Card>
        </main>
    );
}