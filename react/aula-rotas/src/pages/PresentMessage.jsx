import { useMessageContext } from "../contexts/message";

export default function PresentMessage() {
  const { message } = useMessageContext();

  return (
    <div className="w-full flex justify-center py-6">
      <p className="text-3xl">Mensagem: {message}</p>
    </div>
  );
}
