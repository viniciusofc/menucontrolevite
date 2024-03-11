
function CurrencyFormat(number) {
  const numberformat = Number(number)

  const formattedValue = (typeof numberformat === 'number') ? numberformat.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';

  return formattedValue;
}

export default CurrencyFormat;