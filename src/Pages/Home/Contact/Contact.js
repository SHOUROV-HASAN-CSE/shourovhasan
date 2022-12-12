import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";


const Contact = () => {
  return (
    <div id='contact' className='my-14'>
    <h1 className='text-center text-5xl text-[#008140]'>Contact</h1> 
    <div className='md:flex items-center'>
      
      <div className='p-20 text-xl rounded-3xl bg-[#36d399]'>
  
    <h2><span className='font-bold'>Address:</span>  Gazipur shadar, gazipur, Dhaka</h2>

    
    <h2><span className='font-bold'>Phone:</span> +8801303754647</h2>
  
    <h2><span className='font-bold'>Email:</span> shourovhasancse@gmail.com</h2>
      </div>

            <div className='md:w-1/2'>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='email' placeholder="Name" className="input input-bordered input-primary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered input-success" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input type="text" name='password' placeholder="Subject" className="input input-bordered input-error" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">message</span>
                            </label>
                            <textarea className="textarea textarea-warning" placeholder="message"></textarea>
                            
                        </div>
                        <div className="form-control mt-6  ">
                          <div className='flex justify-center'>
                          <input className="w-1/3 btn btn-success" type="submit" value="Submit" />
                          </div>

                          
                        </div>
                    </form>
                    </div>


      </div> 
    </div>
  );
};

export default Contact;