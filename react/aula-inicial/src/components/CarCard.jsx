export function CarCard({ img, price, title, city, state, date, hour }) {
  return (
    // Div principal
    <div className="w-48 h-96 border overflow-hidden rounded-lg cursor-pointer shadow-sm hover:shadow-lg">
      {/* Imagem */}
      <div className="w-full h-1/2">
        <img
          className="w-full h-full hover:object-cover"
          src={img}
          alt="Carro"
        />
      </div>
      {/* Textos */}
      <div className="h-1/2 w-full p-4 flex flex-col justify-between">
        {/* Preço e título */}
        <div className="flex flex-col gap-3">
          <span>R$ {price}</span>
          <p className="text-sm">{title}</p>
        </div>
        {/* Localização, data e hora */}
        <div className="text-xs">
          <p>
            {city} - {state}
          </p>
          <p>
            {date}, {hour}
          </p>
        </div>
      </div>
    </div>
  );
}
