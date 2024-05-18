import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SwitchCategory.module.scss';

interface SwitchCategoryProps {
    className?: string,
}

export const SwitchCategory = (props: SwitchCategoryProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.switch, {}, [className])}>
            <input type="radio" name='switch-form' className={cls.switch__input} id='franchise' defaultChecked/>
            <label htmlFor='franchise' className={`${cls.switch__label} ${cls.switch__label_franchise}`}>
                Франшиза
            </label>
            <input type="radio" name='switch-form' className={cls.switch__input} id='investments'/>
            <label htmlFor='investments' className={`${cls.switch__label} ${cls.switch__label_investments}`}>
                Инвестиции
            </label>
            <input type="radio" name='switch-form' className={cls.switch__input} id='partnership'/>
            <label htmlFor='partnership' className={`${cls.switch__label} ${cls.switch__label_partnership}`}>
                Партнерство
            </label>
            <input type="radio" name='switch-form' className={cls.switch__input} id='job'/>
            <label htmlFor='job' className={`${cls.switch__label} ${cls.switch__label_job}`}>
                Работа
            </label>
            <input type="radio" name='switch-form' className={cls.switch__input} id='other'/>
            <label htmlFor='other' className={`${cls.switch__label} ${cls.switch__label_other}`}>
                Другое
            </label>
            <span className={cls.switch__round}></span>
        </div>
    );
};