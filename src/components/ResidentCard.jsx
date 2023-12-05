import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

    const bgByStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <article className="border-2 border-green-radioactive rounded-md">
      <header className="relative">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-8 border-2 border-green-radioactive">
          <div className={`h-3 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </header>
      <section className="border-t-2 border-t-green-radioactive p-4">
        <h2 className="text-white text-2xl">{residentInfo?.name}</h2>
        <ul className="text-white">
        <li className="flex justify-start">
            <span className="inline-block w-[120px] text-dark-gray">Species</span>
            <span className="inline-block max-w-[140px]">{residentInfo?.species}</span>
          </li>
          <li className="flex justify-start">
            <span className="inline-block w-[120px] text-dark-gray">Origin</span>
            <span className="inline-block max-w-[140px]">{residentInfo?.origin.name}</span>
          </li>
          <li className="flex justify-start">
            <span className="inline-block w-[120px] text-dark-gray">Times appear</span>
            <span className="inline-block max-w-[140px]">{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
