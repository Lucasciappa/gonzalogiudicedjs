import { useState } from "react";
import Swal from 'sweetalert2'

const initialFormValues = {
    dia: "",
    mes: "",
    anio: "",
    evento: "",
    personas: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    formSubmitted: false,
    success: false
}

export const useFormControl = () => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const [errors, setErrors] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ("dia" in fieldValues)
            temp.dia = fieldValues.dia ? "" : "This field is required.";

        if ("mes" in fieldValues)
            temp.mes = fieldValues.mes ? "" : "This field is required.";

        if ("anio" in fieldValues)
            temp.anio = fieldValues.anio ? "" : "This field is required.";

        if ("evento" in fieldValues)
            temp.evento = fieldValues.evento ? "" : "This field is required.";

        if ("personas" in fieldValues)
            temp.personas = fieldValues.personas ? "" : "This field is required.";

        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required.";

        if ("phone" in fieldValues)
            temp.phone = fieldValues.phone ? "" : "This field is required.";

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required.";
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid."
        }

        if ("message" in fieldValues)
            temp.message = fieldValues.message ? "" : "This field is required.";

        setErrors({
            ...temp
        });

    }

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formIsValid()) {

            let data = {
                dia: values.dia,
                mes: values.mes,
                anio: values.anio,
                evento: values.evento,
                personas: values.personas,
                name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message
            }

            console.log(data);

            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log(res);
                setIsLoading(true);
                setTimeout(() => {
                    if (res.status === 200) {
                        Swal.fire({
                            title: '¡Mensaje enviado!',
                            text: '¡¡Muchas gracias por escribirnos!!',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500,
                        })
                        setIsLoading(false);
                    }
                }, 2000);
            })
        }
    };

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.dia &&
            fieldValues.mes &&
            fieldValues.anio &&
            fieldValues.evento &&
            fieldValues.personas &&
            fieldValues.name &&
            fieldValues.email &&
            fieldValues.phone &&
            fieldValues.message &&
            Object.values(errors).every((x) => x === "");

            console.log(isValid);
            console.log(errors);

        return isValid;
    };

    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors,
        isLoading
    };
}