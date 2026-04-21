//named export
export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

//dalam 1 file js hanya boleh ada satu default export
export default formatCurrency;
