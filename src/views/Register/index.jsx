import {Button, Card, Space, Typography} from "antd";
import {MailOutlined, UserOutlined} from '@ant-design/icons';
import {InputTextField, InputTextPassword} from "../../components/index.jsx";
import {useForm} from "../../hooks/index.js";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { useDispatch } from "react-redux";
const { Title } = Typography;

export const Register = () => {

    const dispatch = useDispatch();

    const INIT_FORM = {
        name: '',
        email: '',
        password: ''
    };

    const {formValues, handleChange} = useForm(INIT_FORM);
    const {email, password} = formValues;

    const register = () => {
        console.log(email, password);
        dispatch(startCreatingUserWithEmailPassword({ email, password }));
    }

    return (
        <main style={styles.main}>
            <Card style={styles.containerRegister} className={'animate__animated  animate__zoomIn'}>
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
    containerRegister: {
        marginInline: '32px',
        width: 'calc(100% - 64px)',
        maxWidth: '450px',
        textAlign: 'center'
    }
};