import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

const LatestProjects: FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Our Latest Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore some of our recent plumbing projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative group"
            >
              <CardHeader className="p-0 relative">
                {/* Image Handling */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Full Dark Overlay */}
                <div className="absolute inset-0 bg-teal-700 opacity-0 group-hover:opacity-90 transition-all duration-300 group-hover:scale-110 pointer-events-none"></div>

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="text-lg font-semibold">{project.title}</p>
                  <p className="text-sm mt-2">Plumbing</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 relative z-10">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </CardDescription>
                <Link
                  href={project.link}
                  className="text-teal-600 dark:text-teal-400 hover:underline mt-4 inline-block"
                >
                  View Project
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LatestProjects;
