import React, { useState } from 'react'

const Tour = (props) => {
    const { id, image, info, price, name } = props
    const [readMore, setReadMore] = useState(false)
    const [text, setText] = useState('Read more')

    const handleReadMore = () => {
        setReadMore(true)
        setText('Show less')
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                {/* make modifications here */}
                <p>
                    {!readMore ? info.slice(0, 200) : info}
                    <button onClick={handleReadMore}>{text}</button>
                </p>
                <button className="delete-btn" onClick={() => props.removeTour(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour
