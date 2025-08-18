import React from "react";
import type { Testimonial } from "../../../types/career";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jincy",
    role: "Primary Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user1.png",
  },
  {
    id: 2,
    name: "Karmal",
    role: "High School Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user2.png",
  },
  {
    id: 3,
    name: "Susan",
    role: "Primary Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user3.png",
  },
  {
    id: 4,
    name: "Vinitha",
    role: "Upper Primary Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user4.png",
  },
  {
    id: 5,
    name: "Elina",
    role: "High School Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user5.png",
  },
  {
    id: 6,
    name: "Angel",
    role: "Primary Teacher",
    message:
      "A good teacher possesses a combination of strong communication skills, subject matter expertise, and a passion for fostering student growth.",
    image: "/testimonials/user6.png",
  },
];

const Testimonials: React.FC = () => (
  <section className="bg-white py-10 px-4 md:px-10">
    <h2 className="text-2xl md:text-3xl font-bold text-left mb-6 text-gray-800">
      Testimonials
    </h2>

    <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide scroll-thin">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="min-w-[300px] max-w-sm flex-shrink-0 bg-gray-100 border border-gray-300 rounded-xl p-5 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-md font-semibold text-gray-800">{t.name}</h4>
              <span className="text-sm text-gray-600">{t.role}</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{t.message}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
