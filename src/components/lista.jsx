import React, { Fragment } from 'react'

export function Lista ({genero = 'Buscado', data}){
	return (
		<Fragment>
			<h1 className='titleGenero'>{genero.name}</h1>
			<ul className='list-generos'>
				{
					data.map(item => (
						<li className='genero' key={item.id}>
							<a onClick={() => { localStorage(item.id) }} href="/movie"><img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" /></a>
							<p>{item.title}</p>
						</li>
					))
				}
			</ul>
		</Fragment>
	)
}