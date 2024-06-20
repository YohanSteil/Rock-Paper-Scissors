import React, { useState } from "react";
import "./RulesModal.scss";



const RulesModal = ({setOpenModal}) => {
  const [closeModal, setCloseModal] = useState(false);
  const handleCloseModal = () => {
    setCloseModal(true);
    setOpenModal(false)
  };

  return (
    <div className={`rules ${closeModal ? "hidden" : ""}`}>
      <div className="rules__modal">
        <div className="rules__modal__header">
          <h1 className="rules__modal__header__title">Rules</h1>
          <button
            className="rules__modal__header__close"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        <div className="rules__image">
          <img src="images/image-rules.svg" alt="rules" />
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
