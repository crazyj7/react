import { useAsync } from "react-async"


// You can use async/await or any function that returns a Promise
const loadUser = async ({ playerId }, { signal }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${playerId}`, { signal })
	if (!res.ok) throw new Error(res.statusText)
	return res.json()
  }
  
const Player = () => {
	const { data, error, isPending } = useAsync({ promiseFn: loadUser, playerId: 1 })
	if (isPending) return "Loading..."
	if (error) return `Something went wrong: ${error.message}`
	if (data)
		return (
		<div>
			<strong>Player data:</strong>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
		)
	return null
}

export default Player ;
