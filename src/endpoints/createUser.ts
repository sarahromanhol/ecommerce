import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request,
    res: Response
){
    try {
        const {name, email, password} = req.body


        if(!name || !email || !password) {
            res.status(400).send({
                message: 'Preencha todos os campos'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            name,
            email,
            password
        )

        res.status(200).send("Usuário criado com sucesso!")


    } catch (error: any) {
        res.status(400).send("Deu ruim")
    }

}