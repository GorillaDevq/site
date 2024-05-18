import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Restaurant.module.scss';
import {RestaurantInterface} from "../model/types/restaurant";
import {splitIncome} from "shared/lib/splitIncome/splitIncome";

interface RestaurantProps {
    className?: string;
    restaurant: RestaurantInterface;
    index: number;
}

export const Restaurant = ({ className, restaurant, index }: RestaurantProps) => {
    const {
        serial_num,
        street,
        city,
        income,
        income_percent
    } = restaurant;

    const desktopWidth = window.screen.width > 1024

    //TODO: Должна быть еще точка между сериал энд улицей, нет ее в мобиле
    return (
        <li className={classNames(cls.restaurant, {}, [className])}>
            <p className={cls.restaurant__index}>{index}</p>
            <ul className={cls.restaurant__description}>
                <li className={cls.restaurant__serial}>{serial_num}</li>
                {desktopWidth && <li className={cls.restaurant__point}>•</li>}
                <li className={cls.restaurant__street}>{street}</li>
                <li className={cls.restaurant__city}>{city}</li>
            </ul>
            <ul className={cls.restaurant__proceeds}>
                <li className={cls.restaurant__income}>{splitIncome(income)} &#8381;</li>
                <li className={cls.restaurant__percent}>{income_percent}&#37;&#8593;</li>
            </ul>
        </li>
    );
};
