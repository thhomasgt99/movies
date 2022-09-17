import React, { useState, useContext} from 'react'
import { Similar } from '../components/similar'
import AppContext from '../context/AppContext'

export function OneMovie() {
	const { Fetch } = useContext(AppContext)
	const [data, setData] = useState('')
	const id = localStorage.getItem('identificador')

	React.useEffect(async() => {
		const data  = await Fetch(`movie/${id}`)
		setData(data)
	}, [])

	return (
		<div className='oneMovie'>
			<div>
				<img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="" />
				<div className='info'>
					<h2 className='titleOne'>{data.title}</h2>
					<h2 className='titleTwo'>{data.original_title}</h2>
					<p>{data.overview}</p>
				</div>
			</div>
			<Similar />
		</div>
	)
}