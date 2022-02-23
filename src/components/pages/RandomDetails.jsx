
import axios from "axios";
import React, { useEffect, useState } from "react";
//import apiHandler from "./../../api/handler";

const RandomDetails = () => {
	const [element, setElement] = useState(null);
	useEffect(() => {
		console.log("ding dong");
		axios
		.get("https://backend-jury.herokuapp.com/api/hero/random")
		.then((resp)=>{
			console.log(resp)
			setElement(resp.data)
		})
		.catch((err)=>{
			console.log(err)
		})
	}, []);

	if(!element){return(<p>loading...</p>)}

	return (
		<>
			<h1>Resource's details</h1>
			<p>
				Here you should display some informations about the element you fetched
			</p>
			<p>{element.name}</p>
			<img src={element.image?.url} alt={element.name}/>
			<p>{element.biography['full-name']}</p>
			<p>{element.biography['place-of-birth']}</p>	
			
		</>
	);
};

export default RandomDetails;
