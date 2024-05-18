import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Footer.module.scss';
import Logo from 'shared/assets/icons/Logo_footer.svg';
import VK from 'shared/assets/icons/vk.svg';
import TG from 'shared/assets/icons/tg.svg';
import YT from 'shared/assets/icons/yt.svg';
interface FooterProps {
    className?: string,
}

export const Footer = (props: FooterProps) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.footer, {}, [className])}>
            <div className={cls.footer__container}>
                <nav className={cls.footer__navbar}>
                    <Logo className={cls.footer__logo} />
                    <div className={cls.footer__socials}>
                        <VK className={cls.footer__vk}/>
                        <TG className={cls.footer__tg}/>
                        <YT className={cls.footer__yt}/>
                    </div>
                </nav>
                <ul className={cls.footer__contacts}>
                    <li className={cls.footer__contact}>
                        {/*TODO: избавиться от дивов*/}
                        <div>franchising@blinbery.team</div>
                        <div>8 (937) 533-38-17</div>
                    </li>
                    <li className={cls.footer__address}>
                        {/*TODO: избавиться от дивов*/}
                        <a className={cls.footer__link}>Правовые договоры и соглашения</a>
                        <div>2022 ® БлинБери, Волгоград, ул.Чуйкова 37</div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
