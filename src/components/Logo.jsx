import { Link } from "react-router-dom"

export default function Logo({customClass}) {

  const style = {
    zIndex: 10,
    textDecoration: 'none'
  }
  return (
    <Link className={`header-logo c-pointer ${customClass}`} style={style}>
      NETFILM
    </Link>    
  )
}