import Acomodacao from "../models/acomodacao.js"

export const buscarAcomodacoes = async (req, res) => {
    try{
        const dados = await Acomodacao.findAll()
        res.status(302).json(dados);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const buscarAcomodacao = async (req, res) => {
    try{
        const dado = await Acomodacao.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(302).json(dado);
    }catch(error){
        res.status(404).json({message:error});
    }
}