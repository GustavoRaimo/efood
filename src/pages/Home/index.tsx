import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

import Restaurant from '../../models/Restaurant'

import Hioki from '../../assets/hioki.png'
import tratoria from '../../assets/trattoria.png'

const restaurant: Restaurant[] = [
  {
    id: 1,
    RestaurantCategories: ['Destaque do dia', 'Japonesa'],
    RestaurantDetails:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    RestaurantPhoto: Hioki,
    RestaurantTitle: 'Hioki Sushi',
    RestaurantRate: 4.9,
    RestaurantToLink: '/perfil'
  },
  {
    id: 2,
    RestaurantCategories: ['Italiana'],
    RestaurantDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    RestaurantPhoto: tratoria,
    RestaurantTitle: 'La Dolce Vita Trattoria',
    RestaurantRate: 4.6,
    RestaurantToLink: '/perfil'
  },
  {
    id: 3,
    RestaurantCategories: ['Italiana'],
    RestaurantDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    RestaurantPhoto: tratoria,
    RestaurantTitle: 'La Dolce Vita Trattoria',
    RestaurantRate: 4.6,
    RestaurantToLink: '/perfil'
  },
  {
    id: 4,
    RestaurantCategories: ['Italiana'],
    RestaurantDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    RestaurantPhoto: tratoria,
    RestaurantTitle: 'La Dolce Vita Trattoria',
    RestaurantRate: 4.6,
    RestaurantToLink: '/perfil'
  },
  {
    id: 5,
    RestaurantCategories: ['Italiana'],
    RestaurantDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    RestaurantPhoto: tratoria,
    RestaurantTitle: 'La Dolce Vita Trattoria',
    RestaurantRate: 4.6,
    RestaurantToLink: '/perfil'
  },
  {
    id: 6,
    RestaurantCategories: ['Italiana'],
    RestaurantDetails:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    RestaurantPhoto: tratoria,
    RestaurantTitle: 'La Dolce Vita Trattoria',
    RestaurantRate: 4.6,
    RestaurantToLink: '/perfil'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantList restaurants={restaurant} />
    <Footer />
  </>
)
export default Home
