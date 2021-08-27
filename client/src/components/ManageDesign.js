import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ManageDesign = (props) => {
    const [designList, setDesignList] = useState([]);

	useEffect(() => {
        console.log("designList" + designList);
		// axios.get("http://localhost:8000/api/Design/byUserId")
        axios.get(`http://localhost:8000/api/Design/${props.userID}`)
			.then((res) => {
                console.log(res.data);
				console.log(res);
				setDesignList(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	return (
        <div className="component-container">
			<table>
				<thead>
					<tr>
						<th>Design ID</th>							
                        <th>Category</th>
                        <th>Gender</th>
                        <th>Season</th>
                        <th>Dress Code</th>
                        <th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					{
						designList.map((design, index) => {					
						console.log("Meltem, design id is here = " + design._id);

						return (
							<tr key={index}>
								<td>{design._id}</td>
								<td>{design.category}</td>
                                <td>{design.gender}</td>
								<td>{design.season}</td>
                                <td>{design.dressCode}</td>
                                <td>{design.createdAt}</td>
							</tr>
						)})
					}
					</tbody>
					<tfoot />
				</table>
			</div>	
    )
}

export default ManageDesign;