import React, {useState} from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: '',
    cvc: '',
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data: ", formData);
    setFormData({
      name: '',
      number: '',
      date: '',
      cvc: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className='hidden flex-col justify-between h-80 w-96'>
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
      </div>
      <div className="flex flex-col">
        <label htmlFor="number" className="mb-2">CARD NUMBER</label>
        <input 
        type="tel"
        id = "number"
        name = "number"
        placeholder='e.g. 1234 5678 9123 0000'
        value = {formData.number}
        onChange = {handleInputChange}
        className = "border-2 border-gray-300 h-9 pl-2 rounded-lg"
        />
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
          className = "border-2 border-gray-300 h-9 pl-2 rounded-lg"
          />
        </div>
      </div>
      <button type="submit" className="w-9/12 h-9 self-center rounded-lg bg-darkViolet color text-white">Confirm</button>
    </form>

  )
}

export default Form