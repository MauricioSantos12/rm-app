import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'feather-icons-react/build/IconComponents';
import './characters.scss'

const Characters = () => {

  const [characters, setCharacters] = useState([])
  const [pagination, setPagination] = useState(1)

  return (
    <section className='general--container'>
      <div className='characters--container'>
      {
        characters.map(character => {
          return(
            <div className="character--conteiner" key={character.id}>
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
            </div>
          )
        })
      }
      </div>
      <div className='pagination'>
        <div className='icon--container'>
          <ArrowLeft className='left' onClick={()=> null} />
        </div>
        <p>{pagination}</p>
        <div className='icon--container'>
          <ArrowRight className='right' onClick={()=> null} />
        </div>
      </div>
    </section>

  )
}

export default Characters