import connection from "../connection";

export default async function selectProductById (
    id: string
) {
    const result = await connection('ecommerce_products')
    .select('*')
    .where({ id: id })

    return result[0]
}