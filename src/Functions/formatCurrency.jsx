
function CurrencyFormat(number) {

  const formattedValue = (typeof number === 'number') ? number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '';

  return formattedValue;
}

export default CurrencyFormat;