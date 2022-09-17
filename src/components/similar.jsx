import React, { useState, useContext} from 'react'
import AppContext from '../context/AppContext'

export function Similar(){
	const { Fetch } = useContext(AppContext)
	const [dataSimilar, setDataSimilar] = useState([])
	const id = localStorage.getItem('identificador')

	function localStorageMovie(dato){
		window.localStorage.setItem('identificador' , dato)
	}

	React.useEffect(async()=>{
		const data = await Fetch(`movie/${id}/similar`)
		setDataSimilar(data.results)
	},[])

	return (
		<ul className='similares'>
				{
					dataSimilar.map((item)=> (
						<li>
							<a href="/movie" onClick={()=>{localStorageMovie(item.id)}}>
								<img  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />
								<p>{item.title}</p>
							</a>
						</li>
					))
				}
			</ul>
	)
}