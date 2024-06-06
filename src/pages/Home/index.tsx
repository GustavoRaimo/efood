import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurante = {
  id?: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export type Pedido = {
  id: number
  nome: string
  foto: string
  preco: number
}

const Home = () => {
  const { data: restaurantes = [], isLoading } = useGetRestaurantsQuery()
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
