import { team } from "../../data/team";

const Team = () => {
  return (
    <section id="team" className="py-12 px-6">
      <h2 className="text-3xl text-center font-bold mb-8">
        Our Team
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <div key={i} className="p-5 border rounded-xl text-center">
            <div className="text-4xl">{m.icon}</div>
            <h3 className="font-bold mt-2">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;