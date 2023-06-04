import { Button, Card, Space, Typography } from "antd";
import { GoogleOutlined, UserOutlined } from '@ant-design/icons';
import { InputTextField, InputTextPassword } from "../../components/index.jsx";
import { useForm } from "../../hooks/index.js";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { startGoogleSignIn, /*startLoginWithEmailPassword */ } from '../../store/auth';

const { Title } = Typography;

export const Login = () => {

    const INIT_FORM = {
        email: '',
        password: ''
    };

    const dispatch = useDispatch();
    const [stateCurrent, handleChange] = useForm(INIT_FORM);
    const {email, password} = stateCurrent;

    const login = () => {
        console.log(email, password);
    }

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch( startGoogleSignIn() );
    }

    return (
        <main style={styles.main}>
            <Card style={styles.containerLogin} className={'animate__animated  animate__zoomIn'}>
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

                        <Button size={'large'} icon={<GoogleOutlined />} block onClick={onGoogleSignIn}>
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

const styles = {
    main: {
        backgroundColor: '#F0F2F5',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogin: {
        marginInline: '32px',
        width: 'calc(100% - 64px)',
        maxWidth: '450px',
        textAlign: 'center'
    }
};