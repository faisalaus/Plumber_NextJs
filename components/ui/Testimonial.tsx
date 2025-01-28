"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import useAutoTabSwitch from "@/lib/hooks/useAutoTabSwitch";

const testimonials = [
  {
    id: "1",
    name: "Ken Williamson",
    title: "CEO & Founder",
    review:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    icon: "👨‍💼",
  },
  {
    id: "2",
    name: "David Miller",
    title: "Product Manager",
    review:
      "Injected humour and randomised words make Lorem Ipsum not only believable but also engaging.",
    icon: "🧑‍💻",
  },
  {
    id: "3",
    name: "Sara Parker",
    title: "UI Designer",
    review:
      "It is a long established fact that a reader will be distracted by readable content of a page.",
    icon: "🎨",
  },
  {
    id: "4",
    name: "Emma Stone",
    title: "Software Engineer",
    review:
      "Readable content makes focusing on layout and structure easier.",
    icon: "💻",
  },
  {
    id: "5",
    name: "Michael Scott",
    title: "Marketing Specialist",
    review:
      "Randomised words tend to make content engaging and relatable.",
    icon: "📈",
  },
  {
    id: "6",
    name: "Jessica Green",
    title: "HR Manager",
    review:
      "Readable text helps maintain focus and aids in effective communication.",
    icon: "🧑‍💼",
  },
];

const TestimonialSlider = () => {
  const { activeTab, setActiveTab } = useAutoTabSwitch(testimonials.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What People Say</h2>
        <p className="text-gray-600 mb-8">
          Hear from our clients about their experience working with us.
        </p>

        <Tabs.Root
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Tab List */}
          <Tabs.List
            className="flex justify-center space-x-4 mb-8"
            aria-label="Testimonials"
          >
            {testimonials.map((testimonial) => (
              <Tabs.Trigger
                key={testimonial.id}
                value={testimonial.id}
                className="w-3 h-3 rounded-full bg-gray-300 data-[state=active]:bg-blue-500"
              />
            ))}
          </Tabs.List>

          {/* Tab Content */}
          {testimonials.map((testimonial) => (
            <Tabs.Content
              key={testimonial.id}
              value={testimonial.id}
              className="transition-opacity duration-500"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700 mb-6">{testimonial.review}</p>
                <div className="flex items-center justify-center">
                  <div className="text-5xl">{testimonial.icon}</div>
                  <div className="ml-4 text-left">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
};

export default TestimonialSlider;
