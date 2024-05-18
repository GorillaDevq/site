import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Burger.module.scss';
import {Button} from "shared/ui/Button/Button";
import {burgerArray} from "shared/const/common";
import {Footer} from "widjets/Footer";

interface BurgerProps {
    className?: string;
    isOpen: boolean;
}

export const Burger = (props: BurgerProps) => {
    const { className, isOpen } = props;

    const mods: Mods = {
        [cls.active]: isOpen,
    }

    return (
        <div className={classNames(cls.burger, mods, [className])}>
            <nav className={cls.burger__navigation}>
                {burgerArray.map(btn => (
                    <Button className={cls.burger__button} theme={btn?.theme} key={btn.text}>
                        {btn.text}
                    </Button>
                ))}
            </nav>
            <Footer />
        </div>
    );
};
