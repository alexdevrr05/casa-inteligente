import {NavBar, ViewAuth} from "../../components";
import {useCustomForm} from "../../hooks/useCustomForm";
import {INIT_FORM_MESSAGES} from "../../constants/forms";
import {InputText} from "../../components/InputText";
import './styles.css';
export const Messages = () => {

    const {stateCurrent, onReset, onChange} = useCustomForm(INIT_FORM_MESSAGES);
    const {dateTime, message, receiver, sender, status} = stateCurrent;

    const submit = () => {
        onReset(INIT_FORM_MESSAGES);
    }

    return (
        <div>
            <NavBar/>
            <ViewAuth/>
            <main>
                <div className={'form-data'}>
                    <h2> Nuevo mensaje </h2>

                    <InputText
                        Label={'Mensaje para: '}
                        Placeholder={'EJ: hector@gmail.com '}
                        Field={receiver}
                        Type={'email'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Mensaje'}
                        Placeholder={'Ej: Hola mundo'}
                        Field={message}
                        Type={'text'}
                        OnChange={onChange}/>

                    <button onClick={() => { submit() }}> Enviar</button>

                </div>

                <div className={'another-actions'}>
                    {/*{ TODO: algo }*/}
                </div>
            </main>
        </div>
    );
}