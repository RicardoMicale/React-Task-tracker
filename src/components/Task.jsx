import React from 'react'
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react'

function Task(props) {
	const [done, setDone] = useState(props.done)

	return (
		<div className='container w-4/12 flex justify-between items-center border-blue bg-light-gray px-6 py-4 my-3 rounded-lg '>
			<h4>{props.text}</h4>
			<section className='flex justify-evenly items-center'>
				<CheckIcon onClick={() => setDone(!done)} className={`h-6 w-6 mx-2 cursor-pointer ${done ? 'text-green' : 'text-gray'}`} />
				<XIcon className='h-6 w-6 mx-2 text-red cursor-pointer' />
			</section>
		</div>
	)
}

export default Task