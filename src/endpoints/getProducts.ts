import {Request, Response} from 'express'
import selectProducts from '../data/selectProducts'


export default async function getProducts(
    req: Request,
    res: Response
): Promise<any> {

    try {
        const result = await selectProducts()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error)
    }

}