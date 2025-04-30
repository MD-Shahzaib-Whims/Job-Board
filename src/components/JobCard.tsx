import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, DollarSign, BookmarkPlus } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({ job, featured = false }) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden 
        transition-all duration-300 hover:shadow-lg border-l-4
        ${featured ? 'border-purple-500' : 'border-transparent'}
      `}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <img
              src={job.company.logo}
              alt={`${job.company.name} logo`}
              className="w-12 h-12 object-contain rounded-md mr-4 bg-gray-100 p-1"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors">
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <Link
                to={`/companies/${job.company.id}`}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {job.company.name}
              </Link>
            </div>
          </div>
          <button
            className="text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="Bookmark job"
          >
            <BookmarkPlus size={20} />
          </button>
        </div>

        <div className="mt-4">
          <p className="text-gray-600 line-clamp-2">{job.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap text-sm text-gray-500 gap-y-2">
          <div className="flex items-center mr-4">
            <MapPin size={16} className="mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center mr-4">
            <Briefcase size={16} className="mr-1" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center mr-4">
            <Clock size={16} className="mr-1" />
            <span>{job.postedAt}</span>
          </div>
          {job.salary && (
            <div className="flex items-center">
              <DollarSign size={16} className="mr-1" />
              <span>{job.salary}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div>
            {featured && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Featured
              </span>
            )}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;