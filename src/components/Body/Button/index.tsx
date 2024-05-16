import { ButtnLink, ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, children, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtnLink to={to as string} title={title}>
      {children}
    </ButtnLink>
  )
}

export default Button
