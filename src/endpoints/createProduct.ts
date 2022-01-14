import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";

export default async function createProduct(
    req: Request,
    res: Response
) {
    try {
        const { name, price, imageUrl, quantity } = req.body

        if (!name || !price || !imageUrl || !quantity) {
            res.status(400).send({
                message: 'Preencha todos os campos'
            })

            return
        }

        const id: string = Date.now() + Math.random().toString()

        await insertProduct(
            id,
            name,
            price,
            imageUrl,
            quantity
        )

        res.status(200).send({
            message: "Produto inserido com sucesso!"
        })


    } catch (error: any) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}