import Endereco from "../models/endereco.js"

export const buscarEnderecos = async (req, res) => {
    try{
        const dados = await Endereco.findAll()
        res.status(302).json(dados);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const buscarEndereco = async (req, res) => {
    try{
        const dado = await Endereco.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(302).json(dado);
    }catch(error){
        res.status(404).json({message:error});
    }
}
