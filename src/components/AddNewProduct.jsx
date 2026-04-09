import { Modal } from "antd";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Config/firebase";
import { Form, Input, Button } from "antd";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [discription, setDiscription] = useState("");
  const [discount, setDiscount] = useState("");

     const onFinish = (values) => {
      console.log("Form Data:", values);

    };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmitProduct = async (e) => {
    debugger;
    e.preventDefault();
    const newDocRef = doc(collection(db, "products"));
    const uniqueId = newDocRef.id;

    try {
      await setDoc(newDocRef, {
        name: "Example Data",
        id: uniqueId,
      });

      alert("Product Added");
      setName("");
      setPrice("");
      setImage("");
      setDiscription("");
      setDiscount("");
    } catch (error) {
      console.log(error);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full flex justify-end items-center p-4">
        <div className="w-32 text-right">
          <Button type="primary" onClick={showModal}>
            Add Products
          </Button>
          <Modal
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            footer={null}
          >
            <div class="h-full flex items-center justify-center bg-gray-100 p-4">
              <Form
                name="productForm"
                layout="vertical"
                className="bg-white w-full max-w-xl p-6 rounded-xl shadow-md"
                onFinish={handleSubmitProduct}
                onFinishFailed={onFinishFailed}
              >
                <h2 className="text-xl font-semibold text-center text-gray-700">
                  Add Product
                </h2>

                <Form.Item
                  label="Product Name"
                  name="name"
                  rules={[{ required: true, message: "Enter product name" }]}
                >
                  <Input placeholder="Product Name" />
                </Form.Item>

                <Form.Item
                  label="Description"
                  name="description"
                  rules={[{ required: true, message: "Enter description" }]}
                >
                  <Input.TextArea rows={3} placeholder="Product Description" />
                </Form.Item>

                <Form.Item
                  label="Price"
                  name="price"
                  rules={[{ required: true, message: "Enter price" }]}
                >
                  <Input type="number" placeholder="Price" />
                </Form.Item>

                <Form.Item label="Discount (%)" name="discount">
                  <Input type="number" placeholder="Discount" />
                </Form.Item>

                <Form.Item
                  label="Image URL"
                  name="image"
                  rules={[{ required: true, message: "Enter image URL" }]}
                >
                  <Input placeholder="Image URL" />
                </Form.Item>

                <Form.Item>
                  <Button onClick={handleSubmitProduct} type="primary" typeof="submit" className="w-full">
                    Add Product
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
