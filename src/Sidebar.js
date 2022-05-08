import React,{useState,useEffect} from 'react'
import axios from './axios'
import  requests  from'./Request'
import './Sidebar.css'
import {Link} from 'react-router-dom'
const baseURL= 'https://api.spacexdata.com/v3/launches?'

function Sidebar(props) {

		const [year, setYear]= useState([]);
		const [active, setActive] = useState(false);
		useEffect(() => {
		const getYear = async () => {
			axios.get(props.endPoint)
			.then((res) => {setYear(res.data)})

		}	
		getYear();
	},[]);
		// console.log(year)
const onYearSelected = (year) => {
	const url = baseURL + `limit=100&launch_year=${year}`
	setActive(false);
	axios.get(url).then((response) => {
		if (response && response.status === 200) {
			props.getYearlyData(response && response.data)
		} else {
			alert('something went wrong please try again later')
		}
			
	})
}
const onSeletcLaunch = (bool) => {
	let boolean = bool === 'sucess' ? true : false
	const url = baseURL + `limit=100&launch_success=${boolean}`
	setActive(false);
	axios.get(url).then((response) => {
		if (response && response.status === 200) {
			props.getYearlyData(response && response.data)
		} else {
			alert('something went wrong please try again later')
		}
	})
}
const onSeletcLanding = (bool) => {
	let boolean = bool === 'sucess' ? true : false
	const url = baseURL + `limit=100&launch_success=true&land_success=${boolean}`
	setActive(false);
	axios.get(url).then((response) => {
		if (response && response.status === 200) {
			props.getYearlyData(response && response.data)
		} else {
			alert('something went wrong please try again later')
		}
	})
}

	return (
		<div  className = "details">
		<h1>SpaceX Launch Programe</h1>
		  <h2>Filter</h2>
		  <h4><span>Launch Year</span></h4>
			<div className="list">
			    <div className = "list_first">
				
				  <ul>
						<li className={active ? active : ''} onClick={() => {onYearSelected(2006)}}><Link to="/2006">2006</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2008) }} ><Link to="/2008">2008</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2010) }} ><Link to="/2010">2010</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2012) }}><Link to="/2012">2012</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2014) }}><Link to="/2014">2014</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2016) }}><Link to="/2016">2016</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2018) }}><Link to="/2006">2018</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2020) }}><Link to="/2020">2020</Link></li>
					</ul>
					
				</div>	
				<div className = "list_second">
				  <ul>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2007) }}><Link to="/2007">2007</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2009) }}><Link to="/2009">2009</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2011) }}><Link to="/2011">2011</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2013) }}><Link to="/2013">2013</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2015) }}><Link to="/2015">2015</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2017) }}><Link to="/2017">2017</Link></li>
						<li className={active ? active : ''} onClick={() => { onYearSelected(2019) }}><Link to="/2019">2019</Link></li>
					</ul>
				</div>	
			</div>
			<div className="Sidebar_bottom">
			<h4>Successful Launch</h4>
			<div className="top">
				<ul>
					<li className={active ? 'active' : ''} onClick={() => { onSeletcLaunch('sucess')}} href="">True</li>
					<li className={active ? 'active' : ''} onClick={() => { onSeletcLaunch('fail')}} href="">False</li>
				</ul>
			</div>
			<h4>Successful Landing</h4>
			<div className="bottom">
				<ul>
					<li className={active ? 'active' : ''} onClick={() => { onSeletcLanding('sucess')}} href="">True</li>
					<li className={active ? 'active' : ''} onClick={() => { onSeletcLanding('fail')}} href="">False</li>
				</ul>
			</div>
			</div>		
		</div>
	)
}

export default Sidebar