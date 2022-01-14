import connection from "../connection"

export default async function selectProducts(){
    const result = await connection('ecommerce_products')
        .select('*')

    return result
}