import ServiceFilmes from '../service/filmes.js'

class ControllerFilmes {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilmes.Buscar()

            res.send({ filmes })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const filme = ServiceFilmes.BuscarUm(id)

            res.send({ filme })
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Criar(req, res) {
        try {
            //titulo, classificacao, descricao e lancamento
            const { titulo, classificacao, descricao, lancamento } = req.body

            ServiceFilmes.Criar(titulo, classificacao, descricao, lancamento)
            res.sed({ mensagem: "Filme criado com sucesso!" })

        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Alterar(req, res) {
        try {
            //titulo, classificacao, descricao e lancamento
            const id = req.params.id
            const { titulo, classificacao, descricao, lancamento } = req.body


            ServiceFilmes.Alterar(titulo, classificacao, descricao, lancamento)
            res.sed({ mensagem: "Filme alterado com sucesso!" })

        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    AlterarStatus(req, res) {
        try {
            //titulo, classificacao, descricao e lancamento
            const id = req.params.id

            ServiceFilmes.AlterarStatus(id)
            res.sed({ mensagem: "Filme alterado com sucesso!" })

        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.params.id

            ServiceFilmes.Deletar(id)

            res.send({ mensagem: "Filme deletado com sucesso" })

        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }
}

export default new ControllerFilmes()