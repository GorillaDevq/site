import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import {Navbar} from "widjets/Navbar";
import {CardsList} from "widjets/CardsList";
import {useState} from "react";
import {Burger} from "widjets/Burger";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface HeaderProps {
    className?: string,
}

export const Header = (props: HeaderProps) => {
    const { className } = props;
    const [isOpenBurger, setIsOpenBurger] = useState(false);

    const toggleBurger = () => setIsOpenBurger((prevState) => !prevState)

    const modsHeader: Mods = {
        [cls.background]: isOpenBurger,
    }

    const modsDescription: Mods = {
        [cls.hidden]: isOpenBurger
    }

    return (
        <header className={classNames(cls.header, modsHeader, [className])}>
            <Navbar
                isOpen={isOpenBurger}
                onBurger={toggleBurger}
            />
            <Burger isOpen={isOpenBurger} />
            <div className={classNames(cls.header__description, modsDescription, [])}>
                <h1 className={cls.header__title}>
                    BBG – прозрачная компания
                    с <u>историей и брендами</u>,
                    в которых <u>сотрудники</u>, <u>франчайзи</u>,
                    <u>партнеры</u> и <u>инвесторы</u> – семья.
                </h1>
                <CardsList />
                <Button
                    className={cls.header__button}
                    theme={ButtonTheme.NAVIGATE_ACTIVE}
                >
                    Написать нам
                </Button>
            </div>
        </header>
    );
};
