const isPar = (x) => {
  if (typeof(x) !== 'number') 
    return "O argumento não é um número";
  return x % 2 === 0;
};
console.log(isPar('2'));

const div = (x, y) => {
  if (typeof(x||y) !== 'number') 
    return "O argumento não é um número";
  if (y === 0) 
    return "não pode dividir por 0";
  return [parseInt(x / y), x % y];
};
console.log(div(40,6));

const potencia = (x, y) => {
  if (typeof(x||y) !== 'number') 
    return "O argumento não é um número";
  let res = x;
  for ( let n=1; n < y; n++) {
    res = res * x;
  };
  return res;
};
console.log(potencia(9,4));

const torta = (x, y) => {
  if (typeof(x||y) !== 'number') 
    return "O argumento não é um número";
  for (n=1; n<=x; n++){
    if(n % y !== 0) 
      console.log(n);
    else 
      console.log("torta");
  }; 
};
torta(10,3);

const quantasPalavras = (frase) => {
 palavras = frase.split(" ");
 return palavras.length;
};
console.log(quantasPalavras("albatroz sentado na calçada"));