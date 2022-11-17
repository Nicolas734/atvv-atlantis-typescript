import Acomodacao from "../models/acomodacao.js";
import Cliente from "../models/cliente.js";
import Hospedagem from "../models/hospedagem.js"

export const buscarHospedagens = async (req, res) => {
    try{
        const dados = await Hospedagem.findAll({
            attributes:["id","id_cliente","id_acomodacao"],
            include:[
                {
                    model:Cliente,
                    attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
                },
                {
                    model:Acomodacao,
                    attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
                }
            ]
        })
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
            },
            attributes:["id","id_cliente","id_acomodacao"],
            include:[
                {
                    model:Cliente,
                    attributes:['id','nome','nomeSocial','dataNascimento','dataCadastro','id_titular']
                },
                {
                    model:Acomodacao,
                    attributes:["id","nomenclatura","camaSolteiro","camaCasal","suite","climatizacao","garagem"]
                }
            ]
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"hospedagem não encontrada..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarHospedagem = async (req, res) => {
    try{
        const hospedagem = await Hospedagem.create({
            id_cliente:req.body.id_cliente,
            id_acomodacao:req.body.id_acomodacao
        })
        res.status(201).json(hospedagem);
    }catch(error){
        res.status(400).json({message:error});
    }
}