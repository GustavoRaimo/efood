import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Perfil = () => {
  const { id } = useParams()
  const [foodList, setFoodList] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setFoodList([res]))
      .catch((error) => console.error('Erro ao carregar dados:', error))
  }, [id])

  if (foodList.length === 0) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header itens={0} />
      <Apresentacao restaurant={foodList[0]} />
      <FoodList foods={foodList} />
      <Footer />
    </>
  )
}

export default Perfil
