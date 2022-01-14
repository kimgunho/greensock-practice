import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import { links } from './assets/data/links';

import Home from './pages/home';
import NotFound from './components/shared/NotFount';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('app')}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={links.home} element={<Home />} />
          <Route path={links.notFount} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
