import {NavBar, ViewAuth} from "../../components";
import './styles.css';
import {InputText} from "../../components/InputText";
import {useCustomForm} from "../../hooks/useCustomForm";
import {INIT_FORM_LOCATIONS} from "../../constants/forms";

export const Locations = () => {

    const {stateCurrent, onChange, onReset} = useCustomForm(INIT_FORM_LOCATIONS);
    const {address, email, gps_N, gps_E, owner, phone} = stateCurrent;

    const submit = () => {
      onReset(INIT_FORM_LOCATIONS);
    };

    return (
        <div>
            <NavBar/>
            <ViewAuth/>
            <main>

                <div className={'form-data'}>
                    <h2> Registrar Ubicación</h2>
                    <InputText
                        Label={'Dirección'}
                        Placeholder={'EJ: Av. Jalisco #255'}
                        Field={address}
                        Type={'text'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Correo'}
                        Placeholder={'Ingresa un correo'}
                        Field={email}
                        Type={'email'}
                        OnChange={onChange}/>

                    <div className={'form-gps'}>
                        <InputText
                            Label={'Latitud N'}
                            Placeholder={'Ej: 0.00'}
                            Field={gps_N}
                            Type={'number'}
                            OnChange={onChange}/>

                        <InputText
                            Label={'Latitud E'}
                            Placeholder={'Ej: 0.00'}
                            Field={gps_E}
                            Type={'number'}
                            OnChange={onChange}/>
                    </div>

                    <InputText
                        Label={'Propietario'}
                        Placeholder={'Propietario del dispositivo'}
                        Field={owner}
                        Type={'text'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Teléfono'}
                        Placeholder={'EJ: 322 222 2222'}
                        Field={phone}
                        Type={'phone'}
                        OnChange={onChange}/>

                    <button onClick={() => { submit() }}> Guardar ubicacion</button>

                </div>

                <div className={'another-actions'}>
                    {/*{ TODO: algo }*/}
                </div>
            </main>
        </div>
    );
}