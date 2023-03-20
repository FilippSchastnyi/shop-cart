import { Link } from 'react-router-dom'
import LogoCss from './Logo.module.scss'

const Logo = () => {
  return (
    <Link to="/" className={LogoCss.logo}>
      Shop&Fun
    </Link>
  )
}

export default Logo
