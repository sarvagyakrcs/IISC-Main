import {React, useRef, useState} from 'react';
import './students.css';
import getFacId from '../../config/Functions/getData/getfacid';
import studentSignUp from '../../config/Functions/SignUp/studentSignUp';
import { baseURL } from '../../data';
import errorDecoder from '../../config/Functions/errorDecoder';

const Students = () => {
    const [isSuccessfull, setIsSuccessfull] = useState(3);

    // Create refs for each form field
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const srNoRef = useRef();
    const departmentRef = useRef();
    const facultyGuideDepartmentRef = useRef();
    const facultyGuideNameRef = useRef();
    const emailIdRef = useRef();
    const FacultyEmail = useRef();
    const mobileNoRef = useRef();
    const degreeRef = useRef();
    const natureOfRegistrationRef = useRef();
    const enrollmentDateRef = useRef();
    const purposeOfUseRef = useRef();
    let formData = {};

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with form data
        formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            srNo: srNoRef.current.value,
            department: departmentRef.current.value,
            facultyGuideDepartment: facultyGuideDepartmentRef.current.value,
            facultyGuideName: facultyGuideNameRef.current.value,
            emailId: emailIdRef.current.value,
            FacultyEmail: FacultyEmail.current.value,
            mobileNo: mobileNoRef.current.value,
            degree: degreeRef.current.value,
            natureOfRegistration: natureOfRegistrationRef.current.value,
            enrollmentDate: enrollmentDateRef.current.value,
            purposeOfUse: purposeOfUseRef.current.value,
        };

        try {
            // Do something with the formData object (e.g., send it to a server)
            console.log(formData);
            await studentSignUp(formData);
            setIsSuccessfull(1);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSuccessfull(2);
            // Handle the error in a way that makes sense for your application (e.g., show an error message to the user)
        }
    };

    const successfull = (
        <div className="studentForm-successfull">
            <h1>Successfull</h1>
            <p>Your request has been sent to the admin. You will be notified once your account is created.</p>
        </div>
    );

    const form = (
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
                        <input type="text" placeholder="First Name" ref={firstNameRef} />
                        <input type="text" placeholder="Last Name" ref={lastNameRef} />
                    </div>
                </label>

                <label>
                    Sr No:
                    <input type="text" placeholder="04-03-00-36-41-14-1-xxxx" ref={srNoRef}/>
                </label>

                <label>
                    Department:
                    <select className="studentForm-department" ref={departmentRef}>
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
                    <select className="studentForm-faculty-guide-department" ref={facultyGuideDepartmentRef}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>

                <label>
                    Faculty/ Guide Name:
                    <input type="text" className="studentForm-faculty-guide-name" ref={facultyGuideNameRef} />
                </label>

                <label>
                    IISc E-mail ID:
                    <input type="email" className="studentForm-email-id" ref={emailIdRef} />
                </label>

                <label>
                    Faculty E-mail ID:
                    <input type="email" className="studentForm-email-id" ref={FacultyEmail} />
                </label>

                <label>
                    Mobile No:
                    <input type="tel" className="studentForm-mobile-no" ref={mobileNoRef} />
                </label>

                <label>
                    Degree:
                    <input type="tel" className="studentForm-degree" ref={degreeRef} />
                </label>

                <label>
                    Nature of Registration:
                    <input type="text" className="studentForm-nature-of-registration" ref={natureOfRegistrationRef} />
                </label>

                <label>
                    Date of Enrollment to the Course:
                    <input type="date" className="studentForm-enrollment-date" ref={enrollmentDateRef} />
                </label>

                <label>
                    Brief description of the purpose of use:
                    <textarea rows="4" className=" wider" ref={purposeOfUseRef}></textarea>
                </label>

            </form>
            <button onClick={handleSubmit} type="submit" className="studentForm-submit-button">Submit</button>
        </div>
    );

    const signUpFailed = (
        <div className="studentForm-failed">
            <h1>Failed</h1>
            <p>{errorDecoder(isSuccessfull)}</p>
        </div>
    );

    return (
        {1: successfull, 2: signUpFailed, 3: form}[isSuccessfull]
    );
};

export default Students;
