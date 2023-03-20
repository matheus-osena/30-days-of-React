import React from 'react'

const List = (props) => {
    const paises = props.tenHighestPopulation.map((pais) => {
        return(
            <li>{pais.country}<div className='algumaCOisa'></div>{pais.population}</li>
        )})
    
  return (
    <div>
      {paises}
    </div>
  )
}

export default List
