import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CheckboxRest.module.scss';
import BlinLogo from "shared/assets/icons/BB_red_22px.svg";
import SushiLogo from "shared/assets/icons/SV_black.svg";

interface CheckboxRestProps {
    className?: string,
}

export const CheckboxRest = (props: CheckboxRestProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.checkbox, {}, [className])}>
            <input
                id="restaurant-toggle"
                type='checkbox'
                className={cls.checkbox__input}
            />
            <label htmlFor="restaurant-toggle" className={cls.checkbox__label}>
                <BlinLogo className={cls.checkbox__logo}/>
                <SushiLogo className={cls.checkbox__logo}/>
            </label>
        </div>
    );
};
