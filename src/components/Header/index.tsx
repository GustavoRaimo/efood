import logo from '../../assets/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'

type Props = {
  itens: number
}

const Header = ({ itens = 0 }: Props) => (
  <HeaderStyle>
    <div className="container">
      <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
      <Branding src={logo} alt="Logo do restaurante" />
      <TextCart>{itens} produto(s) no carrinho</TextCart>
    </div>
  </HeaderStyle>
)

export default Header
