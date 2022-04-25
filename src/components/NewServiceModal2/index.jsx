import Modal from 'react-modal';
import React,{useState} from 'react';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';

import {Container} from './styles';
import {  useServices } from '../../hooks/services';
import { useHistory } from "react-router-dom";

import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';
import { useEffect } from 'react/cjs/react.development';

Modal.setAppElement('#root');

export function NewServiceModal2({isOpen,onRequestClose }){
  const { orderData } = useDataNewServiceStore()
  
  const { setList } = useServices();
  const { user } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();
  const goDashboard = () => history.push('dashboard');

  const [order ,setOrder] = useState('');

  useEffect(()=>{   
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
          "address": orderData,
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

        <input 
          type="text" 
          id="address" 
          placeholder="Endereço"
          disabled
          value={orderData || ""}
        />    


        <label htmlFor="modelo">Pedido* </label>
        
        <input 
          type="text" 
          id="order" 
          autoFocus 
          maxLength="6"
          placeholder="Pedido"
          value={order}
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