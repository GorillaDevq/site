import { classNames } from 'shared/lib/classNames/classNames';
import { Header } from "widjets/Header";
import { Footer } from "widjets/Footer";
import {AppRouter} from "app/providers/router";


function App() {

    return (
        <div className={classNames('app', {}, [])}>
            <Header />
            <main className={'content'}>
                <AppRouter />
            </main>
            <Footer />
        </div>
    );
}

export default App;
