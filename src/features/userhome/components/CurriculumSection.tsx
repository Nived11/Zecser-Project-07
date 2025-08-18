import { useNavigate } from "react-router-dom";



const CurriculumSection = () => {
    const goTo = useNavigate();
return(
  <div className="bg-gray-100 py-8 text-center">
    <h2 className="font-bold text-lg mb-4">School Curriculum Overview</h2>
    <div className="space-x-4">
      <button onClick={()=>goTo("/learning?class=1-4")} className="px-6 py-2 bg-blue-800 text-white rounded">LP School (Class 1-4)</button>
      <button onClick={()=>goTo("/learning?class=5-6")} className="px-6 py-2 bg-blue-800 text-white rounded">High School (Class 5-10)</button>
    </div>
  </div>
    )
};

export default CurriculumSection;
