import React from 'react'

function Form() {
	function addExpense(e) {
		e.preventDefault()
		console.log('expense added')
	}

	return (
		<form onSubmit={e => { addExpense(e) }}
			className="w-2/5 flex flex-col justify-around items-start px-8 py-8 bg-light-gray rounded-lg"
		>
			<h3 className='font-bold text-gray mb-4'>Add an expense:</h3>
			<label htmlFor="expense" className='text-sm mb-2'>Description of the expense</label>
			<input type="text" name="expense" id="expense" placeholder='Expense description'
				className='w-full border border-gray border-opacity-30 rounded px-4 py-px mb-6 text-lg'
			/>
			<label htmlFor="amount" className='text-sm mb-2'>Amount of the expense</label>
			<input type="number" step="0.01" placeholder='Amount of expense...' name='amount' id='amount'
				className='w-full border border-gray border-opacity-30 rounded px-4 py-px mb-6 text-lg'
			/>
			<input type="submit" value="Save expense"
				className='cursor-pointer bg-blue px-6 py-2 font-bold text-white rounded-full mb-4'
			/>
		</form>
	)
}

export default Form