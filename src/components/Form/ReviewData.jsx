import { Typography } from '@mui/material';

const ReviewData = ({ userData }) => {
  return (
    <>
      <Typography >First Name: {userData.firstName}</Typography>
      <Typography>Last Name: {userData.lastName}</Typography>
      <Typography>Age: {userData.age}</Typography>
    </>
  );
};

export default ReviewData;
