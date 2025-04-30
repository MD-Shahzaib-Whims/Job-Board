import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Globe, Briefcase, Users, Mail, Phone, 
  Facebook, Twitter, Linkedin, Instagram, Building
} from 'lucide-react';
import { useJobContext } from '../context/JobContext';
import JobCard from '../components/JobCard';

const CompanyProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { companies, jobs } = useJobContext();
  const [company, setCompany] = useState<any>(null);
  const [companyJobs, setCompanyJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      const foundCompany = companies.find(c => c.id === id);
      
      if (foundCompany) {
        setCompany(foundCompany);
        
        // Find jobs from this company
        const companyJobList = jobs.filter(job => job.company.id === foundCompany.id);
        setCompanyJobs(companyJobList);
      }
      
      setIsLoading(false);
    }, 500);
  }, [id, companies, jobs]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse space-y-4 w-full max-w-4xl">
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded w-1/2"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company Not Found</h2>
        <p className="text-gray-600 mb-6">The company profile you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Browse Companies
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Company Header Banner */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 sm:left-8 sm:translate-x-0 bg-white rounded-lg shadow-md w-32 h-32 flex items-center justify-center p-3">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{company.name}</h1>
                <p className="text-gray-600">{company.industry}</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                {company.social?.website && (
                  <a 
                    href={company.social.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    <Globe size={18} />
                  </a>
                )}
                {company.social?.linkedin && (
                  <a 
                    href={company.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {company.social?.twitter && (
                  <a 
                    href={company.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {company.social?.facebook && (
                  <a 
                    href={company.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{company.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{company.employees}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700">{company.founded || 'Established company'}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-blue-600 font-medium">{companyJobs.length} open positions</span>
              </div>
            </div>

            <div className="prose max-w-none text-gray-600">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About {company.name}</h2>
              <p className="mb-4">{company.description}</p>
              <p className="mb-4">{company.longDescription}</p>
            </div>
          </div>

          {/* Company Contact & Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Mission</h3>
                  <p className="text-gray-600">{company.mission || 'Our mission is to innovate and deliver exceptional value to our customers.'}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Vision</h3>
                  <p className="text-gray-600">{company.vision || 'We envision a world where technology enhances every aspect of life.'}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    {company.benefits?.map((benefit: string, index: number) => (
                      <li key={index}>{benefit}</li>
                    )) || (
                      <>
                        <li>Competitive salary & equity packages</li>
                        <li>Health, dental, and vision insurance</li>
                        <li>Flexible work arrangements</li>
                        <li>Professional development opportunities</li>
                        <li>Generous paid time off policy</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a href={`mailto:${company.email || 'careers@' + company.name.toLowerCase().replace(/\s/g, '') + '.com'}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {company.email || 'careers@' + company.name.toLowerCase().replace(/\s/g, '') + '.com'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="text-sm text-gray-900">{company.phone || '+1 (555) 123-4567'}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                    <p className="text-sm text-gray-900">
                      {company.address || `${company.name} Headquarters,\n${company.location}`}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Website</h3>
                    <a 
                      href={company.website || `https://www.${company.name.toLowerCase().replace(/\s/g, '')}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {company.website || `www.${company.name.toLowerCase().replace(/\s/g, '')}.com`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Jobs */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Open Positions at {company.name}
            </h2>
            
            {companyJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {companyJobs.map(job => (
                  <JobCard key={job.id} job={job} featured={job.featured} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-600">No open positions available at the moment.</p>
                <p className="text-gray-600 mt-2">
                  Check back later or <a href="#" className="text-blue-600 hover:text-blue-800">
                    set up job alerts
                  </a> to be notified when new positions become available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfilePage;