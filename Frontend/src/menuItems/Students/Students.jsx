import React from 'react';
import './students.css';

const Students = () => {
    return (
        <div className="studentForm-staff-form-container">
            <h1>STUDENTS PAGE</h1>
            <br></br>
            {/* To be updated */}
            <h2 className='center'>APPLICATION FOR STUDENTS UPDATE</h2> 
            <hr />
            <p className="studentForm-note">For use by IISc Students only.</p>
            <p className="studentForm-note">Please do not fill this form if you already have a computational account. If you need access to the basic HPC systems, such as Delta, kindly click on RESOURCES and proceed.</p>
            <hr />
            <form className="studentForm-staff-form">
                <label>
                    Name:
                    <div className="studentForm-name-inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                </label>

                <label>
                    Sr No:
                    <input type="text" placeholder="04-03-00-36-41-14-1-xxxx"/>
                </label>

                <label>
                    Department:
                    <select className="studentForm-department">
                        <option value="">Select Department</option>
                        <option value="AI">AI</option>
                        <option value="ML">ML</option>
                        <option value="CSE">CSE</option>
                        <option value="Software">Software</option>
                        <option value="IT">IT</option>
                    </select>
                </label>

                <label>
                    Is Faculty Guide from the same department?:
                    <select className="studentForm-faculty-guide-department">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>

                <label>
                    Faculty/ Guide Name:
                    <input type="text" className="studentForm-faculty-guide-name" />
                </label>

                <label>
                    IISc E-mail ID:
                    <input type="email" className="studentForm-email-id" />
                </label>

                <label>
                    Mobile No:
                    <input type="tel" className="studentForm-mobile-no" />
                </label>

                <label>
                    Degree:
                    <input type="tel" className="studentForm-degree" />
                </label>

                <label>
                    Nature of Registration:
                    <input type="text" className="studentForm-nature-of-registration" />
                </label>

                <label>
                    Date of Enrollment to the Course:
                    <input type="date" className="studentForm-enrollment-date" />
                </label>

                <label>
                    Brief description of the purpose of use:
                    <textarea rows="4" className=" wider"></textarea>
                </label>

            </form>
            <button type="submit" className="studentForm-submit-button">Submit</button>
        </div>
    );
};

export default Students;
