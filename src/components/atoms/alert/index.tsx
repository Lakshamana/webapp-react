import { AlertIcon, AlertDescription, CloseButton } from '@chakra-ui/react'
import { Container, AlertStyled } from './style'
import { Props, defaultProps } from './types'

const AlertComponent = ({ ...props }: Props) => {
  return (
    <Container {...props}>
      <AlertStyled status={props.type}>
        <AlertIcon />
        <AlertDescription paddingRight={props.closeable ? '10' : ''}>
          {props.description}
        </AlertDescription>
        {props.closeable && (
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            _focus={{boxShadow: 'none'}}
            onClick={props.onClose}
          />
        )}
      </AlertStyled>
    </Container>
  )
}

AlertComponent.defaultProps = defaultProps

export { AlertComponent }
