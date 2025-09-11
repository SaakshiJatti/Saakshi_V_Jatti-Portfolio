import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import HomePage from './pages/home-landing-page';
import PortfolioGallery from './pages/portfolio-gallery';
import ContactPage from './pages/contact-page';
import AboutPage from './pages/about-page';
import LoadingScreen from './pages/loading-screen';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/loading-screen" element={<LoadingScreen />} />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;