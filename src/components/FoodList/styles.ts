import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;

  li {
    list-style: none;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  background-color: ${cores.vermelho};
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
`

export const FoodImage = styled.img`
  object-fit: cover;
  width: 280px;
  height: 280px;
  margin: 32px 24px 32px 32px;
`

export const ModalContainer = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;
`

export const FoodTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
  line-height: 21.09px;
  display: block;
`

export const FoodDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${cores.branco};
  line-height: 22px;
  width: 100%;
  margin: 16px 0 16px 0;
  p {
    margin-top: 16px;
  }
`

export const CloseIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  width: 100%;
  margin: 8px;
  cursor: pointer;
`

export const AddCartButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
