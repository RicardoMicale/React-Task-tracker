import React from 'react'

function Button(props) {
	return (
		<button className='px-6 py-1 rounded-full text-white font-bold bg-blue transition-all hover:bg-dark-blue'>{props.text}</button>
	)
}

export default Button