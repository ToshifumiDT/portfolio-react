import { useState } from 'react';
import { InputField } from './InputField';
import './ContactForm.css';  

export default function ContactForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);  

        try {
            const response = await fetch('http://localhost:5000/send', {  // 5000
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),  
            });

            if (response.ok) {
                alert('Email sent successfully');
            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred');
        }

        setIsSubmitting(false);  
    };

    return (
        <div className="contact-form-container" id='contact'> 
            
            <form className="contact-form" onSubmit={handleSubmit}> 
            <h2 className="form-title">Contact Me</h2>
                <InputField
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                />
                <InputField
                    type="textarea"
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
