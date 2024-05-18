import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Team.module.scss';
import {Person} from "entities/Person";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";
import {SectionParagraph} from "shared/ui/SectionParagraph/SectionParagraph";

interface TeamProps {
    className?: string,
}

export const Team = (props: TeamProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.team, {}, [className])}>
            <div className={cls.team__description}>
                <SectionTitle text={'BlinBerry Group – это команда'} className={cls.team__title}/>
                {/*TODO: после интеграции i18n зарефакторится*/}
                <SectionParagraph text={'Наша стратегия: развитие внутреннего человеческого потенциала.\n' +
                    '                    Мы растим новых сотрудников: отправляем на форумы, подбираем\n' +
                    '                    образовательные программы и устраиваем тренинги.'} className={cls.team__paragraph}/>
            </div>
            <ul className={cls.team__persons}>
                <Person />
            </ul>
            <Button
                className={cls.team__button}
                theme={ButtonTheme.NAVIGATE_ACTIVE}
            >
                Посмотреть вакансии
            </Button>
        </section>
    );
};
