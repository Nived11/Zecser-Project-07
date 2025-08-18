import { useNavigate } from "react-router-dom";

const features = [
  {title:"UGC-based syllabus",image:"/gradhat.png"},
  {title:"Sports Club",image:"/football.png"},
  {title:"Junior Red Cross Society",image:"/redcross.png"},
];



const FeaturesSection = () => {

    const goTo = useNavigate();

    return(
    <div className="bg-white py-10 px-6 text-center">
    <h2 className="text-lg font-bold mb-6">We Provide</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      {features.map((f, i) => (
        <div key={i} className="bg-blue-50 border border-blue-200 p-4 rounded shadow text-blue-900">
          <h3>{f.title}</h3>
          <img src={f.image} alt="Image" className="w-full h-20 object-contain mx-auto" />
        </div>
      ))}
    </div>
    <button onClick={()=>goTo("/we-provide")} className="mt-6 px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">Know More</button>
  </div>
    )
};

export default FeaturesSection;
