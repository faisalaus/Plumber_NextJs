'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';

const services = [
  {
    title: 'Kitchen Plumbing',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/kitchen-plumbing.webp',
  },
  {
    title: 'Gas Line Services',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/gas-line-services.webp',
  },
  {
    title: 'Water Line Repair',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/water-line-repair.webp',
  },
  {
    title: 'Bathroom Plumbing',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/bathroom.jpg',
  },
  {
    title: 'Basement Plumbing',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/basement-plumbing.jpg',
  },
  {
    title: 'Remodeling Service',
    description: 'Electronic typesetting remains unchanged.',
    image: '/images/remodeling-service.jpg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Best Service We Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn about our plumbing services that help your home or business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:scale-105 transition-transform bg-white dark:bg-gray-800 shadow-lg"
            >
              <CardHeader>
                {/* Service Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
