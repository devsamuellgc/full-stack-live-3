import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GenerateMessage from "./pages/GenerateMessage";
import PresentMessage from "./pages/PresentMessage";
import { MessageProvider } from "./contexts/message";
import { ProductDetails } from "./pages/ProductDetails";
import { ProductsList } from "./pages/ProductsList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/produto/:id",
    element: <ProductDetails />,
  },
  {
    path: "/produtos",
    element: <ProductsList />,
  },
  {
    path: "/gerar-mensagem",
    element: (
      <MessageProvider>
        <GenerateMessage />
      </MessageProvider>
    ),
  },
  {
    path: "/mensagem",
    element: (
      <MessageProvider>
        <PresentMessage />
      </MessageProvider>
    ),
  },
]);
