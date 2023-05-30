import {NavBar, ViewAuth} from "../../components";
import './styles.css'
import {InputText} from "../../components/InputText";
import {useCustomForm} from "../../hooks/useCustomForm";
import {INIT_FORM_MEASUREMENT} from "../../constants/forms";

export const Measurement = () => {

    const {stateCurrent, onChange, onReset} = useCustomForm(INIT_FORM_MEASUREMENT)
    const {dateTime, gps_N, gps_E, information, sensorName, status, unit} = stateCurrent;

    const submit = () => {
        onReset(INIT_FORM_MEASUREMENT);
    };

    return (
        <div>
            <NavBar/>
            <ViewAuth/>
            <main>

                <div className={'form-data'}>
                    <h2> Registrar Medición</h2>
                    <InputText
                        Label={'Fecha:'}
                        Placeholder={''}
                        Field={dateTime}
                        Type={'date'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Información'}
                        Placeholder={'Ej: nuevo sensor'}
                        Field={information}
                        Type={'text'}
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
                        Label={'Nombre del sensor'}
                        Placeholder={'Ej: RJSD92'}
                        Field={sensorName}
                        Type={'text'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Status'}
                        Placeholder={'Activo o inactivo'}
                        Field={status}
                        Type={'text'}
                        OnChange={onChange}/>

                    <InputText
                        Label={'Unidad de medida'}
                        Placeholder={'EJ: metros'}
                        Field={unit}
                        Type={'text'}
                        OnChange={onChange}/>

                    <button onClick={() => { submit() }}> Guardar medición</button>

                </div>

                <div className={'another-actions'}>
                    {/*{ TODO: algo }*/}
                </div>
            </main>

        </div>
    );
}