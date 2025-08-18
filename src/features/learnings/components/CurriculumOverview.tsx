import { Link } from "react-router-dom";
import image1 from "../../../assets/images/learning1.png";
const CurriculumOverview = () => {

  const linkClasses =
    "relative overflow-hidden rounded-[5%] aspect-square shadow-md hover:scale-[1.02] transition-transform duration-300 flex justify-center flex-col ";

  const textClasses =
    "relative z-10 py-5 text-center text-white text-lg md:text-xl font-semibold bg-white/30";

  return (
    <section className="py-12 px-4 flex flex-col items-center gap-8">

      <h2 className="text-2xl md:text-3xl font-bold text-center">
        School Curriculum Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-4xl gap-[20px] sm:gap-[40px] lg:gap-[50px] mx-auto">
        <Link to="/learning?class=1-4" className={linkClasses}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className={textClasses}>LP School (Class 1–4)</div>
        </Link>

        <Link to="/learning?class=5-6" className={linkClasses}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className={textClasses}>High School (Class 5–10)</div>
        </Link>
      </div>
      
    </section>
  );
};

export default CurriculumOverview;
