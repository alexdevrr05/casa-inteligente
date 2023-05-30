import { useState } from "react";

export const useCustomForm = (form) => {
    const [state, setState] = useState(form);

    const onChange = (key, value) => {
        setState({
            ...state,
            [key]: {
                id: state[key].id,
                key: state[key].key,
                value: value,
            },
        });
    };

    const onReset = (form) => {
        setState(form);
    };

    return {
        ...state,
        stateCurrent: state,
        onChange,
        onReset,
    };
};