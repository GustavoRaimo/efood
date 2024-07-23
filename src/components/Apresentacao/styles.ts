import styled from 'styled-components'
import ApresentacaoFundo from '../../assets/hero-trattoria.png'
import { breakpoints, cores } from '../../styles'

export const ApresentacaoContainer = styled.div`
  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
  }
  background-image: url(${ApresentacaoFundo});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  .container {
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      padding: 0 10px;
    }
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
