import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
  console.log(locationInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newLocation.value;
    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((error) => console.log(error));
  };
  return (
    <section className="bg-[url(/background-header.svg)] bg-cover text-white text-center">
      <div className="relative h-[300px] m-[0_auto]">
        <img className="w-4/5 max-w-[350px] aspect-square absolute -top-1/4 left-1/2 -translate-x-1/2" src="/portal.png" alt="" />
        <img className="w-4/5 max-w-[380px] absolute top-[10%] left-1/2 -translate-x-1/2" src="/rick-and-morty.svg" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between  border-2 border-green-radioactive w-11/12 m-[0_auto] max-w-[500px]">
          <input
          className="bg-transparent border-green-radioactive py-4 pl-6 focus-visible:outline-none overflow-y-hidden"
            type="number"
            name="newLocation"
            placeholder="Type a location ID..."
            required
          />
          <button className="px-6 align-middle border-l-2 border-green-radioactive bg-green-radioactive/50" type="submit"><IconSearch size={20}/></button>
        </div>
      </form>
      <article className="border-2 border-green-radioactive text-center w-11/12 m-[0_auto] hidden sm:block mt-14 max-w-[1000px]">
        <h2 className="text-green-radioactive">
          Welcome to {locationInfo?.name}
        </h2>
        <ul className="flex flex-row justify-center gap-8 text-sm text-dark-gray">
          <li>Type: {locationInfo?.type}</li>
          <li>Dimension: {locationInfo?.dimension}</li>
          <li>Popoulation: {locationInfo?.residents.length}</li>
        </ul>
      </article>
      <h2 className="text-green-radioactive text-center py-16 sm:hidden">
        Welcom to the crazy universe!
      </h2>
      <div className="h-14 hidden sm:block"></div>
    </section>
  );
};
export default Location;
