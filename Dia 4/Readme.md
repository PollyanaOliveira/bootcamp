## Excercício Integrador Express

Usando a array abaixo:

```let products = [
{id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
{id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
{id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
{id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
{id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
{id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
{id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
{id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
{id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
{id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
]```

Vamos criar um CRUD com Router, tendo os seguintes endpoints, usando o
Postman, nos permitam:

1. Retornar todos os produtos da array. “/api/products”,
2. Obter um produto específico pelo ID “/api/products/:id”
3. Adicionar um novo produto “/api/products”,
4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
5. Deletar um produto utilizando o ID “/api/products/:id”.
