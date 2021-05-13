import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';


import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

const ModalAdd = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      handleAddFood(data);
      setIsOpen();
    },
    [handleAddFood, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Pedido</h1>
        <Input name="order" />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Pedido</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAdd;
