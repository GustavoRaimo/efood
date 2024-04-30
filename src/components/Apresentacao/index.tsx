import {
  ApresentacaoContainer,
  ApresentacaoCategoria,
  ApresentacaoPrato
} from './styles'
const Apresentacao = () => (
  <ApresentacaoContainer>
    <div className="container">
      <ApresentacaoCategoria>Italiana</ApresentacaoCategoria>
      <ApresentacaoPrato>La Dolce Vita Trattoria</ApresentacaoPrato>
    </div>
  </ApresentacaoContainer>
)

export default Apresentacao
