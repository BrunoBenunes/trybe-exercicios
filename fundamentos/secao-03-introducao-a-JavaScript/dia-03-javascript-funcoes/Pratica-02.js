let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClients(newClientes) {
    return clientesTrybeBank.push(newClientes);
}
addClients('Brunão')
console.log(clientesTrybeBank)