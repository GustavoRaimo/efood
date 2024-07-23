import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'

import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const order = useSelector((state: RootReducer) => state.cart.order)

  const totalItems = order.length

  const openCart = () => {
    if (order.length > 0) {
      dispatch(open())
    } else alert('Seu carrinho está vazio. Adicione itens antes de prosseguir.')
  }

  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart onClick={openCart}>
          {totalItems} produto(s) no carrinho
        </TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
