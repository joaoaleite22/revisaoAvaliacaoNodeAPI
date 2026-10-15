import express from 'express'
import ControllerFilmes from '../controller/filmes.js'

const router = express.Router()

router.get("/buscar", ControllerFilmes.Buscar)

router.get("/buscarUm/:id", ControllerFilmes.BuscarUm)

router.post("/criar", ControllerFilmes.Criar)

router.put("/alterar/:id", ControllerFilmes.Alterar)

router.put("/alterarstatus/:id", ControllerFilmes.AlterarStatus)

router.delete("/deletar/:id", ControllerFilmes.Deletar)

export default router
