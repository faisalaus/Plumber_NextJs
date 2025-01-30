import Image from "next/image";

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[350px] bg-gray-200">
      <Image
        src="/images/about-banner.webp" // Replace with actual image
        alt="About Us Banner"
        fill
        priority={true}
        style={{ objectFit: "cover" }}
        className="absolute inset-0"
      />
      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-700 bg-opacity-70"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg">Home / Contact </p>
      </div>
    </section>
  );
};

export default ContactBanner;
