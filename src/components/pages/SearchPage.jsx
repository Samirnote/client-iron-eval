import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



const SearchPage = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [list, setList] = useState([])

    if (!query) {
        return <p>
       Nothing found
         </p>
    }

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

    
        
        const filtredResult = list.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });
        console.log("filtredResult", filtredResult);
    
    

    return (
    <>
       {filtredResult.map((res)=>{
           return(
        <div key={res._id}>
            <p>{res.name}</p>
			<img src={res.image?.url} alt={res.name}/>
        </div>)
       })}
    </>
    )
};

export default SearchPage;