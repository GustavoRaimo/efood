export const getTotalPriceCart = (order: Pedido[]): number => {
  return order.reduce((accumulator, actualValue) => {
    return accumulator + actualValue.preco
  }, 0)
}
