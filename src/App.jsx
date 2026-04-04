import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import { Toaster } from 'react-hot-toast'
import SmoothScroll from './components/common/SmoothScroll'
import PageLoader from './components/common/PageLoader'

// Code-split all pages for smaller initial bundle
const HomePage = lazy(() => import('./pages/HomePage'))
const BrowsePage = lazy(() => import('./pages/BrowsePage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Dashboard pages
const DashboardOverview = lazy(() => import('./pages/seller/DashboardOverview'))
const DashboardAnalytics = lazy(() => import('./pages/seller/DashboardAnalytics'))
const DashboardEarnings = lazy(() => import('./pages/seller/DashboardEarnings'))
const DashboardProducts = lazy(() => import('./pages/seller/DashboardProducts'))
const DashboardUpload = lazy(() => import('./pages/seller/DashboardUpload'))
const DashboardReviews = lazy(() => import('./pages/seller/DashboardReviews'))
const DashboardMessages = lazy(() => import('./pages/seller/DashboardMessages'))
const DashboardPromotions = lazy(() => import('./pages/seller/DashboardPromotions'))
const DashboardSettings = lazy(() => import('./pages/seller/DashboardSettings'))

function App() {
  const location = useLocation()
  
  const hideLayoutConfig = ['/login', '/register', '/admin']
  const hideLayout = hideLayoutConfig.some(path => location.pathname.startsWith(path))

  return (
    <CartProvider>
      <SmoothScroll />
      <div className="min-h-screen flex flex-col font-body text-dark">
        {!hideLayout && <Navbar />}
        <main className="flex-1 bg-surface z-0 relative">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowsePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin" element={<DashboardOverview />} />
              <Route path="/admin/analytics" element={<DashboardAnalytics />} />
              <Route path="/admin/earnings" element={<DashboardEarnings />} />
              <Route path="/admin/products" element={<DashboardProducts />} />
              <Route path="/admin/upload" element={<DashboardUpload />} />
              <Route path="/admin/reviews" element={<DashboardReviews />} />
              <Route path="/admin/messages" element={<DashboardMessages />} />
              <Route path="/admin/promotions" element={<DashboardPromotions />} />
              <Route path="/admin/settings" element={<DashboardSettings />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        {!hideLayout && <Footer />}
      </div>
      <CartDrawer />
      <Toaster position="bottom-right" />
    </CartProvider>
  )
}

export default App
