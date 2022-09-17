import React from 'react'
import { Movil } from '../components/movil'
import { Desktop } from '../components/desktop'

export function Header(){
	const ancho = screen.width
	return (
		<header>
				{
					ancho < 970 
					? <Movil />
					: <Desktop />
				}
		</header>
	)
}