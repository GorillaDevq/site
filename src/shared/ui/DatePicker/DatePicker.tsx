import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './DatePicker.module.scss';
import {useCallback, useState, MouseEvent} from "react";

interface MonthPickerProps {
    className?: string;
    renderArray: Array<string>;
    initialState: string;
}

export const DatePicker = (props: MonthPickerProps) => {
    const { className, renderArray, initialState } = props;
    const [date, setDate] = useState(initialState);
    const [isOpen, setIsOpen] = useState(false);

    const onItemClick = useCallback((evt: MouseEvent<HTMLLIElement>) => {
        evt.stopPropagation();
        const value = evt.currentTarget.textContent;
        setDate(value);
        setIsOpen((prevState) => !prevState);
    }, [])

    const toggleVisibility = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, [])

    const mods: Mods = {
        [cls.date__list_active]: isOpen,
    }

    return (
        <div
            onClick={toggleVisibility}
            className={classNames(cls.date, {}, [className])}
        >
            <div className={cls.date__container}>
                <span className={cls.date__current}>{date}</span>
            </div>
            <ul className={classNames(cls.date__list, mods, [className])}>
                {renderArray.map(item => (
                    <li
                        onClick={onItemClick}
                        className={cls.date__item}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
