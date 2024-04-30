import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import FoodModel from '../../models/Food'
import pizza from '../../assets/pizza.png'

const foods: FoodModel[] = [
  {
    id: 1,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  },
  {
    id: 2,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  },
  {
    id: 3,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  },
  {
    id: 4,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  },
  {
    id: 5,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  },
  {
    id: 6,
    foodTitle: 'Pizza Marguerita',
    foodDescription:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foodPhoto: pizza,
    foodPhotoAlt: 'Pizza marguerita'
  }
]

const Perfil = () => (
  <>
    <Header itens={0} />
    <Apresentacao />
    <FoodList foods={foods} />
    <Footer />
  </>
)

export default Perfil
