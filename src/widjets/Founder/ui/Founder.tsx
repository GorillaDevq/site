import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Founder.module.scss';
import avatar_mobile from 'shared/assets/images/Avatar_mobile.png'
import avatar_desktop from 'shared/assets/images/Avatar_desktop.png'
interface FounderProps {
    className?: string,
}

export const Founder = (props: FounderProps) => {
    const { className } = props;

    //TODO: костыль
    const screenWidth = window.screen.width

    return (
        <section className={classNames(cls.founder, {}, [className])}>
            <img
                className={cls.founder__avatar}
                src={screenWidth > 1024 ? avatar_desktop :avatar_mobile}
                alt="person"
            />
            <ul className={cls.founder__person}>
                <li className={cls.founder__name}>Евгений Купко</li>
                <li className={cls.founder__position}>Founder</li>
            </ul>
            <blockquote className={cls.founder__quote}>
                “Я решил создать место для всей семьи.{'\u00A0'}
                Здесь мы готовим только
                то,{'\u00A0'}что{'\u00A0'}могут есть наши дети”
            </blockquote>
        </section>
    );
};
