import { TextField } from '@mui/material';

const PersonalInfoForm = ({ userData, setUserData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <TextField 
        label="First Name" 
        name="firstName" 
        value={userData.firstName} 
        onChange={handleChange} 
        fullWidth 
      />
      <TextField 
        label="Last Name" 
        name="lastName" 
        value={userData.lastName} 
        onChange={handleChange} 
        fullWidth 
      />
    </>
  );
};

export default PersonalInfoForm;
