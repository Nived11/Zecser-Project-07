const ActivitiesSection = () => {

return(
  <div className="bg-blue-900 text-white py-10 px-6">
    <h2 className="text-center font-bold text-xl mb-6">Ideal Academic Activities</h2>
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img src="/classroom.jpg" alt="Classroom" className="w-lg md-sm rounded shadow" />
      <div className="text-sm text-justify space-y-4">
        <p>Classes are conducted by highly qualified teachers with great dedication and passion for nurturing student growth.</p>
        <p>Extra and co-curricular activities are embedded into the school experience, promoting all-around development.</p>
        <p>Students are always engaged in skill-building sessions with a deepened understanding of values.</p>
      </div>
    </div>
  </div>
    )
};

export default ActivitiesSection;
