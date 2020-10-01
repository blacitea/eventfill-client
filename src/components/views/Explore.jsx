import React, { useEffect, useState } from 'react';
import PreviewsList from '../PreviewsList';
import { useParams, Link } from 'react-router-dom';
import './Explore.scss';

// mock data
import { talents, events, locations, genres } from '../mockData';

const Explore = props => {
  let { id } = useParams();
  const [collection, setCollection] = useState([]);
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    // axios call to get relevant filtered list of events/profiles here
    // set the results of call to collection to have it displayed in previewlist

    // simulating results of api call below
    console.log(`location: ${location || null}, genre ${genre || null}`);

    let newCollection = id === "events" ? events : talents;
    newCollection = newCollection
      .filter(item => (!location || item.location === location) && (!genre || item.genre === genre));
    
    console.log(newCollection);
    setCollection(newCollection);

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
            onChange={(event) => setLocation(parseInt(event.target.value))}
          >
            <option value="" >
              All Locations
            </option>
            {locations &&
              locations.map(location => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
          </select>
          <select 
            className='location-select' 
            defaultValue="" 
            onChange={(event) => setGenre(parseInt(event.target.value))}
          >
            <option value="" >
              All Genres
            </option>
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
