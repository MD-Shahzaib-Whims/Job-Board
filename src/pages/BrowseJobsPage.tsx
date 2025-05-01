import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import { useJob } from '../context/JobContext';

const BrowseJobsPage = () => {
  const { jobs } = useJob();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Browse Jobs</h1>
      
      <SearchBar 
        placeholder="Search jobs by title, company, or keywords"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-8"
      />

      <div className="flex gap-8">
        <aside className="w-1/4">
          <FilterSidebar />
        </aside>

        <main className="w-3/4">
          <div className="space-y-6">
            {jobs?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {(!jobs || jobs.length === 0) && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found. Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowseJobsPage;