let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N°: ${order.address.number}, AP; ${order.address.apartment}.`)
}

customerInfo(order);

const newValue = {
  name: 'Luiz Silva',
  total: 50,
  pizzas: Object.keys(order.order.pizza),
  drinks: order.order.drinks.coke.type,
}

function orderModifier(order) {
  order.name = newValue.name;
  order.payment.total = newValue.total
  drinks = newValue.drinks
  pizzas = newValue.pizzas
  console.log(`Olá ${order.name}, seu pedido de: ${pizzas[0]} e ${pizzas[1]}, e ${drinks}, deu um valor total de: ${order.payment.total}`)

}

orderModifier(order);