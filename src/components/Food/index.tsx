import { Card, Photo, Title, Description, AddCartButton } from './styles'

export type Props = {
  FoodPhoto: string
  FoodTitle: string
  FoodDescription: string
  FoodItSuits?: string
}

const Food = ({ FoodPhoto, FoodTitle, FoodDescription }: Props) => {
  const getDescribe = (describe: string) => {
    if (describe.length > 215) {
      return describe.slice(0, 212) + ' ...'
    }
    return describe
  }
  return (
    <Card>
      <Photo src={FoodPhoto} alt={FoodTitle} />
      <Title>{FoodTitle}</Title>
      <Description>{getDescribe(FoodDescription)}</Description>
      <AddCartButton>Mais detalhes</AddCartButton>
    </Card>
  )
}

export default Food
