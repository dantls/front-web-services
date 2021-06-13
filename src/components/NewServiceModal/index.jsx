import Modal from 'react-modal';

import {Container} from './styles';

import closeImg from '../../assets/close.svg'
import { useHistory } from 'react-router';
Modal.setAppElement('#root');
export function NewServiceModal({isOpen,onRequestClose }){

  const history = useHistory();
  
  async function handleCreateNewService(event){
    event.preventDefault();
       

    history.push('/services');
    onRequestClose()
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img 
          src={closeImg}
          alt="Fechar Modal"
        />

      </button>

      <Container onSubmit={handleCreateNewService}>
        <h2>Cadastrar</h2>
      
        <label htmlFor="modelo">Pedido* </label>
        <input
          placeholder="Pedido"
          id="order"
        />

        <label htmlFor="modelo">Endereço* </label>
        <input
          placeholder="Endereço"
          id="address"
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}