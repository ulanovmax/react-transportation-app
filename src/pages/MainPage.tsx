import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header.tsx';

const MainPage = () => {
    return (
        <>
            <Header />

            <main className="flex-grow pt-10 pb-20">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default MainPage;
