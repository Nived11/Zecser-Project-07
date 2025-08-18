import React from "react";

export interface FacultyCardProps {
  name: string;
  role: string;
  image: string;
  dob?: string;
  dod?: string;
  isInMemoriam?: boolean;
}

// Dummy Data (can be exported)
export const dummyFaculty = [
  {
    name: "Mary John",
    role: "Primary Teacher",
    image:
      "https://static.wixstatic.com/media/6cdc36_0c55b2aca8944835a58859d6965f3c5d~mv2.jpg/v1/crop/x_0,y_48,w_640,h_640/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/14517.jpg",
  },
  {
    name: "Sona Kurian",
    role: "Primary Teacher",
    image: "https://shchristianschool.com/wp-content/uploads/2024/08/1Q02011.jpg",
  },
  {
    name: "Melli George",
    role: "Primary Teacher",
    image: "https://static1.squarespace.com/static/5760eea3555986ada683b8fe/t/586d3cf3ff7c50a1b3e70b45/1483554040492/?format=1500w",
  },
  {
    name: "Nayan Wilson",
    role: "Primary Teacher",
    image: "https://res.amazingtalker.com/users/images/003/253/320/normal/vezxlv.png?1734074470",
  },
  

];

export const memoriamFaculty = [
  {
    name: "Susan",
    role: "Primary Teacher",
    image:
      "https://static.wixstatic.com/media/6cdc36_06ab4ea958614445ba660fd6dcfe4fb7~mv2.jpg/v1/crop/x_0,y_52,w_640,h_640/fill/w_268,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/14108.jpg",
    dob: "1950-04-10",
    dod: "2020-01-22",
  },
  {
    name: "Millie",
    role: "Primary Teacher",
    image: "https://c.superprof.com/i/m/15142531/500/20240614173716/15142531.jpg",
    dob: "1950-04-10",
    dod: "2020-01-22",
  },
  {
    name: "Gwen",
    role: "Primary Teacher",
    image: "https://c.superprof.com/i/m/32070474/600/20240721144523/32070474.webp",
    dob: "1950-04-10",
    dod: "2020-01-22",
  },
];

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  role,
  image,
  dob,
  dod,
  isInMemoriam,
}) => {
  return (
    <div className="w-[180px] h-[240px] rounded-xl overflow-hidden shadow bg-[#e6e6e6] cursor-pointer relative">
      <div className="relative w-full h-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Rose Icon for In Memoriam */}
        {isInMemoriam && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/6620/6620722.png"
            alt="Memoriam"
            className="absolute bottom-[74px] right-2 w-8 h-8 rounded-full bg-white p-1 z-10"
          />
        )}

        {/* Bottom Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-500/30 text-white text-center px-2 py-1 backdrop-blur-sm">
          <p className="text-[14px] font-semibold leading-tight">{name}</p>
          <p className="text-[12px] font-normal text-gray-200 leading-tight">{role}</p>

          {isInMemoriam && dob && dod && (
            <div className="text-[11px] font-medium pt-1 space-y-[2px] leading-tight">
              <p>DOB: {formatDate(dob)}</p>
              <p>DOD: {formatDate(dod)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Converts "YYYY-MM-DD" to "DD-MM-YYYY"
function formatDate(date?: string): string {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  return `${day}-${month}-${year}`;
}

export default FacultyCard;
