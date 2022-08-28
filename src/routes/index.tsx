import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PageNotFound from '../pages/404/PageNotFound';
import Home from '../pages/Home';
import ScrollToTop from './ScrollToTop';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  );
};
export default AppRoutes;
