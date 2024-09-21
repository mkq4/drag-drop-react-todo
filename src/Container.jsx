import cl from './App.module.css'

// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  return (
    <div className={cl.container}>{children}</div>
  )
}

export default Container