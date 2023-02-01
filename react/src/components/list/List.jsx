import React from 'react'

const list = () => {
    const data = ["Bangladesh", "Nepal", "Bhutan", "Maldives", "Srilanka"];

    const objectData = [
        {id: 1, name: "Mahmudul Hasam"},
        {id: 2, name: "Kazi Sakib"},
        {id: 3, name: "Azra Sadia"}
    ]

  return (
    <div>
        <div className="countryName">
            {data.map((name, key) => {
                return (
                    <li key={key}>{name}</li>
                )
            })}
        </div>

        <div className="objects">
            {objectData.map((name, key) => {
                return(
                    <ul key={key}>{name.id} {name.name}</ul>
                )
            })}
        </div>
    </div>
  )
}

export default list