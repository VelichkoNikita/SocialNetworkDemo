import React from "react";
import styles from "./FormsControls.module.css";
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}> <textarea {...restProps} {...input}/></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}> <input {...restProps} {...input}/></FormControl>
    )
}


export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        />{text}
    </div>
)