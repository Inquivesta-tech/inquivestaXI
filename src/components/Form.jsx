import React, { useEffect } from 'react'


const dropdown = (label, naam, opts, handleOnChange) => {
  return (
    <>
      <label htmlFor={naam}>{label}</label>
      <select className="dropdown" name={naam} id={naam} required onChange={(e) => {handleOnChange( e.target.id, e.target.value)}}>
        {opts.map((e) => (<option value={e.value ? e.value : e}>{e.label ? e.label : (e === "" ? "Please Select an Option" : e)}</option>))}
      </select>
    </>)
};

const textarea = (label, naam, pH) => {
  return (
    <>
      <label htmlFor='placeholder'>{label}</label>
      <textarea name={naam} placeholder={pH} className='text-input' required></textarea>
    </>)
};

const information = (label, naam, pH) => {
  return (
      <label className='info'>{label}</label>
  )
};


const radio = (label, name, options, handleOnChange) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div className="radio">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={option}
              onChange={() => {handleOnChange(name, option)}}
              required
            />
            <label htmlFor={`${name}-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
};

const Form = ( {eventForm, rendering} ) => {

  const formFields = {
    name: [<label htmlFor="name">Name</label>, <input type="text" name="name" placeholder="Name"className='text-input' required></input>],
    email: [<label htmlFor="email">Email</label>, <input type="email" name="email" placeholder="Email"className='text-input' required></input>],
    phone: [<label htmlFor="phone">Phone</label>, <input type="tel" name="phone" placeholder="Mobile Number"className='text-input' minLength={10} required></input>],
    institute: [<label htmlFor="name">Affliation</label>, <input className='text-input' type="text" name="institute" placeholder="Name of the institute you are currently enrolled in" required></input>],
    dob: [<label htmlFor='dob'>Date of Birth</label>, <input type="date" className='text-input' name="dob"/>],
    sex: [ <label htmlFor='sex'>Gender</label>,
      <div className="radio">
        <div>
            <input type="radio" id='male' name="sex" value="male" required />
            <label htmlFor="male">Male</label>
        </div>
        <div>
            <input type="radio" id='female' name="sex" value="female" required />
            <label htmlFor="female">Female</label>
        </div>
      </div>]
  }

  return (
    <>
        {eventForm ? eventForm.map((e) => (
          !e.renderOn ? <span className="form-group">{e.name ? e.ele : formFields[e]}</span> : (rendering.some(item => item.includes(e.renderOn)) ? <span className="form-group">{e.ele}</span> : <span></span>)
          )):""}
    </>
  )
}

export default Form 
export { textarea, radio, dropdown, information }