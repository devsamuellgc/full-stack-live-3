import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}

/**
 * 1 - Excluir o App.css
 * 2 - Limpar o arquivo index.css
 * 3 - Cria a pasta de css dentro da pasta assets
 * 4 - Jogar o arquivo index.css dentro da pasta assets/css
 * 5 - Limpar o arquivo App.jsx
 * 6 - Trocar o caminho do arquivo index.css lá no arquivo main.jsx
 */
