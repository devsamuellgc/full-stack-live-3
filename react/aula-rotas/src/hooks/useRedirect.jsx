import { useNavigate } from "react-router-dom";

export function useRedirect() {
  const navigate = useNavigate();

  function goTo(path) {
    navigate(path);
  }

  return { goTo };
}
