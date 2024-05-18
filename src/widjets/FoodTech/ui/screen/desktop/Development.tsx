import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Development.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Loader} from "shared/ui/Loader/Loader";

interface DevelopmentProps {
    className?: string,
}

export const Development = (props: DevelopmentProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.development, {}, [className])}>
            <ul className={cls.development__list}>
                <li className={cls.development__header}>
                    Мобильное приложение
                </li>
                <li className={cls.development__about}>
                    Как и в любом деле, всё начинается с идеи!
                    Она была простая: накормить каждого гостя
                    на этой планете. А потом идея переросла
                    в миссию: создать место
                </li>
                <li className={cls.development__button}>
                    <Button theme={ButtonTheme.INVERTED}>
                        Подробнее &rarr;
                    </Button>
                </li>
                <li className={cls.development__loader}><Loader /></li>
            </ul>
            <ul className={cls.development__others}>
                <li className={cls.development__invention}>Курьер</li>
                <li className={cls.development__invention}>Сервис обратной связи</li>
                <li className={cls.development__invention}>Toster</li>
            </ul>
        </div>
    );
};