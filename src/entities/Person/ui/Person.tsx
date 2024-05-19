import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Person.module.scss';
import {PersonInterface} from "entities/Person/lib/types/person";

interface PersonProps {
    className?: string;
    person: PersonInterface;
}

export const Person = (props: PersonProps) => {
    const { className, person } = props;
    const { srcAvatar, name, sport, rank } = person;

    return (
        <li className={classNames(cls.person, {}, [className])}>
            <img src={srcAvatar} alt="Person" className={cls.person__avatar}/>
            <h2 className={cls.person__name}>{name}</h2>
            <p className={cls.person__sport}>Вид спорта: {sport}</p>
            <span className={cls.person__rank}>Спортивное звание/разряд: {rank}</span>
        </li>
    );
};
