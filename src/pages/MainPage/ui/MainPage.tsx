import cls from "./MainPage.module.scss";
import armSrc from "shared/assets/images/arm.jpg";
import girySrc from "shared/assets/images/giry.jpg";
import powerSrc from "shared/assets/images/power.jpg";

export default function MainPage () {
    return (
        <>
            <section className={cls.welcome}>
                <h1 className={cls.welcome__title}>Добро пожаловать</h1>
                <p className={cls.welcome__subtitle}>в мир силового спорта!</p>
                <div className={cls.welcome__background}></div>
                <div className={cls.welcome__list}>
                    <a className={cls.welcome__link} href="#">Записаться</a>
                    <a className={cls.welcome__link} href="#">Подробнее</a>
                </div>
            </section>
            <section className={cls.strength}>
                <h2 className={cls.strength__title}>Поднимая гантели: Взгляд в мир силы</h2>
                <ul className={cls.strength__list}>
                    <li className={cls.strength__item}>Силовые виды спорта являются одними из самых захватывающих и эффективных способов улучшения физической формы, развития силы и выносливости, а также достижения здорового и активного образа жизни.</li>
                    <li className={cls.strength__item}>Независимо от вашего уровня подготовки или целей, наш сайт предлагает вам всю необходимую информацию, ресурсы и поддержку, чтобы помочь вам достичь ваших спортивных и физических амбиций.</li>
                </ul>
                <ul className={cls.strength__cards}>
                    <li className={cls.strength__card}>
                        <p className={cls.strength__text}>Пауэрлифтинг</p>
                        <img className={cls.strength__picture} alt="picture" src={powerSrc}/>
                    </li>
                    <li className={cls.strength__card}>
                        <p className={cls.strength__text}>Армрестлинг</p>
                        <img className={cls.strength__picture} alt="picture" src={armSrc}/>
                    </li>
                    <li className={cls.strength__card}>
                        <p className={cls.strength__text}>Гирьевой спорт</p>
                        <img className={cls.strength__picture} alt="picture" src={girySrc}/>
                    </li>
                </ul>
            </section>
            <section className={cls.connection}>
                <form className={cls.form}>
                    <h2 className={cls.form__title}>Свяжитесь с нами</h2>
                    <div className={cls.form__container}>
                        <input type="text" placeholder="Имя" className={cls.form__input}/>
                        <input type="email" placeholder="Почта" className={cls.form__input}/>
                    </div>
                    <textarea placeholder="Сообщение" className={cls.form__textarea}/>
                    <button type="submit" className={cls.form__button}>Отправить</button>
                </form>
            </section>
        </>
    );
};
