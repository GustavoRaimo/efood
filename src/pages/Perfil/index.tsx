import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Checkout from '../../components/Checkout'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood, isLoading } = useGetRestaurantSelectedQuery(id)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!restaurantFood) {
    return <div>Erro ao carregar os dados.</div>
  }

  return (
    <>
      <Header />
      <Apresentacao restaurant={restaurantFood} />
      <FoodList
        foods={[restaurantFood]}
        order={{ id: 0, nome: '', foto: '', preco: 0 }}
      />
      <Cart />
      <Checkout />
      <Footer />
    </>
  )
}

export default Perfil
