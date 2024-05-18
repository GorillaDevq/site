import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Cities.module.scss';
import {City} from "entities/City";
import {citiesArray} from "shared/const/common";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";

interface CitiesProps {
    className?: string,
}

export const Cities = (props: CitiesProps) => {
    const { className } = props;

    const screenWidth = window.screen.width

    return (
        <section className={classNames(cls.cities, {}, [className])}>
            <SectionTitle text={'Города'} className={cls.cities__title}/>
            {/*TODO: когда появится интернационализация заменить на SectionParagraph*/}
            <p className={cls.cities__paragraph}>
                {screenWidth > 1024
                    ?   `Мы амбициозны: хотим открыть 5000 локаций
                        fast casual 4 по${'\u00A0'}всему миру, и${'\u00A0'}1000
                        из них в${'\u00A0'}России.`

                    :   `Мы амбициозны: хотим открыть 5000 локаций
                        fast casual 4 по${'\u00A0'}всему миру, и${'\u00A0'}1000
                        из них в${'\u00A0'}России. Наша миссия — сделать
                        счастливым и${'\u00A0'}сытым каждого гостя,
                        где${'\u00A0'}бы${'\u00A0'}он${'\u00A0'}ни находился.`
                }
            </p>
            {/*TODO: избавиться от дивов сделать отдельным компонентом*/}
            <div className={cls.table}>
                <div className={cls.table__head}>
                    {screenWidth > 1024
                        ? (
                            <div className={cls.switch}>
                                <input type="radio" name="switch-category" className={cls.switch__input} id="all" defaultChecked/>
                                <label htmlFor="all" className={`${cls.switch__label} ${cls.switch__label_all}`}>
                                    Все
                                </label>
                                <input type="radio" name="switch-category" className={cls.switch__input} id="negotiation"/>
                                <label htmlFor="negotiation" className={`${cls.switch__label} ${cls.switch__label_negotiation}`}>
                                    Ведутся переговоры
                                </label>
                                <input type="radio" name="switch-category" className={cls.switch__input} id="free"/>
                                <label htmlFor="free" className={`${cls.switch__label} ${cls.switch__label_free}`}>
                                    Свободно для переговоров
                                </label>
                                <span className={cls.switch__round}></span>
                            </div>
                        )
                        : (
                            <select className={cls.table__sort}>
                                <option className={cls.table__option}>Все</option>
                                <option className={cls.table__option}>Занято</option>
                                <option className={cls.table__option}>Ведутся переговоры</option>
                                <option className={cls.table__option}>Свободно для переговоров</option>
                            </select>
                        )
                    }
                </div>
                <ul className={cls.table__body}>
                    {citiesArray.map(city => (
                        <City
                            city={city}
                            key={city.Text}
                            className={cls.table__city}
                        />))}
                </ul>
            </div>
            <Button
                theme={ButtonTheme.NAVIGATE_ACTIVE}
                className={cls.cities__button}
                ellipse
            >
                Посмотреть все города
            </Button>
        </section>
    );
};
