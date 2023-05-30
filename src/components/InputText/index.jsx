
import './inputText.css';

export const InputText = ({Label, Field, Placeholder, Type, OnChange}) => {
    return (
        <div className={'form-control'}>
            <label> { Label } </label>
            <input
                id={Field.id}
                type={Type ? Type : 'text'}
                placeholder={Placeholder}
                value={Field.value}
                onChange={(e) => {
                    OnChange(Field.key, e.target.value);
                }}
            />
        </div>
    );
};