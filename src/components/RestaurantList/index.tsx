import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'

import Product from '../Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurants) => (
        <Product
          key={restaurants.id}
          RestaurantTitle={restaurants.RestaurantTitle}
          RestaurantRate={restaurants.RestaurantRate}
          RestaurantDetails={restaurants.RestaurantDetails}
          RestaurantPhoto={restaurants.RestaurantPhoto}
          RestaurantCategories={restaurants.RestaurantCategories}
          RestaurantToLink={restaurants.RestaurantToLink}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantList
