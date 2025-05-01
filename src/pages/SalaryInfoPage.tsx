import React from 'react';

const SalaryInfoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Salary Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Salary Overview Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Salary Overview</h2>
          <p className="text-gray-600 mb-4">
            Explore comprehensive salary data across different industries, roles, and experience levels.
          </p>
        </div>

        {/* Industry Insights Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Industry Insights</h2>
          <p className="text-gray-600 mb-4">
            Get detailed insights into salary trends and compensation packages in your industry.
          </p>
        </div>

        {/* Salary Calculator Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Salary Calculator</h2>
          <p className="text-gray-600 mb-4">
            Use our salary calculator to estimate your market value based on your skills and experience.
          </p>
        </div>
      </div>

      {/* Detailed Salary Information */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Detailed Salary Information</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Experience Level</h3>
            <p className="text-gray-600">
              Entry Level: $40,000 - $60,000<br />
              Mid Level: $60,000 - $100,000<br />
              Senior Level: $100,000 - $150,000+
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Popular Job Roles</h3>
            <p className="text-gray-600">
              Software Engineer: $70,000 - $150,000<br />
              Product Manager: $80,000 - $160,000<br />
              Data Scientist: $75,000 - $140,000
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Benefits and Perks</h3>
            <p className="text-gray-600">
              Learn about common benefits packages, including healthcare, retirement plans, stock options, 
              and other perks offered by top companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfoPage;