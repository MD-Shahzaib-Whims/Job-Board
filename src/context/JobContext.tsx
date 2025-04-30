import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockJobs, mockCompanies } from '../data/mockData';
import { Job, Company } from '../types';

interface JobContextType {
  jobs: Job[];
  companies: Company[];
  filteredJobs: Job[];
  filters: Record<string, string[]>;
  setFilters: (filters: Record<string, string[]>) => void;
  filterJobs: (options: { query?: string; location?: string; jobType?: string }) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [jobs] = useState<Job[]>(mockJobs);
  const [companies] = useState<Company[]>(mockCompanies);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(mockJobs);
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const filterJobs = ({ query = '', location = '', jobType = '' }) => {
    let results = [...jobs];

    // Filter by search query
    if (query) {
      const searchTerms = query.toLowerCase();
      results = results.filter(
        job =>
          job.title.toLowerCase().includes(searchTerms) ||
          job.company.name.toLowerCase().includes(searchTerms) ||
          job.description.toLowerCase().includes(searchTerms)
      );
    }

    // Filter by location
    if (location) {
      const locationTerm = location.toLowerCase();
      results = results.filter(
        job => job.location.toLowerCase().includes(locationTerm)
      );
    }

    // Filter by job type
    if (jobType) {
      results = results.filter(
        job => job.type.toLowerCase() === jobType.toLowerCase()
      );
    }

    // Apply additional filters
    if (Object.keys(filters).length > 0) {
      Object.entries(filters).forEach(([filterType, values]) => {
        if (values.length > 0) {
          switch (filterType) {
            case 'category':
              results = results.filter(job => 
                values.some(category => 
                  job.category?.toLowerCase() === category.toLowerCase() ||
                  job.tags.some(tag => tag.toLowerCase() === category.toLowerCase())
                )
              );
              break;
            case 'experience':
              results = results.filter(job => 
                values.includes(job.experienceLevel || '')
              );
              break;
            case 'salary':
              results = results.filter(job => {
                if (!job.salaryRange) return false;
                return values.some(range => {
                  const [min, max] = range.split('-').map(Number);
                  if (!max) return job.salaryRange.min >= min;
                  return job.salaryRange.min <= max && job.salaryRange.max >= min;
                });
              });
              break;
            case 'jobType':
              results = results.filter(job => 
                values.includes(job.type.toLowerCase())
              );
              break;
            default:
              break;
          }
        }
      });
    }

    setFilteredJobs(results);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        companies,
        filteredJobs,
        filters,
        setFilters,
        filterJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};