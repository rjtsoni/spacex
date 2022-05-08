import React,{useState,useEffect} from 'react'
import axios from './axios'
import './Space.css'
import Sidebar from './Sidebar'

function Space(props) {

	const [space,setSpace] = useState([]);

	useEffect(() => {
		getSpace();
		// console.log("rajat",space.static_fire_date_utc)
	}, []);
	
	const getSpace = async () => {
			axios.get(props.endPoint)
				.then((res) => {
					setSpace(res.data)
				})
		}
	const setNewData = (newData) => {
		const empty = [];
		if (newData.length > 0) {
			setSpace(empty);
			setSpace(newData);
		} else if (newData.length === 0) {
			alert("No Data Found");
		} else {
			alert("Somethinbg Went Wrong");
		}
		
	}

	return (

		<>
		<div className = "space">
		
			<div className="main">
			<Sidebar 
				getYearlyData={(value)=> setNewData(value)}
			/>
			
				<div className= "photos">
				{
					space.map((space) => {

						console.log(space)
						 return (
						 	<>
						 	<div className= "card">
						 		<div className="image">
						 			<img className = "space_poster" src={space.links.mission_patch_small} alt=""/>
						 		</div>
						 		<div className ="launch">
						 			
						 			<p>Mission Name:- {space.mission_name}</p>
						 			<p>Launching Year:-  {space.launch_year}</p>
						 			<p>Successful Launch:- {space &&  space.launch_success && space.launch_success ===true ? 'True':'False'}</p>						 			
						 			<p>Rocket Name:- {space && space.rocket && space.rocket.rocket_name}</p>
						 			
						 			
						 		</div>
						 	</div>
						 </>
						 )
					})
				}
				<div className = "photos">
				 {
				// space.map((space) => {
				// 	console.log(space)
				
				// 	})
				// }
			}
				</div>
					
				</div>
			</div>
		</div>
		</>
	)
}

export default Space