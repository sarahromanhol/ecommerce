import connection from "../connection"

export default async function selectUsers(){
    const result = await connection('ecommerce_users')
        .select('*')

    return result
}