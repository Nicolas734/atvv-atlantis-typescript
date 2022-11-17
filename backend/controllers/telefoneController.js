import Telefone from "../models/telefone.js"

export const buscarTelefones = async (req, res) => {
    try{
        const dados = await Telefone.findAll()
        res.status(302).json(dados);
    }catch(error){
        res.status(404).josn({message:error});
    }
}

export const buscarTelefone = async (req, res) => {
    try{
        const dado = await Telefone.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status().json(dado);
    }catch(error){
        res.status(404).json({message:error});
    }
}