import React from 'react'
import List from './List'
import {users} from "./userData";

const condRend = () => {
  return (
    <div>
        <h1>Hello Conditional Rendering</h1>
        <List list={users}/>
    </div>
  )
}

export default condRend