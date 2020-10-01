import React, { useEffect, useState } from 'react';
import PreviewsList from '../PreviewsList';
import { useParams, Link } from 'react-router-dom';
import './Explore.scss';

const Explore = props => {
  let { id } = useParams();
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    console.log(`location: ${location || null}, genre ${genre || null}`);
    // axios call to get relevant filtered list of events/profiles here
  }, [location, genre])


	return (
		<main className="explore">
			<header>
				<h1 className="title">
					{id === 'events' ? 'Explore Events' : 'Explore Talents'}
				</h1>
				<section className="nav">
          <select 
            className='location-select' 
            defaultValue="" 
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="" disabled >
              Location
            </option>
            <option value="location-test">
              TEST
            </option>
          </select>
          <select 
            className='location-select' 
            defaultValue="" 
            onChange={(event) => setGenre(event.target.value)}
          >
            <option value="" disabled >
              Genre
            </option>
            <option value="genre-test">
              TEST
            </option>
          </select>
					<Link
						to={`/create/${id === 'events' ? 'event' : 'talent'}`}
						className="create-button"
					>
						<button>Create</button>
					</Link>
				</section>
			</header>
			<hr />
			{id === 'events' && (
				<PreviewsList array={props.events} resource="events" />
			)}
			{id === 'talents' && (
				<PreviewsList array={props.talents} resource="talents" />
			)}
		</main>
	);
};

export default Explore;
