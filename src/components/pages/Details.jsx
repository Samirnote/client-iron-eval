import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import {} from 'react-router-dom'

const Details = () => {
	const {id} = useParams();
	const [hero, setHero] = useState();

	useEffect(() => {
		axios
		.get(`https://backend-jury.herokuapp.com/api/heroes/${id}`)
		.then((resp)=>{
			console.log(resp.data);
			setHero(resp.data)
		})
		.catch((er)=>{
			console.error(er)
		})
		
	}, []);

   if (!hero) return (<p>loading....</p>)

	return (
		<div key={hero._id}>
			<h1>Resource's details</h1>
			<p>{hero.name}</p>
			<img src={hero.image?.url} alt={hero.name}/>
			<p>{hero.biography['full-name']}</p>
			<p>{hero.biography['place-of-birth']}</p>			
		</div>
	);
};

export default Details;
