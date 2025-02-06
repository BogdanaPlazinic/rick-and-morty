import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import EditCharacterModal from "../EditCharacterModal/EditCharacterModal";
import styles from "../CardComponent/CardComponent.module.scss"

const CardComponent = ({ 
  results, 
  removeFromFavorites, 
  updateFavorites 
}: { 
  results: any[], 
  removeFromFavorites?: (id: number) => void,
  updateFavorites?: (updatedCharacter: any) => void
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const showModal = (character) => {
      setSelectedCharacter(character);
      setIsModalOpen(true);
    };

    const openEditModal = (character) => {
      setSelectedCharacter(character);
      setIsEditModalOpen(true);
    };

    const handleSave = (updatedCharacter) => {
      if (updateFavorites) {
        updateFavorites(updatedCharacter);
      }
      setIsEditModalOpen(false);
    };

    let display = results?.map((character) => {
        let { id, name, image } = character;
        return (
          <div key={id} onClick={() => showModal(character)} style={{ position: "relative" }}>
            <img src={image} className={styles.car} alt="character image"/>
            <div>{name}</div>

            {removeFromFavorites && (
              <button 
                onClick={(e) => {
                  e.stopPropagation(); 
                  removeFromFavorites(id);
                }}
                style={{
                  /* position: "absolute", */
                  /* top: 10,
                  right: 10, */
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            )}

            {updateFavorites && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openEditModal(character);
                }}
                style={{
                  /* position: "absolute", */
                  /* bottom: 10,
                  right: 10, */
                  background: "blue",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer"
                }}
              >
                Edit
              </button>
            )}
          </div>
        );
    });

    return (
      <>
        {display}
        {selectedCharacter && (
          <ModalComponent 
            isOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            character={selectedCharacter} 
          />
        )}

        {selectedCharacter && (
          <EditCharacterModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            character={selectedCharacter}
            onSave={handleSave}
          />
        )}
      </>
    );
};

export default CardComponent;