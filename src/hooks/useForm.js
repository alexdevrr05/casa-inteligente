import { useState } from "react";

export const useForm = (initForm) => {
    const [inputText, setInputText] = useState(initForm);

    const onChange = (event) => {
        const {name, value} = event.target;
        setInputText({
            ...inputText,
            [name]: value
        })
    }

    const onReset = (form) => {
        setInputText(form);
    }

    return [
        inputText,
        onChange,
        onReset
    ];
};