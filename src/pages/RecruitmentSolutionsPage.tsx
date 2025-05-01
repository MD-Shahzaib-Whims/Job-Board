import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Search, Briefcase, Award, Target, BarChart as ChartBar, MessageSquare, Shield, Clock, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const RecruitmentSolutionsPage = () => {
  const solutions = [
    {
      title: 'Talent Search',
      description: 'Access our database of qualified candidates using advanced search filters',
      icon: Search,
      features: [
        'Advanced candidate filtering',
        'Skills-based matching',
        'Location-based search',
        'Experience level filtering'
      ]
    },
    {
      title: 'Job Posting',
      description: 'Post and manage job listings with maximum visibility',
      icon: Briefcase,
      features: [
        'Featured job listings',
        'Custom application forms',
        'Automated job alerts',
        'Social media promotion'
      ]
    },
    {
      title: 'Employer Branding',
      description: 'Build your employer brand and attract top talent',
      icon: Award,
      features: [
        'Company profile customization',
        'Employee testimonials',
        'Culture showcase',
        'Brand analytics'
      ]
    },
    {
      title: 'Recruitment Analytics',
      description: 'Track and optimize your recruitment process with data-driven insights',
      icon: ChartBar,
      features: [
        'Application tracking',
        'Source analytics',
        'Hiring funnel metrics',
        'ROI reporting'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Access talent from around the world',
      icon: Globe
    },
    {
      title: 'Time Saving',
      description: 'Streamline your recruitment process',
      icon: Clock
    },
    {
      title: 'Quality Candidates',
      description: 'Pre-screened and verified profiles',
      icon: Shield
    },
    {
      title: 'Communication Tools',
      description: 'Integrated messaging and scheduling',
      icon: MessageSquare
    }
  ];

  const testimonials = [
    {
      quote: "The recruitment solutions provided have transformed our hiring process. We've reduced time-to-hire by 40% and improved quality of hires significantly.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "TechCorp Inc."
    },
    {
      quote: "The platform's analytics and reporting features give us valuable insights into our recruitment efforts and help us make data-driven decisions.",
      author: "Michael Chen",
      position: "Talent Acquisition Manager",
      company: "Innovation Labs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Recruitment Solutions for Modern Businesses
            </h1>
            <p className="mt-6 text-xl leading-8">
              Transform your hiring process with our comprehensive recruitment solutions.
              Find, attract, and hire the best talent efficiently and effectively.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                to="/pricing"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Pricing
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Recruitment Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to streamline your recruitment process and find the best talent.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the advantages of our comprehensive recruitment platform
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 relative"
              >
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">"</span>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Recruitment Process?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Get started with our recruitment solutions today
            </p>
            <div className="mt-8 flex justify-center gap-x-4">
              <Link
                to="/pricing"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
              >
                View Pricing
              </Link>
              <Link
                to="/contact"
                className="rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 border border-white"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentSolutionsPage;