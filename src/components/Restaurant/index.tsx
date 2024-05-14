import Button from '../Button'
import { Card, Title, Description, Rate, Categories, Photo } from './styles'
import Star from '../../assets/estrela.png'

type Props = {
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantDetails: string
  RestaurantPhoto: string
  RestaurantCategories: string[]
  RestaurantToLink: string
}

const Restaurant = ({
  RestaurantTitle,
  RestaurantRate,
  RestaurantDetails,
  RestaurantPhoto,
  RestaurantCategories,
  RestaurantToLink
}: Props) => {
  return (
    <Card>
      <Photo src={RestaurantPhoto} alt="Hioki sushi" />
      <Categories>
        {RestaurantCategories.map((info) => {
          if (info) {
            return <Button key={info}>{info}</Button>
          }
        })}
      </Categories>
      <div className="ContainerTop">
        <Title>{RestaurantTitle}</Title>
        <Rate>
          <h3>{RestaurantRate}</h3>
          <img src={Star} alt="Estrela amarela" />
        </Rate>
      </div>
      <Description>{RestaurantDetails}</Description>
      <Button type="link" to={RestaurantToLink}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
