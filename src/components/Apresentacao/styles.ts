import styled from 'styled-components'
import ApresentacaoFundo from '../../assets/hero-trattoria.png'
import { cores } from '../../styles'

export const ApresentacaoContainer = styled.div`
  background-image: url(${ApresentacaoFundo});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

export const ApresentacaoCategoria = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  padding-top: 25px;
`
export const ApresentacaoPrato = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-top: 156.5px;
`
