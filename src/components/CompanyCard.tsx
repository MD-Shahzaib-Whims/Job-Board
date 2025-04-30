import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Briefcase as BriefcaseBusiness } from 'lucide-react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <Link
      to={`/companies/${company.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
    >
      <div className="h-24 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      <div className="p-6 relative">
        <div className="absolute -top-12 left-6 w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-lg text-gray-800">{company.name}</h3>
          <p className="text-gray-600 mt-1 line-clamp-2">{company.description}</p>
          
          <div className="mt-4 flex flex-wrap text-sm text-gray-500 gap-y-2">
            <div className="flex items-center mr-4">
              <MapPin size={16} className="mr-1" />
              <span>{company.location}</span>
            </div>
            <div className="flex items-center mr-4">
              <BriefcaseBusiness size={16} className="mr-1" />
              <span>{company.industry}</span>
            </div>
            <div className="flex items-center">
              <Users size={16} className="mr-1" />
              <span>{company.employees}</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-blue-600">
              {company.openPositions} open positions
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Active
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;