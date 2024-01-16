import React from 'react';
import './staff.css';

const Staff = () => {
    return (
        <div className="staff-form-container">
            <h1>STAFF PAGE</h1>
            <br></br>
            <h2>APPLICATION FOR NEW ACCOUNT</h2>
            <hr />
            <p className="note">For use by IISc Students only.</p>
            <p className="note">(Temporary staff also.)</p>
            <p className="note">Please do not fill this form if you already have a computational account. If you need access to the basic HPC systems, such as Delta, kindly click on RESOURCES and proceed.</p>
            <hr />
            <form className="staff-form">
                <label>
                    NAME:
                    <div className="name-inputs">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                </label>

                <label>
                    EMP Code:
                    <input type="text" />
                </label>

                <label>
                    Designation:
                    <select>
                    <option value="">Select Designation</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Researcher">Researcher</option>
                        <option value="Student">Student</option>
                        <option value="PHD Scholar">PHD Scholar</option>
                        <option value="Project Trainee">Project Trainee</option>
                    </select>
                </label>

                <label>
                    Department:
                    <select>
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
                    <select>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>

                <label>
                    Incharge Name:
                    <input type="text" />
                </label>

                <label>
                    Email ID:
                    <input type="email" />
                </label>

                <label>
                    Mobile No:
                    <input type="tel" />
                </label>

                <label>
                    Nature of Employment:
                    <input type="text" />
                </label>

                <label>
                    Date of Joining:
                    <input type="date" />
                </label>

                <label>
                    Brief description of the purpose of use:
                    <textarea rows="4"></textarea>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Staff;
