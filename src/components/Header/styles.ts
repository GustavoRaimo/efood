import styled from 'styled-components'
import fundo from '../../assets/fundo.png'
import { breakpoints, cores } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});

  .container {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 39px 0;

    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
      align-items: center;

      & > * {
        display: block;
        margin: 10px 0;
      }

      & > :nth-child(1) {
        order: 2;
      }

      & > :nth-child(2) {
        order: 1;
      }

      & > :nth-child(3) {
        order: 3;
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`
export const Branding = styled.img`
  width: 125px;
  height: 57.5px;
  max-width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 15px;
  }
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.mobile}) {
  }
`

export const TextCart = styled.p`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
  }
`
