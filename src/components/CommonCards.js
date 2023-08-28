import React,{useState} from 'react'
import CommonModal from './CommonModal';


export default function CommonCards({pictures,name,dob,phone,email,gender}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
          {isModalOpen === true ? (
      <CommonModal
      handleCloseModal={handleCloseModal}
      pictures={pictures}
      name={name}
      dob={dob}
      phone={phone}
      email={email}
      gender={gender}
     

    
      />
      ) : null}
     <div className='cards'
        style={{
          // border: "2px solid black",
          borderRadius: "50px",
          width: "15%",
          height: "240px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", 
          paddingtop:"5px", 
           
        }}
      >
        <div className='imgcards'>
          <img src={pictures} alt="" style={{ width: "70%" ,borderRadius:"400px"}}></img>


    <div>UserName:{name} </div>
    <div>UserDOB:{dob} </div>
    </div>
  
    <button onClick={handleOpenModal} className='button1'>Show details</button>
 </div>


 </>
  );
}