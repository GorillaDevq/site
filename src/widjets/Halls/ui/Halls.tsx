import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Halls.module.scss';
import {Hall} from "entities/Hall/ui/Hall";
import cherrySrc from 'shared/assets/images/Cherry_form_mobile.png'

interface HallsProps {
    className?: string,
}

export const Halls = (props: HallsProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.halls, {}, [className])}>
            {/*Проверить дизайн, потому что костылю в этом месте*/}
            <div className={cls.halls__container}>
                <h2 className={cls.halls__title}>Волгоград</h2>
                <ul className={cls.halls__list}>
                    <Hall />
                    <Hall />
                    <Hall />
                    <img className={cls.halls__cherry} src={cherrySrc} alt='Cherry'/>
                </ul>
            </div>
        </section>
    );
};
