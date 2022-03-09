
import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    cpassword: "",
    sub: true
  }) 

  function handleFormData(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      console.log(prevFormData)
      return{
        ...prevFormData,
        [name]  : type === "checkbox" ? checked : value
        // [event.target.name]: event.target.value
      }})
  }
  
  function handleSubmit(event){
    event.preventDefault();
    if(formData.password === formData.cpassword){
      console.log("account created successfully");
    }
    else{
      console.log("error in creating users account");
      return
    }

    if(formData.checked){
      console.log("news letter substriction successful")
    }

  }

  return (
    <div className="body">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="email address" value={formData.email} className="input" onChange={handleFormData} /><br />
          <input type="password" name="password" placeholder="input password" className="input" value={formData.password}  onChange={handleFormData} /><br />
          <input type="password" name="cpassword" placeholder="confirm password" value={formData.cpassword} className="input" onChange={handleFormData} /><br />
          <input type="checkbox" checked={formData.sub} name="sub" id="sub" onChange={handleFormData}/>
          <label> I want to join the newsletter</label>
           <br /> <br />
          <button className="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
