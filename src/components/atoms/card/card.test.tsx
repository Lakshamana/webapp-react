import { render, screen } from '@testing-library/react'
import { Card } from '.'

const children = <p>This is a children</p>

describe('<Card/>', () => {
  beforeEach(() => {
    render(<Card>{children}</Card>)
  })
  it('should render card component', () => {
    expect(screen.getByTestId('card-atom')).toBeInTheDocument()
  })
  it('should render card with children passed by props', () => {
    expect(screen.getByText('This is a children')).toBeInTheDocument()
  })
})
