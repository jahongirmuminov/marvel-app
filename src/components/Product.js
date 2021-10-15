 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { api, } from "../api";
import { getOneItems, } from "../redux/actionCreators";
import _ from 'lodash'
import { apikey, hash,ts } from '../contstant/constant'
import Loading from "./Loading";
import Aos from 'aos'
const Product = () => {
	const dispatch=useDispatch()
    const id =useParams()
	const { data} = useSelector((state) => state.users);
    const [serias,setSeries]=useState([])
	useEffect(() => {
		dispatch(getOneItems(id));
		getSeries()
		Aos.init({ duration: 1500 });
	}, []);

   const getSeries= async ()=>{
	   await api()
	   .get(`characters/${id.id}/series`,{
		   params:{
			   apikey,
			   hash,
			   ts
		   }
	   })
	   .then((res) => {
			setSeries(res.data)
	   }).catch((err)=>console.log(err))
   }

 
   const  data1   = _.get(data, "data.results")
   const  seriesItems   = _.get(serias, "data.results")
  
	return (
		<div className="home">
			<div className="container ">
				 { data1 === undefined ? <Loading  type="spinningBubbles"/>:data1.map((item, index) => {
					 
					 return (
						 <div key={index}>
						 <div  className="singleItem"> 
							 <img  src={item.thumbnail.path+"/portrait_xlarge.jpg"}  data-aos="zoom-in-right"/>
							<div data-aos="zoom-in-left">
							<h1>{item.name}</h1>
							 <p>{item.description===""? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled":item.description }</p>
							 <Link to="/" className="btnItem">Back to home</Link>
							</div>
						 </div>
						 <h2 className="text-white">Series</h2>

						 <div className="row allSeries" >
						 {seriesItems===undefined ? null: seriesItems.map((series,index)=>{
							 return(
							<div className="col-md-3  cardMain  my-3"  data-aos="zoom-in-right" key={index}>
								<div className="cardInner">
									<div className="card front">
								  		<img className="img-fluid"  src={series.thumbnail.path + "/portrait_xlarge.jpg"} />
								 		<h6 className="text-black text-center">{series.title}</h6>
							 		 </div>
									  <div className="card back"  >
									  <h6 className="text-black text-center">{series.title}</h6>
									  <p>{series.description==null?"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled":series.description}</p>
									  <strong>Start year:	{series.startYear}</strong>
									  <strong>End Year:	{series.endYear}</strong>
							 		 </div>
								</div>
							    
							</div>
					 )
					})}
					</div>
						 </div>
						  
					 );
					}) }
					
			 </div>
		 </div>
	 
	);
};

export default Product;
