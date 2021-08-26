import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [hobbies, sethobbies] = useState("");
  const [quali, setquali] = useState("");
  const[show, setshow] = useState(false);
  const[show1, setshow1] = useState(false);
  const[show2, setshow2] = useState(false);
  // const[data, setdata] = useState([{
  //   Name: fname,
  //   LastName:lname,
  //   hobbies: hobbies,
  //   qualification: quali
  // }
  // ])

  // const newdata = {
  //   Name: {fname},
  //   LastName:{lname},
  //   hobbies: {hobbies},
  //   qualification: {quali} 
  // }

  // setdata([...data,newdata])

  function handleFname(e) {
    setfname(e.target.value);
  }

  function handleLname(e) {
    setlname(e.target.value)
  }
  function handleHobbies(e) {
    sethobbies(e.target.value);
  }
  function qualifi(e) {
    setquali(e.target.value);
  }
  function handleshow(e){
    e.preventDefault()
    setshow(true);

  }
  function handleshowsec(e){
    e.preventDefault()
    setshow1(true);

  }
  function handleshowlast(e){
    e.preventDefault()
    setshow2(true);

  }

  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleshow}>
          <div className="mb-3">
            <label htmlFor="FirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="FirstName" value={fname} onChange={handleFname} />
          </div>
          <div className="mb-3">
            <label htmlFor="LastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" value={lname} id="LastName" onChange={handleLname} />
          </div>
          {/* <button type="button" className="btn btn-primary" onClick={()=>setshow(!show)}>Next</button> */}
          <button type="submit" className="btn btn-primary">Next</button>
        </form>
{show?<div className="container">
        <form onSubmit={handleshowsec}>
          <span className="input-group-text my-3">Hobbies</span>
          <div className="input-group">
            <textarea className="form-control" rows="4" onChange={handleHobbies} value={hobbies}></textarea>
          </div>
          {/* <button type="button" className="btn btn-primary my-3" onClick={()=>setshow1(!show1)}>Next</button> */}
          <button type="submit" className="btn btn-primary my-3">Next</button>
        </form>
      </div>: null}

{show1?<div className="container">
        <form onSubmit={handleshowlast}>
          <div className="mb-3">
            <label htmlFor="qualification" className="form-label">Qualifications:</label>
            <input type="text" className="form-control" id="qualification" value={quali} onChange={qualifi} />
          </div>
          {/* <button type="button" className="btn btn-primary" onClick={()=>setshow2(!show2)}>Submit</button> */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>:null}

{show2?<div className="container my-3">
        <div>
          Name: {fname}
        </div>
        Last Name: {lname}
        <div>

        </div>
        <div>
          Hobbies: {hobbies}

        </div>
        <div>
          Qualifications: {quali}

        </div>
      </div>:null}

      {/* {data} */}
      {/* </form> */}
      </div>
    </>

  );
}

// Form.defaultProps = {
//   show: false,
//   show1: false,
//   show2: false
// }