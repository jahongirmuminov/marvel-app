import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actionCreators";
import { Link } from "react-router-dom";
import _ from 'lodash'
import Loading from "./Loading";

import { useDebounce } from '../utils/useDebounce'

import Aos from 'aos'
import 'aos/dist/aos.css';
function Home() {
	const dispatch = useDispatch();
 
	const { data, err } = useSelector((state) => state.users);
    const [text,setText]=useState("")
	const name = useDebounce(text, 1000);
	 
	useEffect(() => {
		dispatch(getUsers({text}));
		Aos.init({ duration: 1500 });
	}, [name]);

	 

	const items = _.get(data,"data.results")
	 
  
	if (err) {
		return <h1 style={{ textAlign: "center" }}>{err}</h1>;
	}
	const onSearch = (query)=>{
		setText(query)
	}
	 
	return (
		<div className="home"> 
			<div className="container">
			 <div className="row">
				   <h1 className="logo text-center" >MARVEL</h1>
				  <input 
				   placeholder="Search..." 
				   onChange={(e)=>onSearch(e.target.value)}
				   value={text}
				   className="input-Text"/>
				  { items===undefined ? <Loading type="bars"/> : items.map((item, index) => {
					   
					 return (
						 <div className="col-md-4"  
						    key={index}>
						 
							<div data-aos="zoom-in" className="card  m-3 bg-dark text-white cardItems">  
 
								 <img className="img-fluid" style={{height:"420px"}}  onError={(e)=>{e.target.onerror = null; e.target.src="https://proprikol.ru/wp-content/uploads/2020/01/kapitan-marvel-kartinki-supergeroya-3.jpg"}}
									 src={item.thumbnail.path+"/portrait_xlarge.jpg"} />
								 <div className="card-body">
									 <h5 className="card-title">{item.name}</h5>
									 
								 </div>
								 <Link   to={`/product/${item.id}`} className="btn-primary room-link" >Features</Link>
							 </div>
							 
						 </div>
					 );
				 })}
			 </div>
		 </div>
		</div>
	);
}

export default Home;
