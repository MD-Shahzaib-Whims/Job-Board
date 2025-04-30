import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Clock, Briefcase, DollarSign, Building, Globe, 
  Share2, BookmarkPlus, Flag, Calendar, Users, CheckCircle, ChevronDown
} from 'lucide-react';
import { useJobContext } from '../context/JobContext';

const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { jobs } = useJobContext();
  const [job, setJob] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedJobs, setRelatedJobs] = useState<any[]>([]);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const foundJob = jobs.find(j => j.id === id);
      
      if (foundJob) {
        setJob(foundJob);
        
        // Find related jobs by category or company
        const related = jobs
          .filter(j => 
            (j.tags.some(tag => foundJob.tags.includes(tag)) || 
             j.company.id === foundJob.company.id) && 
            j.id !== foundJob.id
          )
          .slice(0, 3);
        
        setRelatedJobs(related);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id, jobs]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse space-y-4 w-full max-w-4xl">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-6">The job listing you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Browse Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-start">
              <img
                src={job.company.logo}
                alt={`${job.company.name} logo`}
                className="w-16 h-16 object-contain rounded-md mr-4 bg-gray-100 p-2"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <Link
                  to={`/companies/${job.company.id}`}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {job.company.name}
                </Link>
                <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500 gap-3">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>Posted {job.postedAt}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col space-y-2">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Apply Now
              </button>
              <div className="flex space-x-2">
                <button className="flex-1 inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <BookmarkPlus size={16} className="mr-1" />
                  Save
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <Share2 size={16} className="mr-1" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Job Description</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">{job.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Responsibilities:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {job.responsibilities && job.responsibilities.map((resp: string, index: number) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Requirements:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {job.requirements && job.requirements.map((req: string, index: number) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Benefits:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {job.benefits && job.benefits.map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Apply</h2>
              <p className="text-gray-700 mb-6">
                Submit your application by clicking on the button below. Make sure your resume is up to date before applying.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Apply Now
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Apply with LinkedIn
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 sticky top-20">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Job Overview</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Date Posted</h3>
                    <p className="text-sm text-gray-900">{job.postedDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                    <p className="text-sm text-gray-900">{job.type}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <p className="text-sm text-gray-900">{job.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Company</h3>
                    <p className="text-sm text-gray-900">{job.company.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Company Size</h3>
                    <p className="text-sm text-gray-900">{job.company.employees}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Website</h3>
                    <a 
                      href={job.company.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {job.company.website}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-6 pt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Job Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">Company Info</h2>
                  <Link
                    to={`/companies/${job.company.id}`}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    View Profile
                  </Link>
                </div>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">
                  {job.company.description}
                </p>
                <p className="text-sm text-blue-600">
                  {job.company.openPositions} open positions
                </p>
              </div>
              
              <div className="mt-6 flex justify-between">
                <button className="inline-flex items-center text-sm text-gray-600 hover:text-red-600">
                  <Flag size={16} className="mr-1" />
                  Report Job
                </button>
                <div className="text-sm text-gray-500">
                  Job ID: {job.id}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Jobs */}
        {relatedJobs.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Similar Jobs</h2>
            <div className="grid grid-cols-1 gap-6">
              {relatedJobs.map((relatedJob) => (
                <div 
                  key={relatedJob.id}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <img
                        src={relatedJob.company.logo}
                        alt={`${relatedJob.company.name} logo`}
                        className="w-10 h-10 object-contain rounded-md mr-3 bg-gray-100 p-1"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          <Link 
                            to={`/jobs/${relatedJob.id}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {relatedJob.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">{relatedJob.company.name} • {relatedJob.location}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {relatedJob.postedAt}
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedJob.description}
                    </p>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="flex items-center">
                        <Briefcase size={14} className="mr-1" />
                        {relatedJob.type}
                      </span>
                    </div>
                    <Link
                      to={`/jobs/${relatedJob.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Job <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailPage;