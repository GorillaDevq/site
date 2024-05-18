import {CityInterface} from "entities/City";
import {RestaurantInterface} from "entities/Restaurant";
import {ButtonTheme} from "shared/ui/Button/Button";
import {ArticleInterface} from "entities/Article";

export const citiesArray: CityInterface[] = [
    {
        Text: 'Санкт-Петербург',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Екатеринбург',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Новосибирск',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Москва',
        BB: true,
        SV: true,
        Negotiation: false,
    },
    {
        Text: 'Казань',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Нижний Новгород',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Челябинск',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Красноярск',
        BB: false,
        SV: false,
        Negotiation: false,
    },
    {
        Text: 'Барнаул 🔥',
        BB: false,
        SV: false,
        Negotiation: true,
    },
]

export const restaurantArray: RestaurantInterface[] = [
    {
        serial_num: 'VLG 1.0',
        street: 'ул.Чуйкова, 27',
        city: 'Волгоград',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'VLZ.0.1',
        street: '36-й квартал',
        city: 'Волжский',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'VLG.0.1',
        street: '7-я гвардейская',
        city: 'Волгоград',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'VLG.0.2',
        street: 'Авангард',
        city: 'Волгоград',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'VLG.0.5',
        street: 'Акварель 1-й этаж',
        city: 'Волгоград',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'VLG.0.6',
        street: 'Астрахань ТЦ Ярмарка',
        city: 'Волгоград',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'SVL.3.1',
        street: 'Севастополь Маяк',
        city: 'Севастополь',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'PNZ.1.1',
        street: 'Пенза Пассаж',
        city: 'Пенза',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'PNZ.1.2',
        street: 'Пенза Коллаж',
        city: 'Пенза',
        income: 1122432,
        income_percent: 23
    },
    {
        serial_num: 'ADL.0.2',
        street: 'ул. Кирова, д. 58',
        city: 'Адлер',
        income: 1122432,
        income_percent: 23
    }
]

interface ButtonInterface {
    text: string;
    theme?: ButtonTheme;
}

export const buttonArray: ButtonInterface[] = [
    {
        text: 'Мобильное приложение',
        theme: ButtonTheme.WHITE_ACTIVE
    },
    {
        text: 'Курьер',
        theme: ButtonTheme.WHITE
    },
    {
        text: 'Сервис обратной связи',
        theme: ButtonTheme.WHITE
    },
]

export const articleArray: ArticleInterface[] = [
    {
        title: 'Employee Journey Map: как понять потребности своих сотрудников',
        about: 'Большинство компаний уделяют пристальное внимание клиентскому опыту, но упускают из виду опыт сотрудников. Тем временем именно от сотрудников зависит, останутся ли клиенты довольны обслуживанием.'
    },
    {
        title: 'Три вопроса, которые стоит задать гостю ресторана, чтобы стать лучше',
        about: 'За 10 лет работы ресторанов, мы не раз и не два пытались ответить на вопросы: как удовлетворить гостя? как сделать его счастливым?  как сделать так, чтобы он захотел возвращаться вновь и вновь?'
    },
    {
        title: 'Три вопроса, которые предприниматель должен задать себе на старте ',
        about: 'Развитие собственного бизнеса опирается не только на усердный труд, бессонные ночи и бесконечную веру в дело, но и прежде всего — на стратегическое планирование.'
    },
    {
        title: '14 февраля в 18:00  BBG IT Conf, места ограничены',
        about: 'Большинство компаний уделяют пристальное внимание клиентскому опыту, но упускают из виду опыт сотрудников.',
        inverted: true,
    }
]

export const monthArray: Array<string> = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const yearArray: Array<string> = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

export const burgerArray: ButtonInterface[] = [
    {
        text: 'Франшиза',
        theme: ButtonTheme.NAVIGATE_ACTIVE,
    },
    {
        text: 'Инвестиции',
        theme: ButtonTheme.NAVIGATE,
    },
    {
        text: 'Статистика',
        theme: ButtonTheme.NAVIGATE,
    },
    {
        text: 'О бренде',
        theme: ButtonTheme.NAVIGATE,
    },
    {
        text: 'Блог',
        theme: ButtonTheme.NAVIGATE,
    },
    {
        text: 'Книга',
        theme: ButtonTheme.NAVIGATE,
    }
];

