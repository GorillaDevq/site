import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Person.module.scss';

interface PersonProps {
    className?: string,
}
//TODO: сделать сущность из этого... А не список
export const Person = (props: PersonProps) => {
    const { className } = props;

    return (
        <>
            <li className={classNames(cls.person, {}, [className, cls.person_ceo])}>
                <div className={`${cls.person__description} ${cls.person__description_ceo}`}>
                    <h3 className={cls.person__name}>
                        Евгений<br />
                        Купко
                    </h3>
                    <p className={cls.person__position}>CEO</p>
                </div>
                <blockquote className={cls.person__quote}>
                    “Я решил создать место для всей семьи.
                    Здесь мы готовим только то, что могут
                    есть наши дети”
                </blockquote>
            </li>
            <li className={classNames(cls.person, {}, [className, cls.person_cio])}>
                <div className={`${cls.person__description} ${cls.person__description_cio}`}>
                    <h3 className={cls.person__name}>
                        Ростислав<br />
                        Маслов
                    </h3>
                    <p className={cls.person__position}>CIO</p>
                </div>
                <blockquote className={cls.person__quote}>
                    Будущее за IT решениями. На базе нашей компании
                    есть целое подразделение, отвечающее за внедрение
                    последних digital технологий
                </blockquote>
            </li>
            <li className={classNames(cls.person, {}, [className, cls.person_chief])}>
                <div className={`${cls.person__description} ${cls.person__description_chief}`}>
                    <h3 className={cls.person__name}>
                        Бесполудин<br />
                        Олег
                    </h3>
                    <p className={cls.person__position}>BRAND CHEF</p>
                </div>
                <blockquote className={cls.person__quote}>
                    Понимание потребностей гостя помогает мне
                    создавать лучшие решения в фуд-сфере!
                </blockquote>
            </li>
        </>
    );
};