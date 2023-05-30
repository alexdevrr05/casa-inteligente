import {NavBar, ViewAuth} from "../../components";
import {InputText} from "../../components/InputText";
import './styles.css'

export const Users = () => {



    const submit = () => {
        //TODO onReset
    }

    return (
        <div>
            <NavBar/>
            <ViewAuth/>
            <main>
                <div className={'form-data'}>
                    <h2> Nuevo usuario </h2>

                    //TODO: form

                    <button onClick={() => { submit() }}> Enviar</button>

                </div>

                <div className={'another-actions'}>
                    {/*{ TODO: algo }*/}
                </div>

            </main>
        </div>
    );
}