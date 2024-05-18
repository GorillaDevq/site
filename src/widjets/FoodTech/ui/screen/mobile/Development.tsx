import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Development.module.scss';
import {buttonArray} from "shared/const/common";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface DevelopmentProps {
    className?: string;
}

export const Development = (props: DevelopmentProps) => {
    const { className } = props;

    return (
        <ul className={classNames(cls.development, {}, [className])}>
            <li className={`${cls.development__item} ${cls.development__item_carousel}`}>
                {buttonArray.map(btn => (
                    <Button
                        theme={btn.theme}
                        className={cls.development__button}
                        key={btn.text}
                    >
                        {btn.text}
                    </Button>
                ))}
            </li>
            <li className={`${cls.development__item} ${cls.development__item_paragraph}`}>
                Как и в любом деле, всё начинается с идеи!
                Она была простая: накормить каждого гостя
                на этой планете. А потом идея переросла
                в миссию: создать место
            </li>
            <li className={`${cls.development__item} ${cls.development__item_button}`}>
                <Button
                    theme={ButtonTheme.NAVIGATE_ACTIVE}
                    className={cls.development__navigate}
                >
                    Подробнее &rarr;
                </Button>
            </li>
        </ul>
    );
};