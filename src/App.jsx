import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from './components/Modal/Modal';
import { Container  } from './styles/index'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Container>
      <Button variant="contained" onClick={handleModalOpen}>Open User Info</Button>
      <Modal open={modalOpen} onClose={handleModalClose} />
    </Container>
  );
};

export default App;
