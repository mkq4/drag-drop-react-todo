/* eslint-disable no-unused-vars */
import MyLink from "../UI/Link/MyLink"
import cl from "./Header.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <header className={cl.header}>
        <div className={cl.header__logo}>
            <h1><Link to="/">react to-do</Link></h1>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M222-200 80-342l56-56 85 85 170-170 56 57-225 226Zm0-320L80-662l56-56 85 85 170-170 56 57-225 226Zm298 240v-80h360v80H520Zm0-320v-80h360v80H520Z"/></svg>
        </div>
        <div className={cl.header__auth}>

        {isAuth ? 'account: ' : <> <MyLink path='/login'>Login</MyLink> <MyLink path='/registration'>Registration</MyLink> </>}
        
            
        </div>
        
    </header>
  )
}

export default Header