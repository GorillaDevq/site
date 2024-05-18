import {RouteProps} from "react-router-dom";
import {CitiesPage} from "pages/CitiesPage";
import {MainPage} from "pages/MainPage";
import {BlogPage} from "pages/BlogPage";
import {StatisticsPage} from "pages/StatisticsPage";
import {RestaurantPage} from "pages/RestaurantPage";

enum AppRoutes {
    MAIN = 'main',
    CITIES = 'cities',
    BLOG = 'blog',
    STATISTICS = 'statistics',
    RESTAURANT = 'restaurant',
    // // Last
    // NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CITIES]: '/cities',
    [AppRoutes.BLOG]: '/blog',
    [AppRoutes.STATISTICS]: '/statistics',
    [AppRoutes.RESTAURANT]: '/restaurant',
    // // Last
    // [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CITIES]: {
        path: RoutePath.cities,
        element: <CitiesPage />,
    },
    [AppRoutes.BLOG]: {
        path: RoutePath.blog,
        element: <BlogPage />
    },
    [AppRoutes.STATISTICS]: {
        path: RoutePath.statistics,
        element: <StatisticsPage />
    },
    [AppRoutes.RESTAURANT]: {
        path: RoutePath.restaurant,
        element: <RestaurantPage />
    }
    // [AppRoutes.NOT_FOUND]: {
    //     path: RoutePath.notFound,
    //     element:
    // }
}
