import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import intagram from '../../assets/images/instagram.png'
import logo from '../../assets/images/logo.png'
import { Footers, Line, SectionFooter, SocialMedia } from './styles'

const Footer = () => (
  <Footers className="container">
    <div className="container">
      <SectionFooter>
        <div>
          <img className="image" src={logo} alt="Logo" />
        </div>
        <SocialMedia>
          <img src={intagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </SocialMedia>
      </SectionFooter>
      <Line>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Line>
    </div>
  </Footers>
)

export default Footer
