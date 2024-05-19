import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {StaffPage} from "pages/StaffPage";
import {RosterPage} from "pages/RosterPage";

enum AppRoutes {
    MAIN = 'main',
    STAFF = 'staff',
    ROSTER = 'roster',
    // // Last
    // NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.STAFF]: '/staff',
    [AppRoutes.ROSTER]: '/roster',
    // // Last
    // [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.STAFF]: {
        path: RoutePath.staff,
        element: <StaffPage />,
    },
    [AppRoutes.ROSTER]: {
        path: RoutePath.roster,
        element: <RosterPage />
    }
    // [AppRoutes.NOT_FOUND]: {
    //     path: RoutePath.notFound,
    //     element:
    // }
}
