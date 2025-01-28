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

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">
            Over 25+ Years Experience in Plumbing Service
          </h2>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour or randomized words.
          </p>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
          <h3 className="text-lg font-semibold mt-6">Muhammad Sirf</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
