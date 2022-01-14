import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProductById from "../data/selectProductById";
import selectUserById from "../data/selectUserById";

export default async function createPurchase(
    req: Request,
    res: Response
) {
    try {
        const { userId, productId, quantity } = req.body

        // pegando produto pelo id

        const product = await selectProductById(productId)
        if (!product) {
            throw new Error("Produto não encontrado")
        }



        // pegando usuário pelo id

        const user = await selectUserById(userId)
        if (!user) {
            throw new Error("Usuário não encontrado")
        }



        // calculando preço total da compra

        const totalPrice = quantity * product.price






        const id: string = Date.now() + Math.random().toString()

        await insertPurchase(
            id,
            productId,
            userId,
            quantity,
            totalPrice
        )

        res.status(200).send("Compra criada com sucesso!")


    } catch (error: any) {
        res.status(400).send({
            message: error || error.sqlMessage
        })
    }
}