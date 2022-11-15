import Cliente from "../models/cliente.js"

export const buscarClientes = async (req, res) => {
    try{
        const dados = await Cliente.findAll()
        res.status(201).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
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
        res.status(201).json(dado)

    }catch(error){
        res.status(500).json({message:error})
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
        res.status(500).json({message:error})
    }
}