import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import LogoMobile from 'shared/assets/icons/Logo.svg';
import LogoDesktop from 'shared/assets/icons/Logo_desktop.svg';
import BurgerOpen from 'shared/assets/icons/Burger_to_open.svg';
import BurgerClose from 'shared/assets/icons/Burger_to_close.svg';
import React from "react";
import {Button} from "shared/ui/Button/Button";
import {Checkbox} from "widjets/Checkbox";

interface NavbarProps {
    className?: string;
    onBurger: () => void;
    isOpen: boolean;
}

export const Navbar = (props: NavbarProps) => {
    const { className, onBurger, isOpen } = props;
    //TODO: избавится от управление размерами logo
    const screenWidth = window.screen.width

    const mods: Mods = {
        [cls.width]: isOpen,
    }

    return (
        <nav className={classNames(cls.navbar, mods, [className])}>
            {screenWidth < 1024
                ? <LogoMobile />
                : <LogoDesktop />
            }
            <ul className={cls.navbar__list}>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        Франшиза
                    </a>
                </li>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        Инвестиции
                    </a>
                </li>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        Статистика
                    </a>
                </li>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        О бренде
                    </a>
                </li>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        Блог
                    </a>
                </li>
                <li className={cls.navbar__item}>
                    <a className={cls.navbar__link} target='_blank'>
                        Книга
                    </a>
                </li>
            </ul>
            {/*TODO: переделать чекбокс*/}
            <Checkbox />
            <Button
                onClick={onBurger}
                className={cls.navbar__burger}
            >
                {isOpen
                    ? <BurgerClose />
                    : <BurgerOpen />
                }
            </Button>
        </nav>
    );
};