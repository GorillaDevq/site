import { classNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/providers/router";
import logoSrc from "shared/assets/images/logo.png";
import cls from "./App.module.scss";

function App() {

    return (
        <div className={classNames('app', {}, [])}>
            <header className={cls.header}>
                <img src={logoSrc} alt="Logo" className={cls.header__logo}/>
                <nav className={cls.header__navbar}>
                    <a href={"#"} className={cls.header__link}>Главная</a>
                    <a href={"#"} className={cls.header__link}>Документы</a>
                    <a href={"#"} className={cls.header__link}>Пауэрлифтинг</a>
                    <a href={"#"} className={cls.header__link}>Гиревой спорт</a>
                    <a href={"#"} className={cls.header__link}>Армрестлинг</a>
                    <a href={"/roster"} className={cls.header__link}>Спорстмены</a>
                    <a href={"/staff"} className={cls.header__link}>Штаб</a>
                    <a href={"#"} className={cls.header__link}>Прочее</a>
                </nav>
            </header>
            <main className={cls.content}>
                <AppRouter />
            </main>
            <footer className={cls.footer}>
                <ul className={cls.footer__list}>
                    <li className={cls.footer__item}>Контакты</li>
                    <li className={cls.footer__item}>sports@mail.ru</li>
                    <li className={cls.footer__item}>г. Волгоград</li>
                    <li className={cls.footer__item}>8-999-888-77-66</li>
                    <li className={cls.footer__item}>© 2024</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
