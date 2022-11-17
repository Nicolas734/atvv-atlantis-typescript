import Documento from "../models/documento.js"

export const buscarDocumentos = async (req, res) => {
    try{
        const dados = await Documento.findAll({
            attributes:['id','numero','tipo','dataExpedicao','id_cliente']
        })
        res.status(302).json(dados);
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const buscarDocumento = async (req, res) => {
    try{
        const dado = await Documento.findOne({
            where:{
                id:req.params.id
            },
            attributes:['id','numero','tipo','dataExpedicao','id_cliente']
        })
        if(dado != null){
            res.status(302).json(dado);
        }else{
            res.status(404).json({message:`documento não encontrado...`});
        }
    }catch(error){
        res.status(404).json({message:error});
    }
}

export const cadastrarDocumento = async (req, res) => {
    try{
        const documento = await Documento.create({
            id_cliente: req.body.id_cliente,
            numero: req.body.numero,
            tipo: req.body.tipo,
            dataExpedicao: req.body.dataExpedicao
        })
        res.status(201).json(documento);
    }catch(error){
        res.status(400).json({message:error});
    }
}