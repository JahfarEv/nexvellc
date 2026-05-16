const UpcomingCard = ({ project }) => {
  return (
    <div className="p-6 border rounded-xl shadow">
      <h3 className="font-bold text-lg">{project.name}</h3>
      <p className="text-sm text-gray-500">{project.tagline}</p>
      <p className="mt-2 text-gray-600">{project.description}</p>
    </div>
  );
};

export default UpcomingCard;