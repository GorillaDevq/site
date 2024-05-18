import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionParagraph.module.scss';

interface SectionParagraphProps {
    className?: string;
    text: string;
}

export const SectionParagraph = (props: SectionParagraphProps) => {
    const { className, text } = props;

    return (
        <p className={classNames(cls.paragraph, {}, [className])}>
            {text}
        </p>
    );
};
