const facilities = [
  { image: "/bus.png", label: "Vehicle Facility" },
  { image: "/hostel.png", label: "Hostel Facility" },
  { image: "/ground.png", label: "Play Ground" }
];

const FacilitiesSection = () => {
    return(
    <div className="bg-blue-800 text-white py-10 px-6 text-center">
    <h2 className="text-lg font-bold mb-6">Our Facilities</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {facilities.map((facility, idx) => (
        <div key={idx} className="bg-white p-4 text-blue-900 rounded shadow">
          <img src={facility.image} alt={facility.label} className="w-full h-32 object-contain mb-2" />
          <p className="font-semibold">{facility.label}</p>
        </div>
      ))}
    </div>
  </div>
    )
};

export default FacilitiesSection;
