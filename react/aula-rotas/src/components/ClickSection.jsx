import { useCounterContext } from "../contexts/counter";

export function ClickSection() {
  const { decreaseCounter, increaseCounter } = useCounterContext();
  return (
    <div className="flex gap-2 max-w-fit">
      <button
        data-cy="btn-add"
        onClick={increaseCounter}
        className="p-2 rounded bg-slate-200"
      >
        Adicionar
      </button>
      <button
        data-cy="btn-remove"
        onClick={decreaseCounter}
        className="p-2 rounded bg-slate-200"
      >
        Remover
      </button>
    </div>
  );
}
