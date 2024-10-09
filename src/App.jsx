import { useEffect } from 'react'
import { useAuth } from './hook/useAuth.hook'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
const App = () => {
	const {refresh} = useAuth()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => refresh(), [])
  return (
    <BrowserRouter>
		<AppRouter/>
	</BrowserRouter>
  )
}

export default App