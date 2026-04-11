import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Config/firebase";
import { Table, Image } from "antd";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        key: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => <Image src={img} width={80} />,
    },
    {
      title: "Product Name",  
      dataIndex: "name",
    },
    {
      title: "Description",  
      dataIndex: "description",
    },
    {
      title: "Discount",  
      dataIndex: "discount",
      render: (discount) => `${discount}%`,
    },
    {
      title: "Price (₹)",
      dataIndex: "price",
      render: (price) => `₹ ${price}`,
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        pagination={false}
      />
    </div>
  );
};

export default ProductList;