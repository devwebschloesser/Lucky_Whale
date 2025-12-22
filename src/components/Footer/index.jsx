import { FooterContainer } from './styles'

export function Footer() {
  const devSite = 'https://meu-portifolio-rysn.vercel.app/'

  return (
    <FooterContainer>
      <p>
        Desenvolvido por{' '}
        <a href={devSite} target='_blank'>
          Leonardo Schloesser
        </a>{' '}
        - 2025 - Todos os direitos reservados
      </p>
    </FooterContainer>
  )
}
