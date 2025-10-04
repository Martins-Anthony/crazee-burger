import { useState } from "react"

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("") 
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(event.target[0].value)
    alert("Bonjour " + inputValue)
    setInputValue("")
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder="Entrez votre prénom..." required value={inputValue} onChange={handleChange}/>
        <button type="submit">Accédez à votre espace</button>
      </form>
    </>
  )
}
