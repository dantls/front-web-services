import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import {Link} from 'react-router-dom';


function Header({ openModal }) {
  return (
    <Container>
      <Link
        to={`/main`}
      >
        <img 
          src={logoImg}
          alt="Logo" 
          height={75}   
        />
      </Link>
      <button type="button"
      onClick={openModal}>
        <div className="text">Novo Pedido</div>
        <div className="icon">
          <FiPlusSquare size={24} />
        </div>
      </button>
   
    </Container>
  )
}

export {Header};