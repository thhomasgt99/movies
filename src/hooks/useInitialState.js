import { useState } from "react"
import axios from "axios"

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: '745a988f14ecce994530896b7d912473',
	}
})

const useInitialSate = ()=>{
	async function Fetch(faltante){
		const { data } = await api(faltante)
		return data
	}
	return {
		Fetch,
	}
}

export default useInitialSate