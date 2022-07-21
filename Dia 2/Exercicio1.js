// Faça uma função chamada "calcularPreco" que receba dois parâmetros, sendo o
// primeiro o nome de um produto (ex: Laptop), e o segundo o preço desse produto
// (sem o sinal $). Esta função deve imprimir o nome do produto, o custo de envio e o
// preço final no console.

// O texto impresso pelo console deve ficar assim:
// ‘O produto <nome do produto> custa <preço do produto>. Seu custo de envio é
// <custo de envio>. Portanto, o preço final é <preço final>'
// Para testar se o código funciona corretamente, use os exemplos a seguir.
// Atenção: eles não podem ser modificados de forma alguma.

// calcularPreco (‘Macbook’, 2500);
// calcularPreco (‘Celular’, 500);
// calcularPreco (‘Playstation’, 4500);

// Cada produto tem um custo de envio individual de acordo com sua faixa de preço:

// ● Se o preço for de R$1,00 até R$2000 o custo de envio será de R$300
// ● Se o preço for de R$2001 até R$4000 o custo de envio será de R$ 450
// ● Se o preço for acima de R$4000 o custo de envío será de R$700

// O preço final da compra é o preço do produto + custo do envio.

const calcularPreco = (nomeProduto, preco) => {
  let custoEnvio = 0;

  if (preco >= 1 && preco <= 2000) {
    custoEnvio = 300;
  } else if (preco >= 2001 && preco <= 4000) {
    custoEnvio = 450;
  } else if (preco > 4000) {
    custoEnvio = 700;
  }

  let precoTotal = preco + custoEnvio;

  return `O produto ${nomeProduto} custa ${preco}. Seu custo de envio é ${custoEnvio}. Portanto, o preço final é ${precoTotal}`;
};

console.log(calcularPreco("Macbook", 2500));
console.log(calcularPreco("Celular", 500));
console.log(calcularPreco("Playstation", 4500));
