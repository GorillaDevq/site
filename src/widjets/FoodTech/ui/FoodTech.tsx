import { classNames } from 'shared/lib/classNames/classNames';
import cls from './FoodTech.module.scss';
import mobileSrc from "shared/assets/images/Mobile.png";
import {Development as MobileDevelopment} from "./screen/mobile/Development";
import {Development as DesktopDevelopment} from "./screen/desktop/Development";
import {SectionTitle} from "shared/ui/SectionTitle/SectionTitle";
import {SectionParagraph} from "shared/ui/SectionParagraph/SectionParagraph";
interface FoodTechProps {
    className?: string,
}

export const FoodTech = (props: FoodTechProps) => {
    const { className } = props;

    const desktopWidth = window.screen.width > 1024

    return (
        <section className={classNames(cls.foodTech, {}, [className])}>
            <div className={cls.foodTech__description}>
                <SectionTitle text={'BlinBerry Group – фуд-тех компания'} className={cls.foodTech__title}/>
                <SectionParagraph text={'Мы развиваем бренды на основе платформенных IT-решений'} className={cls.foodTech__subtitle}/>
            </div>
            {desktopWidth ? <DesktopDevelopment /> : <MobileDevelopment />}
            {/*TODO: пофиксить изображение, не совпадает*/}
            <img
                className={cls.foodTech__image}
                src={mobileSrc}
                alt='Mobile'
            />
        </section>
    );
};
