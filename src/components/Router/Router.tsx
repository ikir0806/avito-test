import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NewsPage from '../NewsPage/NewsPage';

const Router = () => (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/news/:newsId' element={<NewsPage />} />
    </Routes>
);

export default Router;
