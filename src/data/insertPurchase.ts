import connection from "../connection";

export default async function insertPurchase(
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
) {
    await connection.insert({
        id,
        userId,
        product_id: productId,
        quantity,
        total_price: totalPrice
    }).into('ecommerce_purchases')
}


