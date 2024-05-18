import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CardsList.module.scss';
import cherry from "shared/assets/images/Cherry.png";

interface CardsListProps {
    className?: string,
}

export const CardsList = (props: CardsListProps) => {
    const { className } = props;

    return (
        <ul className={classNames(cls.cardsList, {}, [className])}>
            <li className={cls.cardsList__item}>
                <img
                    className={cls.cardsList__image}
                    src={cherry}
                    alt="Cherry"
                />
                <h2 className={cls.cardsList__header}>прибыль точки за год</h2>
                <p className={cls.cardsList__percent}>&#43;23&#37; в 2023 году</p>
                <p className={classNames(cls.cardsList__amount, {}, [cls.cardsList__amount_span])}>
                    &#8381; 11 122 432
                </p>
            </li>
            <li className={cls.cardsList__item}>
                <h2 className={cls.cardsList__header}>локаций</h2>
                <p className={cls.cardsList__percent}>&#43;23&#37; в 2023 году</p>
                <p className={cls.cardsList__amount}>600</p>
            </li>
            <li className={cls.cardsList__item}>
                <h2 className={cls.cardsList__header}>партнеров и франчайзи</h2>
                <p className={cls.cardsList__percent}>&#43;23&#37; в 2023 году</p>
                <p className={cls.cardsList__amount}>100</p>
            </li>
        </ul>
    );
};
