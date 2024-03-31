"use client";

import styles from "@/app/styles/contact.module.css"
import {useState} from "react";

const ContactForm = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null);

    function handleChange(elem) {
        const name = elem.target.name;
        const value = elem.target.value;
        setUser(previousUser => {
            return {...previousUser, [name]: value}
        });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    "Content_Type": "application/json"
                },
                body: JSON.stringify({
                    username: user.userName,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            });

            // Set and status based on the response from the API route
            if (response.status === 201) {
                setUser({
                    userName: "",
                    email: "",
                    phone: "",
                    message: ""
                });

                setStatus("success");
            } else {
                setStatus("error");
            }
        }
        catch (e) {
            setStatus('error');
            console.log(`ContactForm Data Storage error: ${e}`)
        }
    }

    return (
        <form className={styles.contact_form} onClick={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="userName" className={styles.label}>
                    Enter Your Name
                    <input type="text" id="userName" name="userName"
                           value={user.userName}
                           placeholder="Enter Your Name"
                           onChange={handleChange}
                           autoComplete="off"
                           required="required"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" id="email" name="email"
                           value={user.email}
                           placeholder="Enter your email"
                           onChange={handleChange}
                           autoComplete="off"
                           required="required"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" id="phone" name="phone"
                           value={user.phone}
                           placeholder="Enter your phone number"
                           onChange={handleChange}
                           autoComplete="off"
                           required="required"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea id="message" name="message"
                           value={user.message}
                           rows={5}
                           defaultValue="Enter your message"
                           onChange={handleChange}
                           autoComplete="off"
                           required="required"
                    > </textarea>
                </label>
            </div>

            <div>
                {status === "success" && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === "error" && <p className={styles.error_msg}>There was an error submitting your message!</p>}

                <button type="submit" id="submit">Submit Message</button>
            </div>
        </form>
    );
};

export default ContactForm;