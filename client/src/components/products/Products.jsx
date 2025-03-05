import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";

const Products = ({ categories, filtered, products, setProducts, search }) => {
const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const navigate = useNavigate();



  return (
    <div className="products-wrapper flex flex-wrap gap-4">
 {filtered
        .filter((product) => product.title.toLowerCase().includes(search))
        .map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}

      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-w-[120px] min-h-[120px] max-w-[180px] max-h-[180px]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-w-[120px] min-h-[120px] max-w-[180px] max-h-[180px]"
        onClick={() => navigate("/products")}
      >
        <EditOutlined className="text-white md:text-2xl" />
      </div>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Products;
