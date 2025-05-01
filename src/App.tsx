import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobDetailPage from './pages/JobDetailPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import PostJobPage from './pages/PostJobPage';
import EditJobPage from './pages/EditJobPage';
import BrowseJobsPage from './pages/BrowseJobsPage';
import BrowseCompaniesPage from './pages/BrowseCompaniesPage';
import SalaryInfoPage from './pages/SalaryInfoPage';
import CareerAdvicePage from './pages/CareerAdvicePage';
import BrowseCandidatesPage from './pages/BrowseCandidatesPage.tsx';
import PricingPlansPage from './pages/PricingPlansPage';
import RecruitmentSolutionsPage from './pages/RecruitmentSolutionsPage';
import PrivateRoute from './components/PrivateRoute';
import { JobProvider } from './context/JobContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<BrowseJobsPage />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/companies" element={<BrowseCompaniesPage />} />
                <Route path="/companies/:id" element={<CompanyProfilePage />} />
                <Route path="/salary-information" element={<SalaryInfoPage />} />
                <Route path="/career-advice" element={<CareerAdvicePage />} />
                <Route path="/pricing" element={<PricingPlansPage />} />
                <Route path="/recruitment-solutions" element={<RecruitmentSolutionsPage />} />
                
                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                
                {/* Protected Routes */}
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/post-job"
                  element={
                    <PrivateRoute>
                      <PostJobPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/jobs/:id/edit"
                  element={
                    <PrivateRoute>
                      <EditJobPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/candidates"
                  element={
                    <PrivateRoute>
                      <BrowseCandidatesPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;