import React, {useState} from 'react'
import completeSvg from '../photos/icon-complete.svg'

const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: '',
    cvc: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () =>{
    let isValid = true;
    const newError = {};

    if(!formData.name){
      newError.name = "Name is required";
      isValid = false;
    }

    if(!formData.number){
      newError.number = "Number is required";
      isValid = false;
    }

    if(!formData.date){
      newError.date = "Date is required";
      isValid = false;
    }

    if(!formData.cvc){
      newError.cvc = "cvc is required";
      isValid = false;
    }

    setErrors(newError);
    return isValid;
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleInputChangeForNumber = (e) =>{
    setFormData({
      ...formData,
      number: e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!validateForm()){
      console.log('Form submission failed due to validation errors.');
      return;
    }
    console.log("Form Data: ", formData);
    onSubmit(formData);
    setFormData({
      name: '',
      number: '',
      date: '',
      cvc: '',
    }); 

    setSubmitted(true);
  }

  const handleContinue = (event) => {
    event.preventDefault();
    setSubmitted(false);
    onSubmit({
      name: 'JANE APPLESEED',
      number: '0000 0000 0000 0000',
      date: '0000-00-00',
      cvc: '000',
    });
  }

  return (
    <div>
      {submitted? (
        <div className='flex flex-col justify-evenly items-center h-72 w-80'>
          <img src={completeSvg} alt="SVG image" />
          <p className='text-2xl text-darkViolet'>THANK YOU!</p>
          <p className='text-sm text-darkGrayishViolet'>We've added your card details</p>
          <button className='w-9/12 h-8 rounded-lg bg-darkViolet text-white outline-none' onClick={handleContinue}>Continue</button>
        </div>
      ):(
        <form onSubmit={handleSubmit} className='flex flex-col justify-between h-80 w-96'>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">CARDHOLDER NAME</label>
            <input 
            type="text"
            id = "name"
            name = "name"
            placeholder='e.g. Jane Appleseed'
            value = {formData.name}
            onChange = {handleInputChange}
            className = "border-2 border-gray-300 h-9 pl-2 rounded-lg"
            />
            <p className="text-red-500">{errors.name}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="number" className="mb-2">CARD NUMBER</label>
            <input 
            type="tel"
            id = "number"
            name = "number"
            placeholder='e.g. 1234 5678 9123 0000'
            value = {formData.number}
            onChange = {handleInputChangeForNumber}
            className = "border-2 border-gray-300 h-9 pl-2 rounded-lg"
            />
            <p className="text-red-500">{errors.number}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <label htmlFor="date" className="mb-2">EXP. DATE (MM/YY)</label>
              <input 
              type="date"
              id = "date"
              name = "date"
              value = {formData.month}
              onChange = {handleInputChange}
              className = "border-2 border-gray-300 h-9 pl-2 rounded-lg"
              />
              <p className="text-red-500">{errors.date}</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvc" className="mb-2">CVC</label>
              <input 
              type="text"
              id = "cvc"
              name = "cvc"
              placeholder='e.g. 123'
              value = {formData.cvc}
              onChange={handleInputChange}
              className = 'border-2 border-gray-300 h-9 pl-2 rounded-lg'
              />
              <p className="text-red-500">{errors.cvc}</p>
            </div>
          </div>
          <button type="submit" className="w-9/12 h-9 self-center rounded-lg bg-darkViolet color text-white">Confirm</button>
        </form>
      )}
    </div>

  )
}

export default Form