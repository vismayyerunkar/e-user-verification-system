import React from 'react'

const UserDetails = ({data}) => {
  return (
    <div className='user-details'>
     <div className='img-holder'>
        <img src={data?.user_image}/>
     </div>

     <div><h3>Name </h3> : <span> {data.firstname + " " + data.lastname} </span></div>
     <div><h3>ContactNo</h3> : <span> {data.contactNo} </span></div>
     <div><h3>Address </h3> : <span> {data.address_1} </span></div>
     <div><h3>Adhaar No</h3> : <span> {data.adhaarNumber} </span></div>
     <div><h3>Date of birth</h3> : <span> {data.adhaarNumber} </span></div>
     <div><h3>State</h3> : <span> {data.state} </span></div>
     <div><h3>Pincode</h3> : <span> {data.pincode} </span></div>

    <div className="verification-holder">
      {data?.isVerified ? (<span className="user-verified">Verified</span>) : (<span className="user-unverified">unverified</span>)}
    </div>
    </div>
  )
}

export default UserDetails;
