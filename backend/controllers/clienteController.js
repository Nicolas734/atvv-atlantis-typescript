import Cliente from "../models/cliente.js"

export const buscarClientes = async (req, res) => {
    try{
        const dados = await Cliente.findAll()
        res.status(302).json(dados)
    }catch(error){
        res.status(404).json({ message:error })
    }
}

export const buscarCliente = async (req, res) => {
    try{
        const dado = await Cliente.findOne({
            where:{
                id:req.params.id
            },
            attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','titular_id']
        })
        res.status(302).json(dado)

    }catch(error){
        res.status(404).json({message:error})
    }
}

export const cadastrarCliente = async (req, res) => {
    try{
        const dados = await Cliente.create({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            dataNascimento: req.body.dataNascimento,
            dataCadastro: req.body.dataCadastro
        })
        res.status(201).json(dados)

    }catch(error){
        res.status(400).json({message:error})
    }
}

export const atualizarCliente = async (req, res) => {
    try{
        const dados = await Cliente.update({
            nome: req.body.nome,
            nomeSocial: req.body.nomeSocial,
            dataNascimento: req.body.dataNascimento
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(202).json(dados)

    }catch(error){
        res.status(304).json({message:error})
    }
}

export const excluirCliente = async (req, res) => {
    try{
        await Cliente.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({message:`Cliente ${req.params.id} excluido com sucesso...`})
    }catch(error){
        res.status(401).json({message:error})
    }
}