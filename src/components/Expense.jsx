import React from 'react'

function Expense(props) {

	return (
		<div className='container flex justify-between items-center border-blue bg-light-gray px-6 py-4 my-3 rounded-lg transition-all hover:scale-105'>
			<h4>{props.text}</h4>
			<section className='flex justify-evenly items-center'>
				<p className='font-bold'>{props.amount}</p>
			</section>
		</div>
	)
}

export default Expense