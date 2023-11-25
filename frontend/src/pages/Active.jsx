import React, {useState} from 'react';
import Form from '../components/Form';
import backgroundImage from '../photos/bg-main-desktop.png';
import frontCardImage from '../photos/bg-card-front.png';
import backCardImage from '../photos/bg-card-back.png'

const Active = () => {
  const leftDiv = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const frontCard = {
    backgroundImage: `url(${frontCardImage})`,
    backgorundSize: 'cover',
    backgroundPosition: 'center',
  }

  const backCard = {
    backgroundImage: `url(${backCardImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const [formData, setFormData] = useState({
    name: 'JANE APPLESEED',
    number: '0000 0000 0000 0000',
    date: '0000-00-00',
    cvc: '000',
  })

  const handleFormSubmit = (data) => {
    setFormData(data);
    console.log(data);
  }

  return (
    <div className="h-screen w-screen flex border">
      <div className="h-full w-1/3 border" style={leftDiv}>
        <div style={frontCard} className="h-52 w-96 p-5 rounded-lg relative top-28 one:left-44 two:left-20">
          <div className="flex items-center mb-12">
            <div className="bg-white w-8 h-8 mr-2 rounded-full"></div>
            <div className="w-4 h-4 rounded-full border border-white"></div>
          </div>
          <div className='text-white text-lg mb-6'>
            {formData.number}
          </div>
          <div className="text-white text-sm flex justify-between">
            <span>{formData.name}</span>
            <span>{formData.date}</span>
          </div>
        </div>
        <div className="h-52 w-96 rounded-lg relative top-40 one:left-64 two:left-32 flex justify-end items-center p-10" style={backCard}>
          <p className="text-white">{formData.cvc}</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-2/3 border">
        <Form onSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default Active;