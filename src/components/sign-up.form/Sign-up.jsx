import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './style.css';
import { Button } from 'primereact/button'; 

const schema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password should be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password should be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="signup-label">Name:</label>
            <input
              id="name"
              type="text"
              className="signup-input"
              {...register('name')}
            />
            {errors.name && <p className="signup-error">{errors.name.message}</p>}
          </div> <br />

          <div>
            <label htmlFor="email" className="signup-label">Email:</label>
            <input
              id="email"
              type="email"
              className="signup-input"
              {...register('email')}
            />
            {errors.email && <p className="signup-error">{errors.email.message}</p>}
          </div> <br />

          <div>
            <label htmlFor="password" className="signup-label">Password:</label>
            <input
              id="password"
              type="password"
              className="signup-input"
              {...register('password')}
            />
            {errors.password && <p className="signup-error">{errors.password.message}</p>}
          </div> <br />

          <div>
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password:</label>
            <input
              id="confirmPassword"
              type="password"
              className="signup-input"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p className="signup-error">{errors.confirmPassword.message}</p>}
          </div> <br />

          <Button 
            label="Sign Up" 
            icon="pi pi-check" 
            className="p-button-rounded p-button-primary" 
            type="submit" 
          />
        </form>
      </div>
    </div>
  );
}