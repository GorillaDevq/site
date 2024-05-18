import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Restaurants.module.scss';
import BlinLogo from 'shared/assets/icons/BB_white.svg';
import SushiLogo from 'shared/assets/icons/SV_white.svg';
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";
import {SectionParagraph} from "shared/ui/SectionParagraph/SectionParagraph";

interface RestaurantsProps {
    className?: string,
}
// TODO: Refactor component, decomposition SWITCH
export const Restaurants = (props: RestaurantsProps) => {
    const { className } = props;
    //TODO: костыль
    const screenWidth = window.screen.width

    return (
        <section className={classNames(cls.restaurants, {}, [className])}>
            <SectionTitle text={'Наши рестораны'} className={cls.restaurants__title} />
            <SectionParagraph
                text={
                    'Мы амбициозны: хотим открыть 5000 локаций fast casual 4 ' +
                    'по всему миру, и 1000 из них в России. ' +
                    'Наша миссия — сделать счастливым и сытым ' +
                    'каждого гостя, где бы он ни находился. '
                }
                className={cls.restaurants__paragraph}
            />
            <div className={cls.restaurants__container}>
                <div className={cls.switch}>
                    <input type="radio" name="switch" className={cls.switch__input} id="blin-bery"/>
                    <label htmlFor="blin-bery" className={cls.switch__label}>
                        <BlinLogo className={cls.switch__logo} />
                    </label>
                    <input type="radio" name="switch" className={cls.switch__input} id="sushi-vesla" defaultChecked/>
                    <label htmlFor="sushi-vesla" className={cls.switch__label}>
                        <SushiLogo className={cls.switch__logo} />
                    </label>
                    <span className={cls.switch__round}></span>
                </div>
                <div className={classNames(cls.switch, {}, [cls.switch_place])}>
                    <input type="radio" name="switch-place" className={cls.switch__input} id="street" defaultChecked/>
                    <label
                        htmlFor="street"
                        className={classNames(cls.switch__label, {},
                            [cls.switch__label_place, cls.switch__label_street])
                        }
                    >
                        {screenWidth > 1024 && <BlinLogo />}Стрит
                    </label>
                    <input type="radio" name="switch-place" className={cls.switch__input} id="court"/>
                    <label
                        htmlFor="court"
                        className={classNames(cls.switch__label, {},
                        [cls.switch__label_place, cls.switch__label_court])
                        }
                    >
                        {screenWidth > 1024 && <BlinLogo />}Фуд-корт
                    </label>
                    <input type="radio" name="switch-place" className={cls.switch__input} id="kitchen"/>
                    <label
                        htmlFor="kitchen"
                        className={classNames(cls.switch__label, {},
                        [cls.switch__label_place, cls.switch__label_kitchen])
                        }
                    >
                        {screenWidth > 1024 && <BlinLogo />}Дарк китчен
                    </label>
                    <span className={classNames(cls.switch__round, {}, [cls.switch__round_place])}></span>
                </div>
            </div>
        </section>
    );
};
