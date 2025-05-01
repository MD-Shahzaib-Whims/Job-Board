import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingPlansPage = () => {
  const plans = [
    {
      name: 'Basic',
      price: 0,
      features: [
        'Post 1 job listing',
        'Basic candidate search',
        'Standard support',
        '30-day listing duration'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 199,
      features: [
        'Post 5 job listings',
        'Advanced candidate search',
        'Priority support',
        '60-day listing duration',
        'Featured job listings',
        'Company profile customization'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 499,
      features: [
        'Unlimited job listings',
        'Advanced candidate search & filters',
        'Dedicated account manager',
        '90-day listing duration',
        'Featured job listings',
        'Custom company branding',
        'API access',
        'Recruitment analytics'
      ],
      recommended: false
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose the Right Plan for Your Business
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select a pricing plan that fits your recruitment needs, from small businesses to large enterprises
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 shadow-sm flex flex-col ${
              plan.recommended
                ? 'border-blue-500 ring-2 ring-blue-500'
                : 'border-gray-200'
            }`}
          >
            {plan.recommended && (
              <span className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recommended
              </span>
            )}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-base font-medium text-gray-500">/month</span>
              </p>
            </div>

            <ul className="space-y-4 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full rounded-md px-4 py-2 text-base font-semibold shadow-sm ${
                plan.recommended
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-50'
              }`}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlansPage;