import React from "react";
import Banner from "../features/career/components/Banner";

import JobListings from "../features/career/components/JobListings";
import Testimonials from "../features/career/components/Testimonials";

const CareerPage: React.FC = () => (
  <main className="career-main bg-[#f5f5f5] p-6 min-h-screen">
    <section className="text-center mb-6">
      <h1 className="text-3xl font-semibold text-black">Career</h1>
      <h2 className="text-xl font-medium mt-2">
        <span className="text-[#1e2a78] font-bold">
          Your next big opportunity
        </span>{" "}
        is{" "}
        <span className="text-[#e3a300] font-bold">
          just one click away. Apply now!
        </span>
      </h2>
    </section>

    <Banner />
    <JobListings />
    <Testimonials />
  </main>
);

export default CareerPage;
