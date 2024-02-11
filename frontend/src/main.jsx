import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import EditProduct from "./components/EditProduct.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ProductList />,
	},
	{
		path: "/add",
		element: <AddProduct />,
	},
	{
		path: "/edit/:id",
		element: <EditProduct />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
