import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
	const helloData = [
		{ name: 'Jack', message: 'Hi there' },
		{ name: 'Jordan', message: 'Hello world...' }
	]

	return (
		<div className='App'>
			<Counter />
			{ helloData.map((data, index) => (
				<Hello key={index} name={data.name} message={data.message} />
			))}

			<Contact email="s6506021621047@email.kmutnb.ac.th" phone="092-812-4137" />
		</div>
	)
}

export default App