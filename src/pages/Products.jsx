"use client";
import { Button, Card } from "keep-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import { add } from "../features/cartSlice";
import { fetchProducts } from "../features/dataSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);
  const currentProductCount = `${indexOfFirstProduct + 1}-${
    indexOfLastProduct > items.length ? items.length : indexOfLastProduct
  }`;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading")
    return (
      <>
        <Spinner />
      </>
    );
  if (error) return <p>Error: {error}</p>;

  const addToCart = (item) => {
    dispatch(add(item));
    toast.success("Added To cart");
  };

  return (
    <>
      <h2 className="text-center !py-16 text-gray-700 font-pop font-medium">
        Products
      </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 place-items-center ">
        {currentProducts.map((data) => (
          <Card key={data.id}>
            <Card.Header className="card">
              <img src={data.thumbnail} alt="image" className="h-[200px]!" />
            </Card.Header>
            <Card.Content className="space-y-3">
              <Card.Title>{data.title}</Card.Title>
              <Card.Description>{data.description}</Card.Description>
              <Button
                size="sm"
                color="primary"
                className="ml-auto"
                onClick={() => addToCart(data)}
              >
                Add to Cart
              </Button>
            </Card.Content>
          </Card>
        ))}
      </div>
      <div>
        <Pagination
          currentProductCount={currentProductCount}
          productsPerPage={productsPerPage}
          totalProducts={items.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Products;
