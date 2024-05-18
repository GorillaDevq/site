import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string,
}

export const Loader = (props: LoaderProps) => {
    const { className } = props;

    return (
        <ul className={classNames(cls.loader, {}, [className])}>
            <li className={cls.loader__item}></li>
            <li className={cls.loader__item}></li>
            <li className={cls.loader__item}></li>
            <li className={cls.loader__item}></li>
        </ul>
    );
};