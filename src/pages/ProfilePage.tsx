import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  User, Mail, Briefcase, MapPin, Calendar, 
  Building, Phone, Globe, FileText, BookmarkPlus 
} from 'lucide-react';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'applications' | 'saved' | 'settings'>('overview');

  if (!user) {
    return null;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'applications', label: 'Applications' },
    { id: 'saved', label: 'Saved Jobs' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="px-4 sm:px-6 lg:px-8 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:-mt-16">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-24 w-24 rounded-full border-4 border-white bg-white object-cover"
                />
                <div className="ml-4 mt-16 sm:mt-0">
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-auto flex space-x-3">
                <button
                  onClick={() => {/* Edit profile logic */}}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Edit Profile
                </button>
                <button
                  onClick={logout}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <nav className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex-1 text-center py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-lg shadow-md">
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">{user.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">San Francisco, CA</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Professional Summary</h3>
                  <p className="text-gray-600">
                    Experienced software developer with a passion for creating elegant solutions to complex problems.
                    Specialized in full-stack development with expertise in modern web technologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Work Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <h4 className="text-gray-900 font-medium">Senior Developer</h4>
                          <p className="text-gray-600">TechCorp Inc. • 2020 - Present</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <h4 className="text-gray-900 font-medium">Full Stack Developer</h4>
                          <p className="text-gray-600">WebSolutions • 2018 - 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="flex items-start border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">Senior Frontend Developer</h4>
                      <p className="text-gray-600">TechNova • San Francisco, CA</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        Applied on March 15, 2024
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      In Review
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'saved' && (
            <div className="p-6">
              <div className="space-y-6">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="flex items-start border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">Full Stack Developer</h4>
                      <p className="text-gray-600">DataSphere • Seattle, WA</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <BookmarkPlus className="h-4 w-4 mr-1" />
                        Saved on March 10, 2024
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            defaultChecked
                          />
                          <span className="ml-2 text-gray-600">Job recommendations</span>
                        </label>
                      </div>
                      <div className="mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                            defaultChecked
                          />
                          <span className="ml-2 text-gray-600">Application updates</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Profile Visibility</label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                        <option>Public</option>
                        <option>Private</option>
                        <option>Recruiters Only</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Password</h3>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Change Password
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h3>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;