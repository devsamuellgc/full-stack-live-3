export function InputStructure({
  type = "text",
  name,
  placeholder,
  label,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className="bg-transparent border-2 border-black rounded px-2 py-1 outline-none"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        id={name}
      />
    </div>
  );
}

export const teste = "teste";
