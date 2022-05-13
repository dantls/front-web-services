import Modal from 'react-modal';
import React,{useState, useEffect} from 'react';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';

import {Container} from './styles';
import {  useServices } from '../../hooks/services';
import { useHistory } from "react-router-dom";

import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

Modal.setAppElement('#root');

export function NewServiceModal1({isOpen,onRequestClose }){
  const {setList} = useServices();
  const { user } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();
  const goDashboard = () => history.push('dashboard');

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
    try {
        const schema = Yup.object().shape({
          order: Yup.string()
          .required('Campo obrigatório inválido.')
          .min(6, "O pedido deve ter pelo menos 6 caracteres")
          .max(6,"O pedido deve ter somente 6 caracteres"),
        });

        await schema.validate({order}, {
          abortEarly: false,
        });

        await api.post('/services',{
          "address": choiseAddress,
          order,
          user: user.id
        });

        
        loadServices();

        onRequestClose();

        goDashboard();

      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          onRequestClose();

          addToast({
            type: 'error',
            title: 'Informações inválidas.',
            description:
              'Número do pedido deve conter 6 caracteres.',
          });
          
         
          return;
        }

      
      }
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
          maxLength="6"
          onChange={event => {
              setOrder(event.target.value.toUpperCase())
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