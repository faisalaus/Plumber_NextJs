import Image from "next/image";

const AboutContent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about-image.jpg" // Replace with actual image
            alt="About Us"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Over 25+ Years Experience in Plumbing Service
          </h2>
          <p className="text-gray-600 mt-4">
            Northern Home Plumbing Services is a reliable and experienced
            plumbing company providing top-notch services in the Northern
            Melbourne area. We specialize in plumbing services for new houses,
            multi-unit developments, and gas water installations, offering
            comprehensive solutions for both builders and homeowners.
          </p>
          <p className="text-gray-600 mt-4">
            With a focus on underground plumbing, our team is equipped with the
            expertise and experience to handle any plumbing project, from small
            repairs to large-scale installations. We take pride in being a
            one-stop-shop for new house builders and homeowners, offering
            complete project management from start to finish.
          </p>
          <p className="text-gray-600 mt-4">
            Our services range from initial planning and design to final
            installation and testing. We are committed to delivering
            high-quality workmanship and exceptional customer service. With our
            expertise and dedication to quality, Northern Home Plumbing Services
            is a top choice for plumbing services in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
