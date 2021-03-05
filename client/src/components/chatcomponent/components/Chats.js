import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client' 
let socket
 function Chats({location}) {
     const [name,setName]=useState('')
     const [room,setRoom]=useState('')
     const EndPoint="localhost:7000"
     useEffect(()=>{
         const {name,room}=queryString.parse(location.search)
         socket=io(EndPoint)
         setName(name)
         setRoom(room)

     },[EndPoint,location.search])
    return (
        <div>
            <h2>chats</h2>
        </div>
    )
}
export default Chats