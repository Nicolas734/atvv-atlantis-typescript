import Documento from "../models/documento.js"

export const buscarDocumentos = async (req, res) => {
    try{
        const dados = await Documento.findAll()
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
            }
        })
        res.status(302).json(dado);
    }catch(error){
        res.status(404).json({message:error});
    }
}