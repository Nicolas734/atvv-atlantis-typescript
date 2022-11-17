import Hospedagem from "../models/hospedagem.js"

export const buscarHospedagens = async (req, res) => {
    try{
        const dados = await Hospedagem.findAll()
        res.status(302).json(dados);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const buscarHospedagem = async (req, res) => {
    try{
        const dado = await Hospedagem.findOne({
            where:{
                id: req.params.id
            }
        })
        res.status(302).json(dado);
    }catch(error){
        res.status(404).json({message:error});
    }
}