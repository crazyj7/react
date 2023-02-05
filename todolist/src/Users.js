
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Users() {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		try {
			setError(null) ;
			setUsers(null) ;
			setLoading(true) ;
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (e) {
			setError(e) ;
		}
		setLoading(false) ;
	} ;

	useEffect( ()=> {
		fetchUsers() ;
	} , []) ;

	if (loading) return <div> 로딩 중.... </div>;
	if (error) return <div> 서버 에러 </div>;
	if ( !users) return <div> 데이터가 없습니다. </div>;

	return (
		<>
			<button onClick={fetchUsers}>다시 불러오기</button>
			<ul>
				{users.map( user => (
					<li key={user.id}>
						{user.username} ( {user.email} )
					</li>
				))}
			</ul>
		</>
	)

}

export default Users ;
