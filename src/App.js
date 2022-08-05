import Header from './components/Header'
import Expenses from './components/Expenses'
import Form from './components/Form'

function App() {
	return (
		<div className="App px-20">
			<Header />
			<section className='container flex items-start justify-start mt-8'>
				<Expenses />
				<Form />
			</section>
		</div >
	);
}

export default App;
