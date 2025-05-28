
import './App.css'

function App() {

  const handleAddUser=(e)=>{
    e.preventDefault();
    const from=e.target;
    const name=from.name.value;
    const email=from.email.value;
    const user={name,email}
    console.log(user)
  }

  return (
    <>
      
      <h1>Recap Clint side server</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="add User" />
      </form>
      
    </>
  )
}

export default App
