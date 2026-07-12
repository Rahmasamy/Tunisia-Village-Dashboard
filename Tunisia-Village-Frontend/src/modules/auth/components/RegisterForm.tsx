"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRegister } from '../hooks/useRegister';
import { RegisterProgress } from './RegisterProgress';
import { StepRoleSelection } from './StepRoleSelection';
import { StepAccountDetails } from './StepAccountDetails';
import { StepSuccess } from './StepSuccess';

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: 'user',
    service: '',
    firstName: '',
    email: '',
    phone: '',
    password: ''
  });

  const [registeredUser, setRegisteredUser] = useState<any>(null);
  const registerMutation = useRegister();

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = () => {
    // Map frontend state to backend RegisterDTO
    const payload: any = {
      name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirmPassword: formData.password, // Frontend validates confirmPassword in StepAccountDetails
      SystemRole: formData.role === 'PROVIDER' ? 'service_provider' : 'ambassedor',
    };

    registerMutation.mutate(payload, {
      onSuccess: (data) => {
        setRegisteredUser(data.user);
        setStep(3);
      },
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepAccountDetails 
            formData={formData} 
            setFormData={setFormData} 
            onNext={handleNext} 
          />
        );
      case 2:
        return (
          <StepRoleSelection 
            role={formData.role} 
            setRole={(r) => setFormData({...formData, role: r})} 
            onSubmit={handleSubmit}
            isPending={registerMutation.isPending}
            onNext={handleSubmit}
            onBack={handleBack}
          />
        );
      case 3:
        return <StepSuccess user={registeredUser} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Logo */}
      <div className="mb-6 w-full flex justify-center">
        <div className="w-24 h-24 flex items-center justify-center overflow-hidden mx-auto">
          <Image src="/imgs/logo-white.png" alt="Logo" width={96} height={96} className="object-contain drop-shadow-md" />
        </div>
      </div>

      {step < 3 && <RegisterProgress currentStep={step} />}
      
      {renderStep()}
    </div>
  );
}


