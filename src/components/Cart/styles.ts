import styled from 'styled-components'
import { cores } from '../../styles'
import trashIcon from '../../assets/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  z-index: 1;
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelho};
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.palhaClara};
  padding: 8px;
  margin-bottom: 16px;
  width: 344px;
  height: 100px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const CartStage = styled.div`
  display: block;
`

export const CartPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px 0;
  color: ${cores.palhaClara};
  weight: 700;
  font-size: 14px;
`
export const FinishCartButton = styled.a`
  border: none;
  padding: 4px;
  font-weight: 700;
  background-color: ${cores.rosa};
  color: ${cores.vermelho};
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
`
export const TrashButton = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-image: url(${trashIcon});
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const InfosItem = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 21.09px;
  }
  span {
    margin: 16px 0 33px 0;
    font-weight: 400;
    font-size: 14px;
  }
`
