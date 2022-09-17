import React, { Fragment } from 'react'
import { Header } from '../containers/header'
import { Main } from '../containers/main'

export function Home(){
	return (
		<Fragment>
			<Header/>
			<Main />
		</Fragment>
	)
}