import Header from './components/Header'
import Expenses from './components/Expenses'
import Form from './components/Form'
import { useState } from 'react'

const expenseList = [
	{
		text: 'Do laundry',
		id: 1,
		amount: 2.99
	},
	{
		text: 'Do homework',
		id: 2,
		amount: 4.99
	},
	{
		text: 'Grocery shopping',
		id: 3,
		amount: 5.99
	},
]

function App() {

	const [list, setList] = useState(expenseList)

	return (
		<div className="App px-20">
			<Header />
			<section className='container flex items-start justify-start mt-8'>
				<Expenses list={list} />
				<Form list={list} updateList={(newList) => setList(newList)} />
			</section>
		</div >
	);
}

export default App;
