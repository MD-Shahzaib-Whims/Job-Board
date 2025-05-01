import React from 'react';

const CareerAdvicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Career Advice</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Career Resources Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Resume Writing Tips</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">• Tailor your resume to the job description</li>
            <li className="text-gray-600">• Highlight relevant achievements</li>
            <li className="text-gray-600">• Use action verbs and quantifiable results</li>
            <li className="text-gray-600">• Keep it concise and well-formatted</li>
          </ul>
        </div>

        {/* Interview Preparation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Interview Preparation</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">• Research the company thoroughly</li>
            <li className="text-gray-600">• Practice common interview questions</li>
            <li className="text-gray-600">• Prepare relevant examples</li>
            <li className="text-gray-600">• Follow up after the interview</li>
          </ul>
        </div>

        {/* Career Development */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Development</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">• Set clear career goals</li>
            <li className="text-gray-600">• Build your professional network</li>
            <li className="text-gray-600">• Pursue relevant certifications</li>
            <li className="text-gray-600">• Stay updated with industry trends</li>
          </ul>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Career Articles</h3>
              <ul className="space-y-2">
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">How to Navigate Career Changes</li>
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Building a Strong Personal Brand</li>
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Networking in the Digital Age</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Career Tools</h3>
              <ul className="space-y-2">
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Salary Calculator</li>
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Skills Assessment</li>
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">Resume Builder</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePage;