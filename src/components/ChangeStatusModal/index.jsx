import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import {Container} from './styles';
import { useDataStore } from '../../services/stores/dataStores'
import closeImg from '../../assets/close.svg';
import api from '../../services/api';

Modal.setAppElement('#root');
export function ChangeStatusModal({isOpen,onRequestClose }){
  const { selectedData } = useDataStore()

  const [situations, setSituations] = useState([]);
  const [choiseSituation ,setChoiseSituation] = useState('');

  useEffect(()=>{
    async function loadStatus(){
      const response = await api.get('/situations');
      setSituations(response.data);
    }
    loadStatus();
  },[]);

  async function handleChangeStatus(event){
    event.preventDefault();


    if(choiseSituation === "Faturado")
    await api.post('/billed',{
      "order": selectedData.content
    });

    
    if(choiseSituation === "Finalizado")
    await api.post('/finalized',{
      "order": selectedData.content
    });


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

      <Container >
        <h2>Alterar Status</h2>
      
        <label htmlFor="modelo">Pedido</label>
        
        <h1>{selectedData?.content}</h1>


        <label htmlFor="modelo">Status </label>
        <select 
          value={choiseSituation}
          onChange={event => {
            setChoiseSituation(event.target.value)
          }
          }>
          <option
            value=''
            disabled
            hidden
          >
            Selecione o situação:
          </option>
          {situations.map((item)=>{
            return (
              <option 
              key={item.id}
              value={item.description}>
                {item.description}
               </option>
            )
          })}
        </select>

     
        <button 
          type="submit" 
          onClick={handleChangeStatus}
        >
          Cadastrar
        </button>

      </Container>
    </Modal>
  )
}