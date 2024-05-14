import {
  List,
  Container,
  Modal,
  ModalContent,
  ModalOverlay,
  FoodImage,
  ModalContainer,
  FoodTitle,
  FoodDescription,
  AddCartButton,
  CloseIcon
} from './styles'
import buttonClose from '../../assets/button-close.png'
import Food from '../../components/Food'
import { Restaurante } from '../../pages/Home'
import { useState } from 'react'

export type Props = {
  foods: Restaurante[]
}

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const FoodList = ({ foods }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [foodTitle, setFoodTitle] = useState('')
  const [foodDescription, setFoodDescription] = useState('')
  const [foodPhoto, setFoodPhoto] = useState('')
  const [foodPhotoAlt, setFoodPhotoAlt] = useState('')
  const [foodServe, setFoodServe] = useState('')
  const [foodPrice, setFoodPrice] = useState(0)

  return (
    <>
      <Container>
        {foods.map((restaurant) => (
          <List key={restaurant.id}>
            {restaurant.cardapio.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setShowModal(true)
                  setFoodTitle(item.nome)
                  setFoodDescription(item.descricao)
                  setFoodServe(item.porcao)
                  setFoodPrice(item.preco)
                  setFoodPhotoAlt(item.nome)
                  setFoodPhoto(item.foto)
                }}
              >
                <div>
                  <Food
                    key={item.id}
                    FoodPhoto={item.foto}
                    FoodTitle={item.nome}
                    FoodDescription={item.descricao}
                    FoodItSuits={item.porcao}
                  />
                </div>
              </li>
            ))}
          </List>
        ))}
      </Container>

      <Modal className={showModal ? 'visible' : ''}>
        <ModalContent>
          <FoodImage src={foodPhoto} alt={foodPhotoAlt} />
          <ModalContainer>
            <FoodTitle>{foodTitle}</FoodTitle>
            <FoodDescription>
              {foodDescription}
              <p>Serve: de {foodServe}</p>
            </FoodDescription>
            <AddCartButton>
              Adicionar ao carrinho - {priceFormat(foodPrice)}
            </AddCartButton>
          </ModalContainer>
          <CloseIcon
            onClick={() => setShowModal(false)}
            src={buttonClose}
            alt="Close button"
          />
        </ModalContent>
        <ModalOverlay onClick={() => setShowModal(false)} />
      </Modal>
    </>
  )
}

export default FoodList
