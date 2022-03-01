import { useHistory } from 'react-router'
import { CategoryPostCardProps } from 'types/categories'
import { CardWrapper, PostContent } from './style'
import { HoverInfoCard } from '../hoverInfoCard'

const CategoryPostCard = ({ ...props }: CategoryPostCardProps) => {
  const history = useHistory()

  const selectCategory = () => {
    history.push(`${props.url}`)
  }

  return (
    <CardWrapper onClick={selectCategory}>
      <PostContent {...props}></PostContent>
      <HoverInfoCard postTitle={props.title} />
    </CardWrapper>
  )
}

export { CategoryPostCard }
