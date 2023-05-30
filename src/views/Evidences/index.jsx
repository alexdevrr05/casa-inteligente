import {NavBar, ViewAuth} from "../../components";
import {useCustomForm} from "../../hooks/useCustomForm";
import {INIT_FORM_EVIDENCES} from "../../constants/forms";
import {InputText} from "../../components/InputText";

import './styles.css'

export const Evidences = () => {

    const {stateCurrent, onReset, onChange} = useCustomForm(INIT_FORM_EVIDENCES);
    const {data, images, message} = stateCurrent;

    const submit = () => {
        onReset(INIT_FORM_EVIDENCES);
    }

    return (
        <div>
            <NavBar/>
            <ViewAuth/>
            
            <main>

                <div className={'form-data'}>
                    <h2> Registrar evidencia</h2>
                    <InputText
                        Label={'Nombre'}
                        Placeholder={'Ingresa tu nombre:'}
                        Field={data}
                        Type={'text'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Imagenes'}
                        Placeholder={'Ingresa una o varias imagenes'}
                        Field={images}
                        Type={'file'}
                        OnChange={onChange}/>


                    <InputText
                        Label={'Mensaje'}
                        Placeholder={'Ingresa un mensaje'}
                        Field={message}
                        Type={'text'}
                        OnChange={onChange}/>

                    <button onClick={() => { submit() }}> Guardar evidencia</button>

                </div>

                <div className={'another-actions'}>
                    {/*{ TODO: algo }*/}
                </div>
            </main>


        </div>
    );
}