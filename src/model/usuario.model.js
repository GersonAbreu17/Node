import Banco from '../db/database.js'
let conexao = new Banco();

export default class UsuarioModel{
    #id;
    #nome;
    #email;
    #idade;

    constructor(id, nome, email, idade){
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#idade = idade;
    }

    get id (){
        return this.#id;
    }
    get nome (){
        return this.#nome;
    }
    get email (){
        return this.#email;
    }
    get idade (){
        return this.#idade;
    }

    set id(id){
        this.#id = id;
    }
    set nome(nome){
        this.#nome = nome;
    }
    set email(email){
        this.#email = email;
    }
    set idade(idade){
        this.#idade = idade;
    }

    async criar(){
        let sql = "INSERT INTO TB_USUARIO(USU_NOME, USU_EMAIL, USU_IDADE) VALUES ( ? , ? , ? )";
        let valores = [this.#nome, this.#email, this.#idade];
        let resultado = await conexao.ExecutaComandoLastInserted(sql, valores);
        return resultado;
    }

}