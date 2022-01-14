import connection from "../connection";

export default  async function insertProduct(
    id: string,
    name: string,
    price: string,
    imageUrl: string,
    quantity: number
){
    await connection.insert({
        id,
        name,
        price,
        image_url: imageUrl,
        quantity
    }).into('ecommerce_products')
}