const clients = [
  {
    name: 'João da Silva',
    age: 28,
    email: 'joao.silva@gmail.com',
    phone: '(11) 5555-5555',
    address: {
      street: 'Rua dos Lírios',
      number: 123,
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      cep: '01234-567',
    },
  },
  {
    name: 'Maria Souza',
    age: 35,
    email: 'maria.souza@hotmail.com',
    address: {
      street: 'Rua dos Cravos',
      number: 456,
      neighborhood: 'Copacabana',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '12345-678',
    },
  },
  {
    name: 'Pedro Oliveira',
    age: 42,
    email: 'pedro.oliveira@gmail.com',
    address: {
      street: 'Rua das Margaridas',
      number: 789,
      neighborhood: 'Boa Viagem',
      city: 'Recife',
      state: 'PE',
      cep: '23456-789',
    },
  },
  {
    name: 'Ana Santos',
    age: 25,
    email: 'ana.santos@gmail.com',
    phone: '(71) 5555-5555',
    address: {
      street: 'Rua dos Girassóis',
      number: 1011,
      neighborhood: 'Barra',
      city: 'Salvador',
      state: 'BA',
      cep: '34567-890',
    },
  },
  {
    name: 'Luiz Costa',
    age: 32,
    email: 'luiz.costa@hotmail.com',
    address: {
      street: 'Rua das Acácias',
      number: 1213,
      neighborhood: 'Centro',
      city: 'Belo Horizonte',
      state: 'MG',
      cep: '45678-901',
    },
  },
  {
    name: 'Isabela Almeida',
    age: 37,
    email: 'isabela.almeida@gmail.com',
    phone: '(21) 5555-5555',
    address: {
      street: 'Rua das Hortênsias',
      number: 1415,
      neighborhood: 'Botafogo',
      city: 'Rio de Janeiro',
      state: 'RJ',
      cep: '56789-012',
    },
  },
  {
    name: 'Rafael Ferreira',
    age: 29,
    email: 'rafael.ferreira@hotmail.com',
    address: {
      street: 'Rua das Orquídeas',
      number: 1617,
      neighborhood: 'Pinheiros',
      city: 'São Paulo',
      state: 'SP',
      cep: '67890-123',
    },
  },
];

const findPersonByName = (name) => {
  try {
    verifyPersonName(name)
  } catch (error) {
    console.log(error.message)
  };
}

const verifyPersonName = (name) => {
  for (let index = 0; index < clients.length; index += 1) {
    if (clients[index].name === name) {
      const client = clients[index];
      console.log(`'Destinatário: ${client.name}. ${addressClient(client)}`)
    } else {
      throw new Error('Pessoa não encontrada, tente novamente')
    }
  }
}
const addressClient = (client) => {
  const street = client.address.street;
  const number = client.address.number;
  const neighborhood = client.address.neighborhood;
  const city = client.address.city;
  const state = client.address.state;
  const cep = client.address.cep;
  return `Endereço: ${street}, ${number}, ${neighborhood}, ${city} - ${state}. CEP: ${cep} `
};

const findPersonByPosition = (position) => {
  try {
    console.log(verifyPersonPosition(position));
  } catch (error) {
    console.log(error.message)
  };
};

const verifyPersonPosition  = (position) => {
  if (Number(position) < 0 || Number(position) === clients.length) {
    throw new Error('Posição inválida, tente novamente')
  }
  return `Cliente: ${clients[Number(position)].name}. Email: ${clients[Number(position)].email}`
}

const findPeopleByState = (state) => {
  try {
    console.log(verifyPersonState(state));
  } catch (error) {
    console.log(error.message)
  }
};

const verifyPersonState = (state) => {
  let personsByState = []
  for (let index = 0; index < clients.length; index += 1) {
    if(clients[index].address.state === state) {
      personsByState.push(clients[index].name)
    }
  }
  if (personsByState.length === 0) {
    throw new Error('Ops, nenhumaa pessoa mora nesse estado, tente outro')
  }
  return personsByState.join(', ');
}


findPersonByName('Bruno Henrique');
findPersonByPosition('2');
findPeopleByState('MG')