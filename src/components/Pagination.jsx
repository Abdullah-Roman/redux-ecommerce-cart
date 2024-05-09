import ReactPaginate from "react-paginate";

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentProductCount,
}) => {
  return (
    <>
      <p className="text-center pt-5">
        Showing {currentProductCount} of {totalProducts} products
      </p>
      <ReactPaginate
        breakLabel="..."
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={Math.ceil(totalProducts / productsPerPage)}
        onPageChange={(data) => paginate(data.selected + 1)}
        containerClassName={"pagination"}
        previousLinkClassName={"previous-button"}
        nextLinkClassName={"next-button"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
      />
    </>
  );
};

export default Pagination;
