import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';

const BrowseCompaniesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    size: '',
    location: '',
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Browse Companies</h1>
      
      <div className="mb-8">
        <SearchBar 
          placeholder="Search companies..."
          value={searchQuery}
          onChange={(value) => setSearchQuery(value)}
        />
      </div>

      <div className="flex gap-8">
        <aside className="w-1/4">
          <FilterSidebar 
            filters={filters}
            onFilterChange={setFilters}
            filterOptions={{
              industry: ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing'],
              size: ['1-50', '51-200', '201-500', '501-1000', '1000+'],
              location: ['Remote', 'On-site', 'Hybrid'],
            }}
          />
        </aside>

        <main className="w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company cards will be rendered here once connected to real data */}
            <CompanyCard
              name="Example Tech"
              industry="Technology"
              location="San Francisco, CA"
              size="201-500"
              description="Leading technology company focused on innovation and growth."
              logo="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              openPositions={5}
            />
            <CompanyCard
              name="Health Solutions"
              industry="Healthcare"
              location="Boston, MA"
              size="501-1000"
              description="Innovative healthcare solutions provider improving patient care."
              logo="https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              openPositions={8}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowseCompaniesPage;