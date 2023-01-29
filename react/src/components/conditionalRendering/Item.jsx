import React from 'react'

const Item = ({item}) => {
  return (
    <li>
        {item.firstName} {item.lastName}
    </li>
  )
}

export default Item