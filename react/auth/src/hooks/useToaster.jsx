import { Bounce, toast } from "react-toastify";

export function useToaster() {
  function toaster(type, text) {
    toast(text, {
      type,
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  return { toaster };
}
