import { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import PersonalInfoForm from '../Form/PersonalInfoForm';
import AgeForm from '../Form/AgeForm';
import ReviewData from '../Form/ReviewData';
import {  formScheme } from '../../validations/formValidate';

const Modal = ({ open, onClose }) => {
    const [step, setStep] = useState(0);
    const [userData, setUserData] = useState({ firstName: '', lastName: '', age: '' });
    const [isValid, setIsValid] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        validateUserData();
    }, [userData]);

    async function validateUserData() {
        try {
            setMessage('')
            step == 1 && await formScheme.validate(userData);
            if (userData.firstName && userData.lastName) {
                setIsValid(true)
            }
        }
        catch (err) {
            setMessage("Not Valid")
        }

    }

    const handleNext = () => {
        setIsValid(false)
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleFinish = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
        onClose();
    };

    const steps = [
        <PersonalInfoForm userData={userData} setUserData={setUserData} />,
        <AgeForm userData={userData} setUserData={setUserData} />,
        <ReviewData userData={userData} />
    ];

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>User Info</DialogTitle>
            <DialogContent>{steps[step]}</DialogContent>
            <DialogActions>
                <Typography>{message}</Typography>
                <Button disabled={step === 0} onClick={handleBack}>Back</Button>

                {step < steps.length - 1 ? (
                    <Button disabled={!isValid} onClick={handleNext}>Next</Button>
                ) : (
                    <Button onClick={handleFinish}>Finish</Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
