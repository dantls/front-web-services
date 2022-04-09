import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Container , ButtonGroup} from './styles';
import logoImg from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import { FiPower } from 'react-icons/fi';

function Header({ openModal }) {
  const { signOut } = useAuth();
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
      <ButtonGroup>
        <button type="button"
        onClick={openModal}>
          <div className="text">Novo Pedido</div>
          <div className="icon">
            <FiPlusSquare size={24} />
          </div>
        </button>

        <button type="button"
          onClick={signOut}>
          <div className="icon-signout">
            <FiPower size={24} />
          </div>
        </button>
      </ButtonGroup>
   
    </Container>
  )
}

export {Header};