import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { colors } from 'styles'
import { SearchCardProps } from 'types/search'
import { BlockedContent, CardContent, CardWrapper } from './style'

const SearchCard = ({ ...props }: SearchCardProps) => {
  const [hover, setHover] = useState(false)

  const history = useHistory()

  const selectCard = () => history.push(`${props.url}`)

  return (
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <CardContent onClick={selectCard} {...props}>
        {props?.isExclusive && (
          <BlockedContent>
            <Icon width={20} color={colors.white} icon={`mdi:lock`} />
          </BlockedContent>
        )}
      </CardContent>
    </CardWrapper>
  )
}

export { SearchCard }
