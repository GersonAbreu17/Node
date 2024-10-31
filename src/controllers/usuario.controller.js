import UsuarioModel from "../model/usuario.model.js";

export default class UsuarioController{
    async criar(req, res){
        let {nome, email, idade} = req.body;

        if(nome && email && idade){
            let usuarioModel = new UsuarioModel("",nome, email, idade);
            let usuarioCriado = await usuarioModel.criar();

            if(usuarioCriado){
                res.status(200).json({success: true, data: "Usuário criado com sucesso."})
            } else {
                res.status(404).json({success: false, message: "Não foi possível criar o usuário."});
            }
        } else {
            res.status(400).json({success: false, message: "Parametros inválidos."});
        }
    }
}