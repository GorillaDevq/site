import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

export enum InputTheme {
    BORDER_BOTTOM = 'borderBottom',
    CLEAR = 'clear'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        theme = InputTheme.CLEAR,
        type = 'text',
        ...otherProps
    } = props;

    return (
        <input
            type={type}
            className={classNames(cls.input, {}, [className, cls[theme]])}
            {...otherProps}
        />
    );
});
