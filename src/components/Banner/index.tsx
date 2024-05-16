import banerImage from '../../assets/images/la_dolce.png'
import { BannerContainer } from './styles'

const Banner = () => (
  <div className="container">
    <BannerContainer style={{ backgroundImage: `url(${banerImage})` }}>
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </BannerContainer>
  </div>
)

export default Banner
