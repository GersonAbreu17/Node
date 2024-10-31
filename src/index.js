import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.get("/usuarios", (req, res) => {
    res.status(200).json({success: true, data: usuarios})
})

app.get("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).json({success: false, message: "Está faltando o ID"});
    } else{
        const usuarioEncontrado = usuarios.find((usuario) => {
            return usuario.id === Number(id)
        });

        if(usuarioEncontrado !== undefined){
            res.status(200).json({
                success: true,
                data: usuarioEncontrado
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            })
        }
    }
})

app.post("/usuarios", (req, res) => {
    //DESESTRUTURANDO O REQ.BODY
    const { nome, email, idade } = req.body;
    if(!nome || !email || !idade)
    {
        res.status(400).json({
            success: false,
            message: "Informações inválidas"
        })
    }else{
        //POSSO UTILIZAR AQUI ASSIM
        const novoUsuario = {
            id: usuarios.at(-1).id+1,
            nome,
            email,
            idade
        }

        usuarios.push(novoUsuario);

        res.status(200).json({
            success: true,
            message: "Usuário criado com sucesso"
        })
    }
})

app.listen(5000, () => {
    console.log("Servidor rodando em http://localhost:5000");
})

let usuarios = [
    { id: 1, nome: "João", email: "joao@email.com", idade: 25 },
    { id: 2, nome: "Gerson", email: "gerson@email.com", idade: 17 },
    { id: 3, nome: "Matheus", email: "matheus@email.com", idade: 32 },
    { id: 4, nome: "Jorge", email: "jorge@email.com", idade: 15 },
    { id: 5, nome: "Maria", email: "maria@email.com", idade: 45 },
    { id: 6, nome: "Carlos", email: "carlos@email.com", idade: 21 },
    { id: 7, nome: "Ana", email: "ana@email.com", idade: 28 },
    { id: 8, nome: "Lucas", email: "lucas@email.com", idade: 19 },
    { id: 9, nome: "Fernanda", email: "fernanda@email.com", idade: 22 },
    { id: 10, nome: "Ricardo", email: "ricardo@email.com", idade: 31 },
    { id: 11, nome: "Juliana", email: "juliana@email.com", idade: 30 },
    { id: 12, nome: "Pedro", email: "pedro@email.com", idade: 16 },
    { id: 13, nome: "Sofia", email: "sofia@email.com", idade: 29 },
    { id: 14, nome: "Bruno", email: "bruno@email.com", idade: 23 },
    { id: 15, nome: "Roberta", email: "roberta@email.com", idade: 18 }
];
