import { Center } from '@chakra-ui/react'
import { Container, Form, Button } from 'components'
import { customFields } from './settings'

const FormModule = () => {

  return (
      <Container flexDirection="column" width="100%">
        <Center flex="1" padding={5} border="0 solid red">
          <Form
            fields={customFields}
            button={(handleSubmit) => 
              <Button label='Salvar' onClick={handleSubmit} />
            }
            handleFormSubmit={(data) =>{}}
          />
        </Center>
      </Container>
  )
};

export { FormModule }
