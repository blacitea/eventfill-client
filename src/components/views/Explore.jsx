import React, { useEffect, useState } from 'react';
import PreviewsList from '../PreviewsList';
import { useParams, Link } from 'react-router-dom';
import './Explore.scss';

// mock data
// import { talents, events } from '../mockData';

// real data
import axios from 'axios';

const Explore = ({ locations, genres }) => {
	let { id } = useParams();
	const [collection, setCollection] = useState([]);
	const [location, setLocation] = useState('');
	const [genre, setGenre] = useState('');

	useEffect(() => {
		// console.log('I am the newest version!!!!!');
		// axios call to get relevant filtered list of events/profiles here
		// set the results of call to collection to have it displayed in previewlist
		// console.log('Use effect happens');
		// simulating results of api call below
		let axiosURL = `/api/${id === 'events' ? 'events' : 'talent_profiles'}`;
		// console.log('printing axios link:', axiosURL);

		let newCollection;
		axios.get(axiosURL).then(response => {
			let dataArray = response.data;
			if (id === 'events') {
				dataArray = dataArray.all;
			}
			console.log('Data Array:', dataArray);
			newCollection = dataArray.filter(
				item =>
					(!location || item.location_id === location) &&
					(!genre || item.genre_id === genre)
			);
			console.log('New Collection:', newCollection);
			setCollection(newCollection);
		});

		// console.log(`location: ${location || null}, genre ${genre || null}`);

		// let newCollection = id === 'events' ? events : talents;
		// newCollection = newCollection.filter(
		// 	item =>
		// 		(!location || item.location === location) &&
		// 		(!genre || item.genre === genre)
		// );

		// console.log(newCollection);
		// setCollection(newCollection);
	}, [location, genre, id]);

	return (
		<main className="explore">
			<header>
				<h1 className="title">
					{id === 'events' ? 'Explore Events' : 'Explore Talents'}
				</h1>
				<section className="nav">
					<select
						className="location-select"
						defaultValue=""
						onChange={event => setLocation(parseInt(event.target.value))}
					>
						<option value="">All Locations</option>
						{locations &&
							locations.map(location => (
								<option key={location.id} value={location.id}>
									{location.name}
								</option>
							))}
					</select>
					<select
						className="location-select"
						defaultValue=""
						onChange={event => setGenre(parseInt(event.target.value))}
					>
						<option value="">All Genres</option>
						{genres &&
							genres.map(genre => (
								<option key={genre.id} value={genre.id}>
									{genre.name}
								</option>
							))}
					</select>
					<Link
						to={`/create/${id === 'events' ? 'event' : 'talent'}`}
						className="create-button"
					>
						<button>Add Your Own!</button>
					</Link>
				</section>
			</header>
			<hr />
			<PreviewsList array={collection} resource={id} />
		</main>
	);
};

export default Explore;
