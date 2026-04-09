import React, { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/cart/CartDrawer'
import { Toaster } from 'react-hot-toast'
import SmoothScroll from './components/common/SmoothScroll'
import PageLoader from './components/common/PageLoader'
import smokeBackground from '../pink-dense-smoke-black-background.jpg'

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
  const useCosmicTheme = true
  const showLandingSmoke = location.pathname === '/'

  return (
    <CartProvider>
      <SmoothScroll />
      <div className={`min-h-screen flex flex-col font-body ${useCosmicTheme ? 'theme-neon' : 'text-dark'}`}>
        {!hideLayout && <Navbar />}
        <main className={`flex-1 z-0 relative ${useCosmicTheme ? 'bg-[#000000]' : 'bg-surface'}`}>
          {useCosmicTheme && showLandingSmoke && (
            <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
              <div className="smoke-layer smoke-layer-a absolute inset-0 flex items-end justify-center">
                <div
                  className="smoke-plume smoke-plume-a h-[min(112vh,1260px)] w-[min(70vw,940px)]"
                  style={{
                    backgroundImage: `url(${smokeBackground})`,
                  }}
                />
              </div>
              <div className="smoke-layer smoke-layer-b absolute inset-0 flex items-end justify-center">
                <div
                  className="smoke-plume smoke-plume-b h-[min(106vh,1180px)] w-[min(58vw,740px)]"
                  style={{
                    backgroundImage: `url(${smokeBackground})`,
                  }}
                />
              </div>
              <div className="smoke-layer smoke-layer-c absolute inset-0 flex items-end justify-center">
                <div
                  className="smoke-plume smoke-plume-c h-[min(100vh,1080px)] w-[min(48vw,620px)]"
                  style={{
                    backgroundImage: `url(${smokeBackground})`,
                  }}
                />
              </div>
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 54%, rgba(0, 0, 0, 0.34) 100%)',
                }}
              />
            </div>
          )}
          <Suspense fallback={<PageLoader />}>
            <div className="relative z-[1]">
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
            </div>
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
