import React, { useEffect, useRef, useState } from 'react';
import './jumbotron.modules.css';
import placeholder from '../../assets/placeholder.png';
import Loader from '../Loader/loader';

const ExtUserJumboTron = () => {
	const user = JSON.parse(localStorage.getItem('userDetails') || '{}');

	const [viewProof, setViewProof] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			// Simulating API call with setTimeout
	// 			// Replace this with your actual API call
	// 			await new Promise((resolve) => setTimeout(resolve, 2000));
	// 			setIsLoading(false);
	// 		} catch (error) {
	// 			console.error('Error fetching user data:', error);
	// 			setIsLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	useEffect(() => {
        if (user.fname === undefined || user.fname === null || user.fname === '') {
            window.location.reload();
        }
    }, [user.facname]);

	const statusMapping = {
		A: 'Active',
		I: 'Inactive',
		D: 'Deleted',
	};

	const createRefWithValue = (value) => useRef(value || '');

	const refs = {
		statusRef: createRefWithValue(statusMapping[user.status]),
		uidRef: createRefWithValue(user.uid),
		fnameRef: createRefWithValue(user.fname),
		regnoRef: createRefWithValue(user.regno),
		inameRef: createRefWithValue(user.iname),
		doeRef: createRefWithValue(user.doe),
		emailRef: createRefWithValue(user.email),
		phoneRef: createRefWithValue(user.phone),
		dexpRef: createRefWithValue(user.dexp),
		remarksRef: createRefWithValue(user.remarks)

	};

	useEffect(() => {
		Object.keys(refs).forEach((key) => {
			refs[key].current =
				key === 'statusRef'
					? statusMapping[user.status] || ''
					: user[key.slice(0, -3).toLowerCase()] || '';
		});
	}, [user, refs]);

	const jumbotronContent = (
		<div className="jumbotron">
			<div className="jumbotron-title">
				<h1>User Dashboard</h1>
			</div>
			<div className="user-details">
				{Object.keys(refs).map((key) => (
					<p key={key}>
						<b>{key.charAt(0).toUpperCase() + key.slice(1, -3)}</b>: {refs[key].current}
					</p>
				))}
			</div>

			<div className="proofViewer">
				<button className="proofButton" onClick={() => setViewProof(!viewProof)}>
					{viewProof ? 'Close' : 'View'} Proof
				</button>
				{viewProof && <img className="proofImage active" src={placeholder} alt="Proof Placeholder" />}
			</div>
		</div>
	);

	const loadingScreen = (
		
		<div className="loading-screen">
			<div className="jumbotron">
				<div className="jumbotron-title">
					<h1>Loading...</h1>
				</div>
				<div className="loader">
					{/* <Loader /> */}
				</div>
				<div className="loading-details">
					{/* You can add additional loading details if needed */}
				</div>
			</div>
		</div>
	);

	return isLoading ? loadingScreen : jumbotronContent;
};

export default ExtUserJumboTron;
