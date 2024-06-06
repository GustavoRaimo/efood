import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'

const Header = () => {
  const order = useSelector((state: RootReducer) => state.cart.order)
  const totalItems = order.length
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
        <TextCart>{totalItems} produto(s) no carrinho</TextCart>
      </div>
    </HeaderStyle>
  )
}

export default Header
