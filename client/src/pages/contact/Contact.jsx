import React from 'react'
import './contact.css'
import familyBackground from '../../assets/images/family-1.jpg'


export default function Contact() {
    return (
        <div className="contact row">
            <div className="contact__left col-6" >
                <div className="row">
                    <div className= 'col-10'>
                        <div className="contact__left-description ">
                            <div className="contact__left-title-Lg">
                                Say hello! 
                            </div>
                            <div className="contact__left-title-Sm">
                                Whether you’re visiting NYC and need tips on buggy-friendly museums,
                                or have a collaboration idea we could work together on, we’d love to hear from you.
                            </div>
                        </div>

                        <div className="contact__left-form">
                        <div class="contact-image">
                            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                        </div>

                        <form method="post " className="formContact ">
                            <h3 className= 'mt-4'>Drop Us a Message</h3>
                            <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" name="txtName" class="form-control" id="exampleInputEmail1" placeholder="Your Name *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="txtEmail" class="form-control" id="exampleInputEmail1" placeholder="Your Email *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="txtPhone" class="form-control" id="exampleInputEmail1" placeholder="Your Phone Number *"  />
                                        </div>

                                        <div class="message">
                                            <textarea name="txtMsg" class="form-control " placeholder="Your Message *" ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-dark">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                
            </div>

            <div className="contact__right col-6">    
                <img className='contact__right-img' src={familyBackground} alt="" />
            </div>
        </div>
    )
}
