class Restaurant {
  id: number
  RestaurantTitle: string
  RestaurantRate: number
  RestaurantDetails: string
  RestaurantPhoto: string
  RestaurantCategories: string[]
  RestaurantToLink: string

  constructor(
    id: number,
    RestaurantTitle: string,
    RestaurantRate: number,
    RestaurantDetails: string,
    RestaurantPhoto: string,
    RestaurantCategories: string[],
    RestaurantToLink: string
  ) {
    this.id = id
    this.RestaurantTitle = RestaurantTitle
    this.RestaurantRate = RestaurantRate
    this.RestaurantDetails = RestaurantDetails
    this.RestaurantPhoto = RestaurantPhoto
    this.RestaurantCategories = RestaurantCategories
    this.RestaurantToLink = RestaurantToLink
  }
}

export default Restaurant
