import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Config/firebase";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "products"), {
        name,
        price: Number(price),
        image,
        createdAt: serverTimestamp(),
      });

      alert("Product Added");
      setName("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmitProduct}>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <input
            type="text"
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
