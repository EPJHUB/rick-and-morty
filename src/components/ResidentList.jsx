import { paginationLogic } from "../assets/pagination";

const ResidentList = ({residents}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const {pages, residentsInCurrentPage} = paginationLogic(
        currentPage,
        residents
    )
    const handleNewPage = () =>{
        setCurrentPage(newPage)
    }
  console.log(pages);

  return (
    <section className="max-w-[1000px] mx-auto">
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)]">
        {ResidentList.map((resident) => (
          <ResidentCard key={resident} residentURL={resident} />
        ))}
      </section>
      {/* Pagination */}
      <ul className="flex justify-center p-4 gap-6 flex-wrap">
        {pages.map((page) => (
            <li key={page}>
                <button onClick={() => handleNewPage(page)}>{pages}</button>
            </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;
