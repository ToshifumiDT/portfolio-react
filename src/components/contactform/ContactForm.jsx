import { useState } from 'react';
import { InputField } from './InputField';
import './ContactForm.css';  
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
    const { t } = useTranslation();

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
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                alert(t('contact.success'));
            } else {
                alert(t('contact.fail'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(t('contact.error'));
        }

        setIsSubmitting(false);
    };

    return (
        <div className="contact-form-container" id="contact">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">{t('contact.title')}</h2>
                <InputField
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    value={form.name}
                    onChange={handleChange}
                />
                <InputField
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    value={form.email}
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    name="subject"
                    placeholder={t('contact.subject')}
                    value={form.subject}
                    onChange={handleChange}
                />
                <InputField
                    type="textarea"
                    name="message"
                    placeholder={t('contact.message')}
                    value={form.message}
                    onChange={handleChange}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
            </form>
        </div>
    );
}
