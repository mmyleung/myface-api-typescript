import './CreateUser.scss'
import {useState} from 'react'

export default function CreateUser(){

    const [name, setName]=useState("")
    const [username, setUserName]=useState("")
    const [email, setEmail]=useState("")
    const [profileImageUrl, setprofileImageUr]=useState("")
    const [coverImageUrl, setcoverImageUrl]=useState("")

    const handleSubmit = (event:any) => {
        event.preventDefault();
        fetch(`http://localhost:3001/users/create`, {
            method: "post",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          
            //make sure to serialize your JSON body
            body: JSON.stringify({
              name,
              username,
              email,
              profileImageUrl,
              coverImageUrl
            })
        }).then(response => console.log(response.text()))
       
      }
    
  

    return(
        <div >
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}  className="user-form-container" method="post" action="/users/create">
        <label>
            Name:
            <input type="text" name="name" required value={name}
          onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
            Username:
            <input type="text" name="username" required  value={username}
          onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label>
            Email:
            <input type="email" name="email" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
            ProfileImageUrl:
            <input type="text" name="profileImageUrl" required  value={profileImageUrl}
          onChange={(e) => setprofileImageUr(e.target.value)}/>
        </label>
        <label>
            CoverImageUrl:
            <input type="text" name="coverImageUrl" required  value={coverImageUrl}
          onChange={(e) => setcoverImageUrl(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
        </div>
    )
}