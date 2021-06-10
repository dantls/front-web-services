import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';
import logoImg from '../../assets/logo.png';

function Header({ openModal }) {
  return (
    <Container>
      <img 
        src={logoImg}
        alt="Logo" 
        height={75}   
      />

      <button
        type="button"
        onClick={openModal}
      >
        <div className="text">Novo Pedido</div>
        <div className="icon">
          <FiPlusSquare size={24} />
        </div>
      </button>
    </Container>
  )
}

export {Header};