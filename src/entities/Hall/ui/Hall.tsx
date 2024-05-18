import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Hall.module.scss';
import hallSrc from 'shared/assets/images/SushiVesla.jpeg'
interface HallProps {
    className?: string,
}

export const Hall = (props: HallProps) => {
    const { className } = props;

    return (
        <li className={classNames(cls.hall, {}, [className])}>
            <img className={cls.hall__image} src={hallSrc} alt='hall'/>
            <p className={cls.hall__serial}>
                VLG 1.0
                <span className={cls.hall__street}>
                    ул.Чуйкова, 27
                </span>
            </p>
        </li>
    );
};
