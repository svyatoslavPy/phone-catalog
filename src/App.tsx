import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer } from './components/Footer';

import './App.scss';

import { useEffect } from 'react';
import { MainHeader } from './components/MainHeader';
import { useAppSelector } from './hooks/useAppSelector';
import { PageLayout } from './layouts/PageLayout';

export const App = () => {
  const { theme } = useAppSelector(state => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={'App'}>
      <MainHeader />

      <PageLayout>
        <Outlet />
      </PageLayout>

      <ToastContainer />
      <Footer />
    </div>
  );
};
