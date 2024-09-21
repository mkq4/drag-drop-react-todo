/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import cl from './MyLink.module.css'
const MyLink = ({children, path}) => {
  return (
    <Link to={path} className={cl.MyLink}>{children}</Link>
  )
}

export default MyLink