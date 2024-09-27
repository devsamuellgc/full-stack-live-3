export function formatPrice(price) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
  return formattedPrice;
}
