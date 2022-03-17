import Modal from 'react-modal';
import {useState, useEffect} from 'react';

import {Container} from './styles';
import {  useServices } from '../../hooks/services';

import closeImg from '../../assets/close.svg';
import api from '../../services/api';

Modal.setAppElement('#root');
export function NewServiceModal({isOpen,onRequestClose }){
  const {setList} = useServices();

  const [order ,setOrder] = useState('');
  const [addresses ,setAddress] = useState([]);
  const [choiseAddress ,setChoiseAddress] = useState('');

  useEffect(()=>{
    async function loadAddresses(){
      const response = await api.get('/list-addresses');
      setAddress(response.data);
    }
    
    loadAddresses();
    setChoiseAddress('');
    setOrder('');
    

  },[isOpen]);

  async function loadServices(){
    const response = await api.get('/list-services');
    setList(response.data);
  }
  
  async function handleCreateNewService(event){
    event.preventDefault();

    await api.post('/services',{
      "address": choiseAddress,
      order
    });


    loadServices();

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
      
        <label htmlFor="modelo">Endereço* </label>
        <select 
          value={choiseAddress}
          onChange={event => {
            setChoiseAddress(event.target.value)
          }
          }>
          <option
            value=''
            disabled
            hidden
          >
            Selecione o endereço:
          </option>
          {addresses.map((item)=>{
            return (
              <option 
              key={item.id}
              value={item.description}>
                {item.description}
              </option>
            )
          })}
        </select>

        <label htmlFor="modelo">Pedido* </label>
        
        <input 
          type="text" 
          id="order" 
          placeholder="Pedido"
          value={order}
          onChange={event => {
              setOrder(event.target.value)
            }
          }
        />    


        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}