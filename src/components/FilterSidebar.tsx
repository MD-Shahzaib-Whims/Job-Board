import React from 'react';
import { useJobContext } from '../context/JobContext';

type Filter = {
  label: string;
  options: Array<{ value: string; label: string }>;
  filterType: 'category' | 'experience' | 'salary' | 'jobType';
};

const FilterSidebar = () => {
  const { filters, setFilters } = useJobContext();

  const filterGroups: Filter[] = [
    {
      label: 'Job Category',
      filterType: 'category',
      options: [
        { value: 'technology', label: 'Technology' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'design', label: 'Design' },
        { value: 'finance', label: 'Finance' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'education', label: 'Education' },
      ],
    },
    {
      label: 'Experience Level',
      filterType: 'experience',
      options: [
        { value: 'entry', label: 'Entry Level' },
        { value: 'mid', label: 'Mid Level' },
        { value: 'senior', label: 'Senior Level' },
        { value: 'executive', label: 'Executive' },
      ],
    },
    {
      label: 'Salary Range',
      filterType: 'salary',
      options: [
        { value: '0-50000', label: 'Up to $50,000' },
        { value: '50000-100000', label: '$50,000 - $100,000' },
        { value: '100000-150000', label: '$100,000 - $150,000' },
        { value: '150000+', label: '$150,000+' },
      ],
    },
    {
      label: 'Job Type',
      filterType: 'jobType',
      options: [
        { value: 'full-time', label: 'Full-Time' },
        { value: 'part-time', label: 'Part-Time' },
        { value: 'contract', label: 'Contract' },
        { value: 'remote', label: 'Remote' },
        { value: 'internship', label: 'Internship' },
      ],
    },
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: filters[filterType]?.includes(value)
        ? filters[filterType].filter((item: string) => item !== value)
        : [...(filters[filterType] || []), value],
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-6">
        {filterGroups.map((group) => (
          <div key={group.filterType} className="border-b border-gray-200 pb-4 last:border-0">
            <h4 className="font-medium text-gray-700 mb-2">{group.label}</h4>
            <div className="space-y-2">
              {group.options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`${group.filterType}-${option.value}`}
                    checked={filters[group.filterType]?.includes(option.value) || false}
                    onChange={() => handleFilterChange(group.filterType, option.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`${group.filterType}-${option.value}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;