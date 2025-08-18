const stats = [
  { image: "/gradhat.png", title: "1000+ Students", description: "Educated with care" },
  { image: "/star.jpg", title: "20+ Teachers", description: "Passionate educators" },
  { image: "/trophy.jpg", title: "8+ Years", description: "Of trusted experience" }
];

const StatsSection = () => {
    return(
  <div className="bg-gray-100 py-10 px-4 text-center">
    <h2 className="text-lg font-bold mb-4">8 Years of Unbroken Success – And Counting!</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow text-blue-900">
          <img className="w-12 h-12 object-contain mx-auto" src={item.image} alt="Image" />
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="text-sm mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
)
}

export default StatsSection;
