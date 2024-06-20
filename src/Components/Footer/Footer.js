import React, { useState } from "react";
import "./Footer.scss";
import RulesModal from "../RulesModal/RulesModal";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenmodal = () => {
    setOpenModal(true);
  };

  return (
    <div className="footer">
      <p className="footer__rules" onClick={handleOpenmodal}>
        Rules
      </p>
      {openModal && (
        <RulesModal  setOpenModal={setOpenModal} />
      )
        
      }
      
    </div>
  );
};

export default Footer;
