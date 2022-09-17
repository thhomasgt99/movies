import React, { useState, Fragment, useContext } from 'react'
import AppContext from '../context/AppContext'

export function Generos() {
	const { Fetch } = useContext(AppContext) 
	const [data, setData] = useState([])

	function localstorage(dato) {
		const info = JSON.stringify(dato)
		window.localStorage.setItem('genero', info)
	}
	React.useEffect(async() => {
		const data  = await Fetch('genre/movie/list')
		setData(data.genres)
	}, [])

	return (
		<Fragment>
			<h2 className='titleGeneros'>Generos</h2>
			<div className='generos'>
				{
					data.map(item => <a onClick={() => localstorage(item)} href="/genero" key={item.id}>{item.name}</a>)
				}
			</div>
		</Fragment>
	)
}