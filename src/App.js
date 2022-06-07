import UserProfile from "./components/user/UserProfile";
import LatestPosts from "./components/posts/LatestPosts";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";

function App() {

	const [name, setName] = useState('Feras')
	const [surname, setSurname] = useState('Jobeir')
	const [latestPosts, setLatestPosts] = useState([])

	// CASE 1
	useEffect(() => {
		console.log('running on every render - inside useEffect')
		// runs on every render
		// render: a state or a prop has been updated
	})

	// CASE 2
	useEffect(() => {
		console.log('run on first render')
		// suitable to bring data from server
		fetch('https://www.wp-course.site/wp-json/youthink/posts')
			.then((response) => {
				response.json()
					.then((posts) => {
						setLatestPosts(posts.data)
					})
					.catch((e) => {
						console.log('Error in getting json')
					})
			})
			.catch((error) => {
				console.log('Inside error', error)
			})
	}, [])

	// CASE 3
	useEffect(() => {
		console.log('surname has been updated')
	}, [surname])
	
	// CASE 4
	useEffect(() => {
		console.log('name or surname has been updated')
	}, [name, surname])

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
