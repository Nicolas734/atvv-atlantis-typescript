import Telefone from "../models/telefone.js"

export const buscarTelefones = async (req, res) => {
    try{
        const dados = await Telefone.findAll({
            attributes:["id","id_cliente","ddd","numero"]
        })
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
            },
            attributes:["id","id_cliente","ddd","numero"]
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"telefone não encontrado..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarTelefone = async (req, res) => {
    try{
        const telefone = await Telefone.create({
            id_cliente:req.body.id_cliente,
            ddd:req.body.ddd,
            numero:req.body.numero
        })
        res.status(201).json(telefone);
    }catch(error){
        res.status(400).json({message:error});
    }
}