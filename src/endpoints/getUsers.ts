import {Request, Response} from 'express'
import selectUsers from "../data/selectUsers"


export default async function getUsers(
    req: Request,
    res: Response
): Promise<any> {

    try {
        const result = await selectUsers()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error)
    }

}