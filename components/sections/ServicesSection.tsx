"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Rough-In Plumbing",
    description:
      "We provide expert rough-in plumbing for new constructions, ensuring proper installation before walls and floors are finished.",
    image: "/images/gas-line-services.webp",
  },
  {
    title: "Gas Line Services",
    description:
      "Safe and reliable gas line installations by our experienced team. Contact us for your gas line needs.",
    image: "/images/gas-line-services.webp",
  },
  {
    title: "Drain & Sewer Services",
    description:
      "Expert solutions for efficient and effective drain and sewer management to prevent clogs and backups.",
    image: "/images/gas-line-services.webp",
  },
  {
    title: "Roof Plumbing",
    description:
      "Professional roof plumbing services for repairs and installations. We ensure effective water drainage and protection.",
    image: "/images/gas-line-services.webp",
  },
  {
    title: "Home Renovations",
    description:
      "Upgrade your kitchen, bathroom, or entire home with our expert renovation plumbing services.",
    image: "/images/gas-line-services.webp",
  },
  {
    title: "Fit Offs",
    description:
      "Quality fit-off plumbing services tailored to your needs, from fixture installations to final finishes.",
    image: "/images/gas-line-services.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Best Services We Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Looking for reliable plumbing services in Melbourne? We offer a
            range of professional solutions for your home or business.
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
