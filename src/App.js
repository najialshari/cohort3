import UserProfile from "./components/user/UserProfile";
import LatestPosts from "./components/posts/LatestPosts";
import { useState } from "react";

function App() {

	const [name, setName] = useState('Feras')
	const [surname, setSurname] = useState('Jobeir')
	const [latestPosts, setLatestPosts] = useState([])

	console.log('App component is rendering')
	
	const addNewTitle = () => {
		const newTitle = document.getElementById('new_title').value
		setLatestPosts([...latestPosts, newTitle])
		setName(newTitle)
	}

	return (
		<div className="App">
			This is App component
			<input type='text' id="new_title" />
			<input type='button' value='Add Title' onClick={addNewTitle} />
			<UserProfile name={name} surname={surname} />
			<LatestPosts posts={latestPosts} />
		</div>
	);
}

export default App;
