import { Center } from '@chakra-ui/react'
import { MainLayout, Container, Form, Button } from 'components'
import { customFields } from './settings'

const FormModule = () => {

  return (
    <MainLayout>
      <Container flexDirection="column" width="100%">
        <Center flex="1" padding={5} border="0 solid red">
          <Form
            fields={customFields}
            button={(handleSubmit) => 
              <Button label='Salvar' onClick={handleSubmit} />
            }
            handleFormSubmit={(data) => console.log('data', data)}
          />
        </Center>
      </Container>
    </MainLayout>
  )
};

export { FormModule }
