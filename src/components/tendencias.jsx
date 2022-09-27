//`https://api.themoviedb.org/3/movie/${item.id}?api_key=745a988f14ecce994530896b7d912473`
import React, { useState, Fragment, useContext } from 'react'
import AppContext from '../context/AppContext'

export function Tendencias() {
	const { Fetch, busqueda } = useContext(AppContext)
	const [data, setData] = useState([])

	function guardarId(dato) {
		window.localStorage.setItem("identificador", dato)
	}

	React.useEffect(async () => {
		const data = await Fetch('trending/movie/week')
		setData(data.results)
	}, [])

	return (
		<Fragment>
			{
				busqueda == undefined
					?
					<Fragment>
						<h2 className='Title'>Tendencias</h2>
						<div className='tendencias'>
							{
								data.map(item => (
									<div className='tendenciasUnidad' key={item.id} onClick={() => guardarId(item.id)}>
										<a href="/movie"><img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" /></a>
										<p>{item.title}</p>
									</div>
								))
							}
						</div>
					</Fragment>
					: <Fragment>
						<h2 className='Title'>Busquedas</h2>
						<div className='tendencias'>
							{
								busqueda.map(item => (
									<div className='tendenciasUnidad' onClick={() => guardarId(item.id)}>
										<a href="/movie"><img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" /></a>
										<p>{item.title}</p>
									</div>
								))
							}
						</div>
					</Fragment>
			}


		</Fragment>
	)
}