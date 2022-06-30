interface Funcionario {
    codigo: number,
    nome: string
}

const funcionario = {
    codigo: 10,
    nome: 'Mario'
}

const funcionario2: {cod: number, nome: string} = {
    cod: 10,
    nome: 'Mario'
}

const funcionario3: Funcionario = {
    codigo: 200,
    nome: 'Mario'
}