import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    NAVIGATE = 'navigate',
    NAVIGATE_ACTIVE = 'navigate_active',
    WHITE = 'white',
    WHITE_ACTIVE = 'white_active',
    INVERTED = 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    ellipse?: boolean;
}

export const Button: FC<ButtonProps> = memo((ButtonProps) => {
    const {
        className,
        children,
        theme,
        ellipse = false,
        ...otherProps
    } = ButtonProps;

    return (
        <button
            className={classNames(cls.button, {[cls.ellipse]: ellipse}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
