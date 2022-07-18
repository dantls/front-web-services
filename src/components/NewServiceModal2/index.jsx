import Modal from 'react-modal';
import React,{useState, useEffect} from 'react';
import * as Yup from 'yup';
import { useToast } from '../../hooks/toast';
import { useBarcodeModal } from '../../hooks/barcode';
import { BiBarcodeReader } from 'react-icons/bi';

import {Container} from './styles';
import {  useServices } from '../../hooks/services';
import {  useShipment2Services } from '../../hooks/shipment2Service';
// import { useHistory } from "react-router-dom";

import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useDataNewServiceStore } from '../../services/stores/dataStores2';
import { useDataStoreBarcode } from '../../services/stores/dataStoresBarcode';

Modal.setAppElement('#root');

export function NewServiceModal2({isOpen,onRequestClose }){
  const { orderData } = useDataNewServiceStore()
  const { barcodeData } = useDataStoreBarcode()
  const { handleOpenBarcodeModal } = useBarcodeModal();
  
  const { setList } = useServices();
  const { setList : setList2 } = useShipment2Services();
  const { user } = useAuth();
  const { addToast } = useToast();

  // const history = useHistory();
  // const goDashboard = () => history.goBack();

  const [order ,setOrder] = useState('');

  useEffect(()=>{   
    setOrder('');
  },[isOpen]);

  console.log(barcodeData);

  async function loadServices(){
    const response = await api.get('/list-services');
    setList(response.data);
  }
  
  async function loadServices2(){
    const response = await api.get('/list-services2');
    setList2(response.data);
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

        loadServices2();

        onRequestClose();


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
        <button 
          type="button"
          onClick={()=>handleOpenBarcodeModal()}
        >
          <BiBarcodeReader size={40}/>
        </button>
        

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}