import Endereco from "../models/endereco.js"

export const buscarEnderecos = async (req, res) => {
    try{
        const dados = await Endereco.findAll({
            attributes:['id','id_cliente','rua','bairro','cidade','estado','pais','cep']
        })
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
            },
            attributes:['id','id_cliente','rua','bairro','cidade','estado','pais','cep']
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:"endereco não encontrado..."});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarEndereco = async (req, res) => {
    try{
        const endereco = await Endereco.create({
            id_cliente:req.body.id_cliente,
            rua:req.body.rua,
            bairro:req.body.bairro,
            cidade:req.body.cidade,
            estado:req.body.estado,
            pais:req.body.pais,
            cep:req.body.cep
        })
        res.status(201).json(endereco);
    }catch(error){
        res.status(400).json({message:error});
    }
}