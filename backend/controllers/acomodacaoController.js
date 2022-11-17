import Acomodacao from "../models/acomodacao.js"

export const buscarAcomodacoes = async (req, res) => {
    try{
        const dados = await Acomodacao.findAll({
            attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
        })
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
            },
            attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"acomodação não encontrada..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarAcomodacao = async (req, res) => {
    try{
        const acomodacao = await Acomodacao.create({
            nomenclatura:req.body.nomenclatura,
            camaSolteiro:req.body.camaSolteiro,
            camaCasal:req.body.camaCasal,
            suite:req.body.suite,
            climatizacao:req.body.climatizacao,
            garagem:req.body.garagem
        })
        res.status(201).json(acomodacao);
    }catch(error){
        res.status(400).json({message:error});
    }
}