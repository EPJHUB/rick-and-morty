const paginationLogic = (currentPage, residents) => {
    const RESIDENTES_PER_PAGE = 20
  const totalPages = Math.ceil(residents.length / RESIDENTES_PER_PAGE);

  const sliceEnd = currentPage * RESIDENTES_PER_PAGE;
  const sliceStart = sliceEnd - RESIDENTES_PER_PAGE;
  const residentsInCurrentPage = residents.slice(sliceStart, sliceEnd);
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return {
    pages,
    residentsInCurrentPage
  }
};
export { paginationLogic };
