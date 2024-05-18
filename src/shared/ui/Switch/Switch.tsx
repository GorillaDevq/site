import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Switch.module.scss';

//TODO: продумать логику switch UI

interface SwitchProps {
    className?: string;
    name?: string;
    firstId?: string;
    secondId?: string;
    thirdId?: string;
}

export const Switch = (props: SwitchProps) => {
    const {
        className,
        firstId,
        secondId,
        thirdId,
        name,
    } = props;

    return (
        <div className={classNames(cls.switch, {}, [className])}>
            <input type="radio" name={name} className={cls.switch__input} id={firstId} defaultChecked/>
            <label htmlFor={firstId} className={`${cls.switch__label} ${cls.switch__label_}`}>
                Все
            </label>
            <input type="radio" name={name} className={cls.switch__input} id={secondId}/>
            <label htmlFor={secondId} className={`${cls.switch__label} ${cls.switch__label_negotiation}`}>
                Ведутся переговоры
            </label>
            <input type="radio" name={name} className={cls.switch__input} id={thirdId}/>
            <label htmlFor={thirdId} className={`${cls.switch__label} ${cls.switch__label_free}`}>
                Свободно для переговоров
            </label>
            <span className={cls.switch__round}></span>
        </div>
    );
};