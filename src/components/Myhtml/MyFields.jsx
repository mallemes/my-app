import React from 'react';
import styles from './styles.module.css'

export const MyTextarea = ({meta, input, ...props}) => {
    const error = meta.touched && meta.error;
    return (
        <div className={styles.formControl+" "+ (error? styles.error:"")}>
               <textarea {...input} {...props} />
            <span>{error}</span>
        </div>

    );
};
export const MyInput = ({meta, input, ...props}) => {
    const error = meta.touched && meta.error;
    return (
        <div className={styles.formControl+" "+ (error? styles.error:"")}>
            <input {...input} {...props} />
            <span>{error}</span>
        </div>

    );
};


