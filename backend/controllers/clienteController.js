import Cliente from "../models/cliente.js"

export const buscarClientes = async (req,res) => {
    try{
        const dados = await Cliente.findAll()
        res.status(201).json(dados)
    }catch(error){
        res.status(500).json({ message:error })
    }
}