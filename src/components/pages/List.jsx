import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import apiHandler from './../../api/handler';

const List = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		axios
		.get(`https://backend-jury.herokuapp.com/api/heroes`)
		.then((resp)=>{
			setList(resp.data)
		})
		.catch((er)=>{
			console.error(er)
		})
		
	}, []);

	return (
		<>
			<h1>Let's list, shall we ?</h1>
			<p>This component should display resources you must fetch.</p>
			{list.map((hero)=>{
				return(
					<NavLink to={`/details/${hero._id}`}>{hero.name}</NavLink>
				)
				
			})}
		</>
	);
};

export default List;
