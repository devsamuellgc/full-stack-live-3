import { useMessageContext } from "../contexts/message";

export default function GenerateMessage() {
  const { handleMessage, submitMessage, message } = useMessageContext();
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-2 bg-slate-100 p-5 rounded min-w-64">
        <input
          type="text"
          value={message}
          placeholder="Digite sua mensagem aqui"
          onChange={(e) => handleMessage(e.target.value)}
          className="outline-none px-2 py-1 border-2 rounded"
        />
        <button
          onClick={submitMessage}
          className="bg-sky-600 text-white p-2 rounded-md w-full"
        >
          Gerar mensagem
        </button>
      </div>
    </div>
  );
}
