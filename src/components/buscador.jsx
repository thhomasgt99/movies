import React, { useEffect ,useState, useContext} from 'react'
import axios from 'axios'
import AppContext from '../context/AppContext'



export function Buscador () {
	const { setBusqueda } = useContext(AppContext)
	const [ info, setInfo] = useState()


	const api = axios.create({
		baseURL: 'https://api.themoviedb.org/3/search/movie',
		params: {
			api_key: '745a988f14ecce994530896b7d912473',
			query: info
		}
	})
	
	const hadleSubmit = async (e)=>{
		e.preventDefault()
		const { data } = await api()
		setBusqueda(data.results)
	}

	return (
		<form onSubmit={hadleSubmit}>
			<input  class="buscador" type="text" placeholder=" Buscar" onChange={(e)=> setInfo(e.target.value)}/>
			<button className='buscador-btn'>Buscar</button>
		</form>
	)
}

// 