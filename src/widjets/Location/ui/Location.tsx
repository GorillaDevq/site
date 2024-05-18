import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Location.module.scss';
import Arrow from 'shared/assets/icons/Arrow_video.svg';
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";
interface LocationProps {
    className?: string,
}
// TODO: видео заглушка

export const Location = (props: LocationProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.location, {}, [className])}>
            <SectionTitle text={'Мы гордимся тем что готовим'} className={cls.location__title}/>
            <div className={cls.location__video}>
                <button className={cls.location__button}>
                    <Arrow className={cls.location__play} />
                </button>
            </div>
            <ul className={cls.location__list}>
                <li className={cls.location__item}>
                    <h3 className={cls.location__amount}>1240</h3>
                    <p className={cls.location__subtitle}>приготовили за сегодня</p>
                    <div className={cls.location__live}>• live</div>
                </li>
                <li className={cls.location__item}>
                    <h3 className={cls.location__amount}>100 600</h3>
                    <p className={cls.location__subtitle}>за неделю</p>
                </li>
                <li className={cls.location__item}>
                    Мы амбициозны: хотим открыть 5000 локаций
                    fast casual 4 по всему миру,
                    и 1000 из них - в России.
                    Наша миссия — сделать счастливым и сытым
                    каждого гостя, где бы он ни находился.
                </li>
            </ul>
        </section>
    );
};
