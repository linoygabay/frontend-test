import { TextField } from '@mui/material';

const AgeForm = ({ userData, setUserData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div>
            <TextField 
                label="Age" 
                name="age" 
                value={userData.age} 
                onChange={handleChange} 
                fullWidth 
            />
        </div>
    );
};

export default AgeForm;
