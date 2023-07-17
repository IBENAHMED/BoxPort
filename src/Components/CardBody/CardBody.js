import React from 'react'

const Card = (props) => {
    return (
        <ul className='Body_Cards_list'>
            <li className='Body_Cards_list_icon'>{props.icon}</li>
            <li className='Body_Cards_list_titre'> <h2>{props.titre}</h2> </li>
            <li className='Body_Cards_list_text'>{props.text}</li>
        </ul>
    )
}

export default Card