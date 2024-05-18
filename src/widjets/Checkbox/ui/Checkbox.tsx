import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';
import React from "react";

interface CheckboxProps {
    className?: string,
}

export const Checkbox = (props: CheckboxProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.checkbox, {}, [className])}>
            <input
                id="language-toggle"
                className={cls.checkbox__input}
                type="checkbox"
            />
            <label htmlFor="language-toggle" className={cls.checkbox__label}></label>
            <span className={classNames(cls.checkbox__lang, {}, [cls.checkbox__lang_ru])}>RU</span>
            <span className={classNames(cls.checkbox__lang, {}, [cls.checkbox__lang_en])} >EN</span>
        </div>
    );
};

