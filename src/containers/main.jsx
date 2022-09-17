import React, { Fragment, useState}from 'react'
import { Tendencias } from '../components/tendencias'
import { Generos } from '../components/generos'

export function Main() {
	
	return (
		<main>
			<Tendencias />
			<Generos />
		</main>
	)
}