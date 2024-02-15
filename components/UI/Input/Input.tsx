import React, { InputHTMLAttributes } from 'react';

import s from './input.module.scss'
import cn from 'classnames';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    boxClassName?: string
    label?: string
    placeholder?: string
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(({boxClassName, label, placeholder, ...props}: InputProps, ref) => {
    return (
        <div
            className={cn(
                s.inputBox,
                boxClassName
            )}>
            <label>{label}</label>
            <input
                ref={ref}
                placeholder={placeholder}
                {...props}
                className={s.inputBox__input}
            />
        </div>
    )
});


export default Input

