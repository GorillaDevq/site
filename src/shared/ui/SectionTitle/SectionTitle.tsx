import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionTitle.module.scss';

interface SectionTitleProps {
    className?: string;
    text: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
    const { className, text } = props;

    return (
        <h2 className={classNames(cls.title, {}, [className])}>
            {text}
        </h2>
    );
};
