import {
  ApresentacaoContainer,
  ApresentacaoCategoria,
  ApresentacaoPrato
} from './styles'

export type Props = {
  restaurant: Restaurante
}

const Apresentacao = ({ restaurant }: Props) => (
  <ApresentacaoContainer style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <ApresentacaoCategoria>{restaurant.tipo}</ApresentacaoCategoria>
      <ApresentacaoPrato>{restaurant.titulo}</ApresentacaoPrato>
    </div>
  </ApresentacaoContainer>
)

export default Apresentacao
