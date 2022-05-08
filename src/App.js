import React from 'react'
import axios from './axios'
import requests from './Request'
import Space from './Space'

function App() {
	 
	return (
		<>
		<div>
			{
				<Space 
				title = "spaceX Launch Programe" 
				endPoint= {requests.fetchMain} /> 
				
			}
			
		</div>
		</>
	)
}

export default App