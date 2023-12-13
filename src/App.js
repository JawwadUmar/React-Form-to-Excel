import { useState } from 'react';
import axios from 'axios';


function App() {

  //form states
  const [name, setName]=useState('');
  const [age, setAge]=useState('');
  const [designation, setDesignation]=useState('');
  const [salary, setSalary]=useState('');

  //submit event
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(age, name, salary, designation);

    const data ={
      Name: name,
      Age: age,
      Designation: designation,
      Salary: salary
    }

    axios.post('https://sheet.best/api/sheets/8226431e-80d7-49a9-8375-cff8512e8733', data)
    .then((response)=>{
      console.log(response);
      setName('');  
      setAge('');
      setSalary('');
      setDesignation('');
    })

  }


  return (

   <div className='container'>
    <br></br>
    <h1>Save form data in Google sheets</h1>
    <br></br>

    <form autoComplete='off' className='form-group' onSubmit={handleSubmit}>
    <label>Name</label>
        <input type='text' className='form-control' required
          placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}
          value={name}/>
    
    <br></br>
    <label>Age</label>
        <input type='text' className='form-control' required
          placeholder="Enter your age" onChange={(e)=>setAge(e.target.value)}
          value={age}/>
    
    <br></br>
    <label>Designation</label>
        <input type='text' className='form-control' required
          placeholder="Enter your designation" onChange={(e)=>setDesignation(e.target.value)}
          value={designation}/>
    
    <br></br>
    <label>Salary</label>
        <input type='text' className='form-control' required
          placeholder="Enter your salary" onChange={(e)=>setSalary(e.target.value)}
          value={salary}/>
    
    <br></br>

    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </div>


    </form>
   </div>
  );
}

export default App;
