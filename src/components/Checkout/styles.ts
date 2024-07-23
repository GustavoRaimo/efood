import { styled } from 'styled-components'
import { cores } from '../../styles'
import { SubmitCartButton } from '../Cart/styles'

export const DeliveryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }

  .buttonContainer {
    margin-top: 24px;
  }

  .cardInput {
    display: grid;
    grid-template-columns: 229px 87px;
    column-gap: 30px;
  }

  .expiresInput {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
  }
`
export const SideBar = styled.aside`
  z-index: 2;
  padding: 32px 8px 8px 8px;
  max-width: 360px;
  width: 100%;
  background-color: ${cores.vermelho};

  h2 {
    color: ${cores.branco};
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  label {
    color: ${cores.branco};
    font-weight: 700;
    font-size: 14px;
  }
  input {
    width: 100%;
    padding: 8px;
    background-color: ${cores.rosa};
    border: 1px solid ${cores.rosa};
    margin: 8px 0;
  }

  small {
    color: ${cores.branco};
  }

  &.customInput {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
  }

  &.cardInputField {
    display: grid;
    grid-template-columns: 229px 87px;
    column-gap: 30px;
  }

  &.expiresInputField {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
  }
`
export const CustomButtom = styled(SubmitCartButton)`
  margin-bottom: 8px;
`

export const PaymentContent = styled(DeliveryContainer)`
  display: none;

  &.is-open {
    display: flex;
  }
`

export const ConfirmContent = styled(DeliveryContainer)`
  display: none;

  &.is-open {
    display: flex;
  }

  p {
    color: ${cores.branco};
    font-size: 14px;
    font-weight: 400;

    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 8px;
  }
`
