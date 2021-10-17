import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsBrands from '@fortawesome/free-brands-svg-icons';

function HomeIcons() {
  return (
    <>
      <p className="homeIcons">SHARE
      <FontAwesomeIcon icon={IconsBrands.faFacebookF} /> 
      <FontAwesomeIcon icon={IconsBrands.faTwitter} />
      </p>
    </>
  )
}

export default HomeIcons
