import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'

import { Modal, Button } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Button onClick={() => setOpenModal(true)} label={'Open Modal'}></Button>
      <Modal {...args} isOpen={openModal} onClose={() => setOpenModal(false)}>
        {args.children}
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isCentered: true,
  title: 'Testing my modal',
  subtitle: 'This is a test',
  actionButton: true,
  actionLabel: 'Confirm',
  cancelButton: true,
  cancelLabel: 'Back',
}
