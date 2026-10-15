const filmes = new Array(
{
    titulo: "o perneta",
    classificacao: "livre",
    descricao: "o menino que não tinha uma perna",
    lancamento: true
},

{
    titulo: "o outro perneta",
    classificacao: "livre",
    descricao: "outro menino que não tinha uma perna",
    lancamento: false
},

{
    titulo: "mais um perneta",
    classificacao: "12 anos",
    descricao: "mais um menino que não tinha uma perna",
    lancamento: false
}

)

class Filmes {
    Buscar() {
        return filmes 
    }

    BuscarUm(id) {
        return filmes[id]

    }

    Criar(titulo, classificacao, descricao, lancamento) {
        filmes.push(
            {titulo, classificacao, descricao, lancamento}
        )

    }

    Alterar(id, titulo, classificacao, descricao, lancamento){
        filmes[id].titulo = titulo
        filmes[id].classificacao = classificacao
        filmes[id].descricao = descricao
        filmes[id].lancamento = lancamento

    }

     AlterarSatus(id){

        filmes[id].lancamento = !filmes[id].lancamento


    }

    Deletar(id) {
        filmes.splice(id, 1)

    }
}

export default new Filmes()