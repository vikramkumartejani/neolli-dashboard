"use client";
import React, { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";
import Modal from "./components/Modal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [modalHeading, setModalHeading] = useState("");

  const products = [
    {
      id: 1,
      productName: "Product 1",
      category: "Category 1",
      review: "4.5 (10)",
      stock: "In-Stock",
      price: "₹430",
    },
    {
      id: 2,
      productName: "Product 2",
      category: "Category 2",
      review: "4.0 (8)",
      stock: "Out of Stock",
      price: "₹550",
    },
    {
      id: 3,
      productName: "Product 3",
      category: "Category 3",
      review: "4.8 (12)",
      stock: "In-Stock",
      price: "₹350",
    },
  ];

  const handleOpenModal = (product = null) => {
    if (product) {
      setCurrentProduct(product);
      setIsEditing(true);
      setModalHeading("Edit Product");
    } else {
      setCurrentProduct(null);
      setIsEditing(false);
      setModalHeading("Create Product");
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
    setIsEditing(false);
    setModalHeading("");
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 w-full">
        <div className="bg-purple-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">ORDER PENDING</h3>
          <p className="text-2xl mt-2">2</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">ORDER CANCEL</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">TOTAL PRODUCTS</h3>
          <p className="text-2xl mt-2">5</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow-md">
          <h3 className="text-lg font-medium">TODAY INCOME</h3>
          <p className="text-2xl mt-2">$9568.00</p>
        </div>
      </div>

      <div className="bg-white p-4 shadow-md rounded w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Products</h3>
          <div className="flex gap-[6px]">
            <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
              View All
            </button>
            <button
              onClick={() => handleOpenModal()}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Create
            </button>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="xl:min-w-full text-left min-w-[1000px]">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Title</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">Review</th>
                <th className="pb-2">Stock</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr className="border-b" key={product.id}>
                  <td className="py-2">{product.productName}</td>
                  <td className="py-2">{product.category}</td>
                  <td className="py-2">{product.review}</td>
                  <td
                    className={`py-2 ${
                      product.stock === "In-Stock"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.stock}
                  </td>
                  <td className="py-2">{product.price}</td>
                  <td className="py-2 flex gap-[6px]">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition"
                      onClick={() => handleOpenModal(product)}
                    >
                      Edit
                    </button>
                    /
                    <button className="text-red-500 hover:text-red-700 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        heading={modalHeading}
      >
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              placeholder="Product Name"
              defaultValue={currentProduct?.productName || ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Category"
              defaultValue={currentProduct?.category || ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Price"
              defaultValue={currentProduct?.price || ""}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="stock"
            >
              Stock
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="stock"
              type="text"
              placeholder="Stock"
              defaultValue={currentProduct?.stock || ""}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {isEditing ? "Save Changes" : "Create Product"}
            </button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
