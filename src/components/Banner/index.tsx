import banerImage from '../../assets/images/la_dolce.png'
import { BannerContainer } from './styles'

const Banner = () => (
  <div className="container">
    <BannerContainer style={{ backgroundImage: `url(${banerImage})` }}>
      <div className="container">
        <h3>Italiana</h3>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </BannerContainer>
  </div>
)

export default Banner
