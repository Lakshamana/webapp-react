import { Icon } from '@iconify/react'
import { Button, Text } from 'components'
import { useHistory } from 'react-router-dom'
import { Body, Container, Header } from './style'
import { Props } from './types'

const AlertCard = ({ actionVariant = 'ghost', callToAction, ...props }: Props) => {
  const history = useHistory()
  const iconName =
    props.type === 'error' ? 'alert-circle-outline' : 'check-circle-outline'

  const redirectTo = () => {
      if (props.toRoute) history.push(`/${props.toRoute}`)
  }

  return (
    <Container {...props}>
      <Header variant={props.type}>
        <Icon
          display={'flex'}
          icon={`mdi:${iconName}`}
          align={'center'}
          color={'white'}
          height={60}
        />
        <Text paddingTop={16} fontSize={28} color={'white'}>
          {props.title}
        </Text>
      </Header>
      <Body>
        <Text fontSize={20}>
          {props.description}
        </Text>
        {props.actionLabel && (
          <Button
            marginTop={10}
            marginBottom={2}
            variant={actionVariant}
            label={props.actionLabel}
            onClick={props.toRoute ? redirectTo : callToAction}
          />
        )}
      </Body>
    </Container>
  )
}

export { AlertCard }
