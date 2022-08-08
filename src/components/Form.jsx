import React from 'react'
import { useState } from 'react'

function Form(props) {

	let list = props.list

	const [expense, setExpense] = useState(0)
	const [expenseDescription, setExpenseDescription] = useState('')

	function addAmount(event) {
		setExpense(event.target.value)
	}

	function addDescription(event) {
		setExpenseDescription(event.target.value)
	}

	function addExpense(e) {
		e.preventDefault()

		if (expense <= 0) {
			//Returns function before sending an invalid expense amount
			alert('Expenses have to be higher than 0. Please enter a correct amount.')
			return
		}

		if (expenseDescription.trim() === '') {
			//Returns the function before sending an invalid description message
			return alert('Please add a valid description for this expense.')
		}

		const id = list[list.length - 1].id + 1
		const newExpense = {
			text: expenseDescription,
			id: id,
			amount: expense
		}

		list.push(newExpense)

		props.updateList(list)

		setExpense(0)
		setExpenseDescription('')

		console.log(props.list)
	}

	return (
		<form onSubmit={e => { addExpense(e) }}
			className="w-2/5 flex flex-col justify-around items-start px-8 py-8 bg-light-gray rounded-lg"
		>
			<h3 className='font-bold text-gray mb-4'>Add an expense:</h3>
			<label htmlFor="expense" className='text-sm mb-2'>Description of the expense</label>
			<input type="text" name="expense" id="expense" placeholder='Expense description'
				value={expenseDescription} onChange={addDescription}
				className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-6 text-base'
			/>
			<label htmlFor="amount" className='text-sm mb-2'>Amount of the expense</label>
			<input type="number" step="0.01" placeholder='Amount of expense...' name='amount' id='amount'
				value={expense} onChange={addAmount}
				className='w-full border border-gray border-opacity-30 rounded px-4 py-2 mb-6 text-base'
			/>
			<input type="submit" value="Save expense"
				className='cursor-pointer bg-blue px-6 py-2 font-bold text-white rounded-full mb-4 transition-all hover:bg-dark-blue'
			/>
		</form>
	)
}

export default Form