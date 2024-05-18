import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Statics.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {TableStatistics} from "widjets/TableStatistics";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";
import {SectionParagraph} from "shared/ui/SectionParagraph/SectionParagraph";

interface StaticsProps {
    className?: string,
}

export const Statics = (props: StaticsProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.statics, {}, [className])}>
            <SectionTitle text={'Лидеры продаж'} className={cls.statics__title}/>
            <SectionParagraph text={'BlinBerry Group прозрачная компания.\n' +
                '                В прозрачной компании не надо спрашивать\n' +
                '                разрешения. Ты и так видишь весь процесс насквозь.'} className={cls.statics__subtitle}/>
            <TableStatistics />
            <Button
                theme={ButtonTheme.NAVIGATE_ACTIVE}
                className={cls.statics__button}
            >
                Все рестораны
            </Button>
        </section>
    );
};
