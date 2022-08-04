import React from 'react'
import Button from './Button'

function Header() {
	return (
		<header className='container flex items-center justify-between px-4 pt-4 pb-2'>
			<h3 className='font-bold mr-4 text-gray'>Task Tracker</h3>
			<Button text="Log in" />
		</header>
	)
}

export default Header