import { GiStopwatch, GiGameConsole } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { RiSwap2Fill } from "react-icons/ri";

export default function Features() {
  return (
    <section>
      <h2 className="text-4xl font-poppins text-contrast font-bold text-center mb-8">
        Features
      </h2>
      <div className=" md:w-4/5 h-auto md:h-[45vh] md:rounded-r-full md:bg-blue md:my-20 flex-col md:flex-row flex items-center justify-center md:justify-end md:pr-8">
        <FeatureCard icon={<GiStopwatch />} title="Pomodoro Parties" />
        <FeatureCard icon={<MdWork />} title="Deep Work Dives" />
        <FeatureCard icon={<GiGameConsole />} title="Gamified Challenges" />
        <FeatureCard icon={<LuBrain />} title="Live Brainstorm Battles" />
        <FeatureCard
          icon={<RiSwap2Fill />}
          title="Breakout Rooms & Study Swap"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  icon,
  description,
}: {
  title?: string;
  icon?: React.ReactElement;
  description?: string;
}) {
  return (
    <div className="bg-white h-auto md:h-[100px] lg:h-[180px] w-full py-10 md:py-0 md-w-[100%] lg:w-[180px] md:rounded-full flex flex-col items-center justify-center m-3 cursor-default text-poppins font-bold text-secondary md:hover:rotate-12 text-sm  transition-all duration-300 ease-in-out text-center">
      <p className="md:text-4xl text-7xl text-highlight">{icon}</p>
      {title}
    </div>
  );
}
