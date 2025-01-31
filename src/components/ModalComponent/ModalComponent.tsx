import React from "react";
import { Modal } from "antd";

export const ModalComponent = ({ isOpen, setIsModalOpen, character }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      {character ? (
        <div>
          <h1>Name: <br/>{character.name}</h1>
          <img 
            src={character.image} 
            alt={character.name} 
          />
          <p><b>Gender:</b> {character.gender}</p>
          <p><b>Species:</b> {character.species}</p>
          <p><b>Location Name:</b> {character.location.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Modal>
  );
};

export default ModalComponent;