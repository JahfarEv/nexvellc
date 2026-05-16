import { upcomingProjects } from "../../data/upcoming";
import UpcomingCard from "../common/UpcomingCard";

const Upcoming = () => {
  return (
    <section id="upcoming" className="py-12 px-6">
      <h2 className="text-3xl text-center font-bold mb-8">
        Upcoming Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {upcomingProjects.map((item, i) => (
          <UpcomingCard key={i} project={item} />
        ))}
      </div>
    </section>
  );
};

export default Upcoming;