import React from 'react'
import Tour from './Tour'

const Tours = ({tours, removeTour}) => {
	// take out tours from props
    
	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
            {tours.map((tour) => {
                return <Tour id={tour.id} name={tour.name} image={tour.image} info={tour.info} price={tour.price} removeTour={removeTour}/>
            })}
			</div>
		</section>
	)
}

export default Tours
