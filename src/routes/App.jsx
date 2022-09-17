
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { OneMovie } from '../pages/oneMovie'
import { Genero } from '../pages/genero'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

import '../styles/styles.scss'

const App = ()=>{
	const initialState = useInitialState()
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/movie' element={<OneMovie />}/>
				<Route path='/genero' element={<Genero />}/>
				<Route path='*' element={'No Fount'}/>
			</Routes>
		</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App

