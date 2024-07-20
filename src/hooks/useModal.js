import { useEffect, useState, useCallback } from "react";

const useModal = () => {
  const [open, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (open) {
      
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleOpenModal = useCallback((data) => {
    setModalData(data);
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setTimeout(() => setIsOpen(false), 200); 
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal]);

  return {
    open,
    onOpen: handleOpenModal,
    onClose: handleCloseModal,
    modalData,
  };
};

export default useModal;
