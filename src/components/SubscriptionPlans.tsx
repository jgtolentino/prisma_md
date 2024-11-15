import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  color: string;
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '₱0',
    features: [
      'Basic Topic Refinement',
      'Limited Database Access',
      'Community Support',
    ],
    color: 'gray',
  },
  {
    name: 'Basic',
    price: '₱5,000',
    features: [
      'Topic Refinement',
      'Limited Review Access',
      'Email Support',
      'Basic Analysis Tools',
    ],
    color: 'blue',
  },
  {
    name: 'Advanced',
    price: '₱10,000',
    features: [
      'Comprehensive Support',
      'Multiple Database Access',
      'Priority Support',
      'Advanced Analytics',
      'Citation Management',
    ],
    recommended: true,
    color: 'green',
  },
  {
    name: 'Premium',
    price: '₱15,000',
    features: [
      'Full End-to-End Support',
      'Unlimited Database Access',
      'Submission Tracking',
      '24/7 Priority Support',
      'Custom Templates',
      'Team Collaboration',
    ],
    color: 'purple',
  },
];

interface SubscriptionPlansProps {
  onSubscribe: (plan: string) => void;
  recommendedPlan?: string;
}

export const SubscriptionPlans = ({ onSubscribe, recommendedPlan }: SubscriptionPlansProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Choose Your Plan</h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect plan for your research journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                recommendedPlan === plan.name || plan.recommended
                  ? `ring-2 ring-${plan.color}-500 ring-opacity-50`
                  : ''
              }`}
            >
              {(recommendedPlan === plan.name || plan.recommended) && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-${plan.color}-500 text-white text-sm rounded-full`}>
                  Recommended
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold text-${plan.color}-600`}>{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <Check className={`w-5 h-5 text-${plan.color}-500 mr-2 flex-shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onSubscribe(plan.name)}
                className={`w-full py-6 ${
                  plan.name === 'Free'
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    : `bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white`
                }`}
              >
                {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};