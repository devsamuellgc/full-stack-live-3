import { toast } from "react-toastify";

export function useToast() {
  function showToast(text, type, position = "top-right") {
    toast(text, {
      type,
      position,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  return { showToast };
}
