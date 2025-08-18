import type { LearingParam } from "./Heading";
import image1 from "../../../assets/images/learning1.png";
import { useNavigate } from "react-router-dom";

const ClassSections = ({ type }: LearingParam) => {
  const images = [image1, image1, image1, image1, image1, image1];

  const length = type === "1-4" ? 4 : 6;

  const navigate = useNavigate();

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px] p-[20px] sm:p-[30px] max-w-6xl mx-auto `}
    >
      {Array.from({ length }).map((_, idx) => (
        <div
          onClick={() =>
            navigate(`/learning?class=${length === 4 ? idx + 1 : idx + 5}`)
          }
          key={idx}
          className="shadow-md shadow-black/40 hover:shadow-lg relative cursor-pointer overflow-hidden aspect-square flex justify-center items-center rounded-br-[20%] rounded-tl-[20%] group active:translate-y-1 ease-in-out duration-200"
        >
          <img
            src={images[idx]}
            alt={`Class ${length === 4 ? idx + 1 : idx + 5}`}
            className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-120 group-hover:rotate-3"
          />

          <div className="absolute inset-0 bg-black/40 z-10" />

          <p className="font-bold text-white text-2xl md:text-3xl z-20">
            Class {length === 4 ? idx + 1 : idx + 5}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ClassSections;
