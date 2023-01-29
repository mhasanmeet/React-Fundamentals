import React from 'react'
import Item from './Item'

const List = ({list}) => {
    if(!list.length){
        return <p>Sorry the list is empty</p>
    }
    else{
        return (
            <ul>
                {list.map(item => (
                    <Item key={item.id} item={item}/>
                ))}
            </ul>
        )
    }
}

export default List