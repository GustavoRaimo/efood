import { useDispatch, useSelector } from 'react-redux'
import { IMaskInput } from 'react-imask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'

import { getTotalPriceCart } from '../../utils'
import { priceFormat } from '../FoodList'

import {
  openPayment,
  returnToCart,
  returnToPayment,
  openConfirmPayment,
  finishOrder
} from '../../store/reducers/cart'

import {
  ConfirmContent,
  CustomButtom,
  DeliveryContainer,
  Field,
  PaymentContent,
  SideBar
} from './styles'
import { Overlay } from '../Cart/styles'

const Checkout = () => {
  const [purchase, { data }] = usePurchaseMutation()

  const dispatch = useDispatch()
  const { isAddress, isPayment, confirmPayment } = useSelector(
    (state: RootReducer) => state.cart
  )
  const cartAmount = useSelector((state: RootReducer) => state.cart.order)
  const handleCartAmount = getTotalPriceCart(cartAmount)

  const handleReturnToCart = () => {
    dispatch(returnToCart())
  }

  const handleOpenPayment = () => {
    if (
      form.values.remetente &&
      form.values.endereco &&
      form.values.cidade &&
      form.values.cep &&
      form.values.numero
    ) {
      dispatch(openPayment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const handleReturnToPayment = () => {
    dispatch(returnToPayment())
  }

  const handleConfirmPayment = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.anoVencimento &&
      form.values.mesVencimento
    ) {
      dispatch(openConfirmPayment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }
  const handleFinishOrder = () => {
    dispatch(finishOrder())
  }

  const form = useFormik({
    initialValues: {
      remetente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      remetente: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      mesVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      anoVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.remetente,
          address: {
            city: values.cidade,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })
  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <DeliveryContainer className={isAddress ? 'is-open' : ''}>
        <Overlay />
        <SideBar>
          <h2>Entrega</h2>
          <Field>
            <label htmlFor="remetente">Quem irá receber</label>
            <input
              type="text"
              required
              id="remetente"
              name="remetente"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.remetente}
            />
            <small>{getErrorMessage('remetente', form.errors.remetente)}</small>
          </Field>
          <Field>
            <label htmlFor="endereco">Endereço</label>
            <input
              type="text"
              required
              id="endereco"
              name="endereco"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.endereco}
            />
            <small>{getErrorMessage('endereco', form.errors.endereco)}</small>
          </Field>
          <Field>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              required
              id="cidade"
              name="cidade"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cidade}
            />
            <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
          </Field>
          <Field className="customInput">
            <div>
              <label htmlFor="cep">CEP</label>
              <IMaskInput
                mask="00.000-000"
                type="text"
                required
                id="cep"
                name="cep"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cep}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </div>
            <div>
              <label htmlFor="numero">Número</label>
              <input
                type="number"
                required
                id="numero"
                name="numero"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.numero}
              />
              <small>{getErrorMessage('numero', form.errors.numero)}</small>
            </div>
          </Field>
          <Field>
            <label htmlFor="complemento">Complemento(Opcional)</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.complemento}
            />
          </Field>
          <div className="buttonContainer">
            <CustomButtom type="button" onClick={handleOpenPayment}>
              Continuar com o pagamento
            </CustomButtom>
            <CustomButtom onClick={handleReturnToCart}>
              {' '}
              Voltar ao carrinho
            </CustomButtom>
          </div>
        </SideBar>
      </DeliveryContainer>

      <PaymentContent className={isPayment ? 'is-open' : ''}>
        <SideBar>
          <h2>Pagamento - Valor a pagar {priceFormat(handleCartAmount)}</h2>
          <Field>
            <label htmlFor="cardName">Nome do cartão</label>
            <input
              type="text"
              required
              id="cardName"
              name="cardName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardName}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </Field>
          <div className="cardInput">
            <Field>
              <label htmlFor="cardNumber">Número do cartão</label>
              <IMaskInput
                mask="0000.0000.0000.0000"
                type="text"
                required
                id="cardNumber"
                name="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardNumber}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </Field>
            <Field>
              <label htmlFor="cvv">CVV</label>
              <IMaskInput
                mask="000"
                type="text"
                required
                id="cvv"
                name="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cvv}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </Field>
          </div>
          <div className="expiresInput">
            <Field>
              <label htmlFor="mesVencimento">Mês de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="mesVencimento"
                name="mesVencimento"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.mesVencimento}
              />
              <small>
                {getErrorMessage('mesVencimento', form.errors.mesVencimento)}
              </small>
            </Field>
            <Field>
              <label htmlFor="anoVencimento">Ano de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="anoVencimento"
                name="anoVencimento"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.anoVencimento}
              />
              <small>
                {getErrorMessage('anoVencimento', form.errors.anoVencimento)}
              </small>
            </Field>
          </div>
          <div className="buttonContainer">
            <CustomButtom type="submit" onClick={handleConfirmPayment}>
              Finalizar o pagamento
            </CustomButtom>
            <CustomButtom onClick={handleReturnToPayment}>
              Voltar para a edição de endreço
            </CustomButtom>
          </div>
        </SideBar>
      </PaymentContent>
      <ConfirmContent className={confirmPayment ? 'is-open' : ''}>
        <SideBar>
          <h2>Pedido realizado - {data?.orderId} </h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <br />
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <br />
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <br />
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <div className="buttonContainer">
            <CustomButtom type="submit" onClick={handleFinishOrder}>
              Concluir
            </CustomButtom>
          </div>
        </SideBar>
      </ConfirmContent>
    </form>
  )
}

export default Checkout
