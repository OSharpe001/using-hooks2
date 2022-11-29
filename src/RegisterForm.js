import { useState } from 'react';

export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: "O",
        lastName: "Sharpe",
        email: "osharpe@momail.com"
    });

    return (
        <>
        <label>
            First name: 
            <input value={form.firstName} onChange={event => {
                setForm({...form, firstName: event.target.value});
            }}
            />
        </label>
        <label>
            Last name: 
            <input value={form.lastName} onChange={event => {
                setForm({...form, lastName: event.target.value});
            }}
            />
        </label>
        <label>
            Email: 
            <input value={form.email} onChange={event => {
                setForm({...form, email: event.target.value});
            }}
            />
        </label>
        <p>
            {form.firstName}{' '}
            {form.lastName}{' '}
            ({form.email})
        </p>
        </>
    );
};