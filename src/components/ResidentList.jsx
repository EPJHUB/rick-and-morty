import { useEffect, useState } from "react";
import { paginationLogic } from "../assets/utils/pagination";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsInCurrentPage } = paginationLogic(
    currentPage,
    residents
  );
  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  // console.log(currentPage);
  console.log(residents.length);
  return (
    <div className="bg-[url(/background-main.svg)] bg-repeat-y bg-cover min-h-screen">
      <section className="h-full max-w-[1000px] mx-auto">
        <section
          className={`grid gap-8 grid-cols-[repeat(auto-fill,_300px)] justify-center mx-w-[1000px] mx-auto`}
        >
          {residentsInCurrentPage.map((resident) => (
            <ResidentCard key={resident} residentUrl={resident} />
          ))}
        </section>
        {/* Pagination */}
        <ul className="justify-center p-4 flex-wrap flex">
          {pages.map((page) => (
            <li className="aspect-square" key={page}>
              <button
                className={`h-14 text-white rounded-sm aspect-square ${
                  page === currentPage ? "bg-dark-blue" : "bg-transparent"
                }`}
                onClick={() => handleNewPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default ResidentList;
