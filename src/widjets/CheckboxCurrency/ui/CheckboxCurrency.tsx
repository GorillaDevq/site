import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CheckboxCurrency.module.scss';

interface CheckboxCurrencyProps {
    className?: string,
}

export const CheckboxCurrency = (props: CheckboxCurrencyProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.checkbox, {}, [className])}>
            <input
                id="currency-toggle"
                type='checkbox'
                className={cls.checkbox__input}
            />
            <label htmlFor="currency-toggle" className={cls.checkbox__label}>
                <span className={`${cls.checkbox__currency} ${cls.checkbox__currency_rub}`}>RUB</span>
                <span className={`${cls.checkbox__currency} ${cls.checkbox__currency_aed}`}>AED</span>
            </label>
        </div>
    );
};
