import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, openCheckout, remove } from '../../store/reducers/cart'
import { priceFormat } from '../FoodList'

import {
  TrashButton,
  CartContainer,
  CartItem,
  SideBar,
  Overlay,
  CartStage,
  CartPrice,
  InfosItem,
  FinishCartButton
} from './styles'

const Cart = () => {
  const { isOpen, order } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const getTotalPrice = () => {
    return order.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }
  const handleCheckout = () => {
    if (order.length > 0) {
      dispatch(openCheckout())
    } else {
      alert(
        'Seu carrinho está vazio. Adicione itens antes de prosseguir com o checkout.'
      )
    }
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <SideBar>
          <CartStage>
            <ul>
              {order.map((o) => (
                <CartItem key={o.id}>
                  <img src={o.foto} alt="" />
                  <InfosItem>
                    <h3>{o.nome}</h3>
                    <span>{priceFormat(o.preco)}</span>
                  </InfosItem>
                  <TrashButton type="button" onClick={() => removeItem(o.id)} />
                </CartItem>
              ))}
            </ul>
            <CartPrice>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice())}</span>
            </CartPrice>
            <FinishCartButton onClick={handleCheckout}>
              Continuar com a entrega
            </FinishCartButton>
          </CartStage>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
