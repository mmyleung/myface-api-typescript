import './CreateUser.scss'
import { useState } from 'react'

export default function CreateUser() {

    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [profileImageUrl, setprofileImageUrl] = useState("")
    const [coverImageUrl, setcoverImageUrl] = useState("")

    const [message, setMessage] = useState("")

    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ((event.target as HTMLFormElement).checkValidity()) {


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
            }).then(response => response.text())
                .then(responseText => {
                    if (responseText === "OK") {
                        setMessage("Your profile has been successfully created")
                    } else {
                        setMessage("There has been issues with your details input")
                    }

                })
        }
    }




    return (
        <div >
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} noValidate className={`user-form-container ${formSubmitted ? "submitted" : ""}`} method="post" action="/users/create">
                <label>
                    Name:
                    <input type="text" name="name" required minLength={2} pattern='[A-Za-z\s-]+' value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <span className="error-message " aria-live="polite">There is an error with your input</span>
                </label>
                <label>
                    Username:
                    <input type="text" name="username" required value={username}
                        onChange={(e) => setUserName(e.target.value)} />
                    <span className="error-message " aria-live="polite">There is an error with your input</span>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <span className="error-message " aria-live="polite">There is an error with your input</span>
                </label>
                <label>
                    ProfileImageUrl:
                    <input type="url" name="profileImageUrl" required value={profileImageUrl}
                        onChange={(e) => setprofileImageUrl(e.target.value)} />
                    <span className="error-message " aria-live="polite">There is an error with your input</span>
                </label>
                <label>
                    CoverImageUrl:
                    <input type="url" name="coverImageUrl" required value={coverImageUrl}
                        onChange={(e) => setcoverImageUrl(e.target.value)} />
                    <span className="error-message " aria-live="polite">There is an error with your input</span>
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}