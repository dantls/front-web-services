import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import {Container ,TransactionTypeContainer, RadioBox} from './styles';
import { useDataStore } from '../../services/stores/dataStores'
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');
export function ChangeStatusModal({isOpen,onRequestClose }){
  const { selectedData } = useDataStore()

  const [situations, setSituations] = useState([]);
  const [choiceSituation ,setChoiceSituation] = useState('');
  const [addresses ,setAddress] = useState([]);
  const [choiceAddress ,setChoiceAddress] = useState('');

  const [type, setType] = useState('edit');

  useEffect(()=>{
    async function loadStatus(){
      const response = await api.get('/situations');
      setSituations(response.data);
    }
    loadStatus();
  },[]);

  

  useEffect(()=>{
    async function loadAddresses(){
      const response = await api.get('/list-addresses');
      setAddress(response.data);
    }
    
    loadAddresses();
    setChoiceAddress('');
    

  },[isOpen]);


  async function handleChangeStatus(event){
    event.preventDefault();


    if(choiceSituation === "Faturado")
    await api.post('/billed',{
      "order": selectedData.content
    });

    
    if(choiceSituation === "Finalizado")
    await api.post('/finalized',{
      "order": selectedData.content
    });


    onRequestClose()
  }

  async function handleChangeAddress(event){
    event.preventDefault();

    console.log(choiceAddress)
    console.log(selectedData.content)

    await api.post('/transfer',{
      "order": selectedData.content,
      "address": choiceAddress
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
        <h2>Alterar</h2>
      
        <label htmlFor="modelo">Pedido</label>
        
        <h1>{selectedData?.content}</h1>

        <label htmlFor="modelo">Tipo da alteração </label>
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'edit'}
            activeColor="green"
            onClick={()=> {setType('edit')}}
            //className={type==='deposit'? 'active' : ''}
          > 
            <img src={incomeImg} alt="Entrada"/>
            <span>Edição</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'change'}
            type="button"
            activeColor="red"
            onClick={()=> {setType('change')}}
          > 
            <img src={outcomeImg} alt="Saída"/>
            <span>Troca Endereço</span>
          </RadioBox>
        </TransactionTypeContainer>


        {
          (type === 'edit') ?
          (
          <>
            <label htmlFor="modelo">Status </label>
            <select 
              value={choiceSituation}
              onChange={event => {
                setChoiceSituation(event.target.value)
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
              Salvar
            </button>
          </>)
          :
          (<>
                <label htmlFor="modelo">Endereço* </label>
                <select 
                value={choiceAddress}
                onChange={event => {
                  setChoiceAddress(event.target.value)
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
              <button 
                type="submit" 
                onClick={handleChangeAddress}
              >
                Alterar
              </button>
          </>)

        }
      </Container>
    </Modal>
  )
}