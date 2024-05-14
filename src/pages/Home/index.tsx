import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import { useEffect, useState } from 'react'

export type Restaurante = {
  id?: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurantes} />
      <Footer />
    </>
  )
}
export default Home
