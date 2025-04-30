import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import CompanyCard from '../components/CompanyCard';
import { useJobContext } from '../context/JobContext';
import { ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';

const HomePage = () => {
  const { filteredJobs, companies } = useJobContext();
  const [sortBy, setSortBy] = useState('newest');
  const [showCompanies, setShowCompanies] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState(false);

  const toggleFilters = () => {
    setExpandedFilters(!expandedFilters);
  };

  const toggleShowCompanies = () => {
    setShowCompanies(!showCompanies);
  };

  const sortJobs = () => {
    let sorted = [...filteredJobs];
    
    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
      case 'oldest':
        return sorted.sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime());
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return sorted;
    }
  };

  const sortedJobs = sortJobs();
  const featuredJobs = sortedJobs.filter(job => job.featured);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Find Your <span className="text-blue-600">Dream Job</span> Today
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse thousands of job opportunities from top companies around the world.
          Your career journey starts here.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Mobile Filters Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={toggleFilters}
          className="w-full flex items-center justify-between bg-white rounded-lg shadow-sm p-4 text-gray-700"
        >
          <span className="font-medium">Filters</span>
          {expandedFilters ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar - Mobile Collapsible */}
        <div
          className={`${
            expandedFilters ? 'block' : 'hidden'
          } md:block md:w-1/4 lg:w-1/5 transition-all duration-300 ease-in-out mb-6 md:mb-0`}
        >
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="md:flex-1">
          {/* Featured Jobs */}
          {featuredJobs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Jobs</h2>
              <div className="grid grid-cols-1 gap-6">
                {featuredJobs.map(job => (
                  <JobCard key={job.id} job={job} featured={true} />
                ))}
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {showCompanies ? 'Top Companies' : 'Latest Jobs'}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleShowCompanies}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {showCompanies ? 'Show Jobs' : 'Show Companies'}
                </button>
                {!showCompanies && (
                  <div className="relative inline-block">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="newest">Newest</option>
                      <option value="oldest">Oldest</option>
                      <option value="name-asc">Name (A-Z)</option>
                      <option value="name-desc">Name (Z-A)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ArrowUpDown size={14} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {showCompanies ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map(company => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {sortedJobs
                  .filter(job => !job.featured)
                  .map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronUp className="h-5 w-5 rotate-90" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;