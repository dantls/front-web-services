import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import {Container ,TransactionTypeContainer, RadioBox, OrderDetails} from './styles';
import { useDataStoreShipment2 } from '../../services/stores/dataStoresShipment2'
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { CgMoreVertical} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

Modal.setAppElement('#root');
export function ChangeStatusModal2({isOpen,onRequestClose }){
  const { selectedData2 } = useDataStoreShipment2()
  const { user } = useAuth();

  const [situations, setSituations] = useState([]);
  const [choiceSituation ,setChoiceSituation] = useState('');

  const [orderTypes, setOrderTypes] = useState([]);
  const [choiceOrderTypes ,setChoiceOrderTypes] = useState('');

   const [addressesFinal, setAddressesFinal] = useState([]);
   const [choiceAddressFinal ,setChoiceAddressFinal] = useState('');

  const [addresses ,setAddress] = useState([]);
  const [choiceAddress ,setChoiceAddress] = useState('');

  const [type, setType] = useState('edit');

  useEffect(()=>{
    async function loadStatus(){
      const response = await api.get('/situations');
      setSituations(response.data);
    }
    loadStatus();
    setChoiceSituation('');
  },[isOpen]);

  useEffect(()=>{
    async function loadOrderTypes(){
      const response = await api.get('/ordertypes');
      setOrderTypes(response.data);
    }
    loadOrderTypes();
  },[isOpen]);

  

  useEffect(()=>{
    async function loadAddresses(){
      const response = await api.get('/list-addresses2');
      setAddress(response.data);
    }
    
    loadAddresses();
    setChoiceAddress('');
    

  },[isOpen]);

  useEffect(()=>{
    async function loadAddressesFinal(){
      const response = await api.get('/list-finaladdresses');
      setAddressesFinal(response.data);
    }
    
    loadAddressesFinal();
    setChoiceAddressFinal('');
    

  },[isOpen]);


  async function handleChangeStatus(event){
    event.preventDefault();

    if(choiceSituation === "Faturado" || 
      choiceSituation === "Finalizado" || 
      choiceSituation === "Pend??ncia Comercial/Vendas/Financeiro" || 
      choiceSituation === "Cancelado"
    ){
      
      if(choiceSituation === "Faturado")
      await api.post('/billed',{
        "order": selectedData2.content,
        "user": user.id
      });

      
      if(choiceSituation === "Finalizado")
      await api.post('/finalized',{
        "order": selectedData2.content,
        "user": user.id
      });

      if(choiceSituation === "Pend??ncia Comercial/Vendas/Financeiro")
      await api.post('/pendency',{
        "order": selectedData2.content,
        "user": user.id
      });

      if(choiceSituation === "Cancelado")
      await api.post('/cancel',{
        "order": selectedData2.content,
        "user": user.id
      });

      
    }
    onRequestClose()
  }

  async function handleChangeAddress(event){
    event.preventDefault();

    await api.post('/transfer',{
      "order": selectedData2.content,
      "address": choiceAddress
    });

    onRequestClose()
  }
  async function handleChangeTypeOrder(event){
    event.preventDefault();

    await api.put('/add-ordertype',{
      "order": selectedData2.content,
      "ordertype": choiceOrderTypes
    });

    setChoiceOrderTypes('');

    onRequestClose()
  }
  async function handleChangeFinalAddress(event){
    event.preventDefault();

    await api.put('/add-finaladdress',{
      "order": selectedData2.content,
      "final_address": choiceAddressFinal
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
        <OrderDetails>
          <h1>{selectedData2?.content}</h1>
        
            <Link
              key={selectedData2?.content}
              onClick={onRequestClose}
              to={`/detail/${selectedData2?.content}`}
            >
              <CgMoreVertical color={'#33CA25'}/>
            </Link>
        </OrderDetails>
        <label htmlFor="modelo">Tipo da altera????o </label>
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'edit'}
            activeColor="green"
            onClick={()=> {setType('edit')}}
            //className={type==='deposit'? 'active' : ''}
          > 
            <img src={incomeImg} alt="Entrada"/>
            <span>Edi????o</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'type'}
            activeColor="yellow"
            onClick={()=> {setType('type')}}
            //className={type==='deposit'? 'active' : ''}
          > 
            <img src={incomeImg} alt="Tipo de Pedido"/>
            <span>Tipo</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'change'}
            type="button"
            activeColor="red"
            onClick={()=> {setType('change')}}
          > 
            <img src={outcomeImg} alt="Sa??da"/>
            <span>Endere??o</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'changeFinal'}
            type="button"
            activeColor="blue"
            onClick={()=> {setType('changeFinal')}}
          > 
            <img src={outcomeImg} alt="Sa??da"/>
            <span>Destino</span>
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
                Selecione o situa????o:
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
          (type === 'change')? 
          (<>
                <label htmlFor="modelo">Endere??o* </label>
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
                  Selecione o endere??o:
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
          </>):
          (type === 'changeFinal')? 
          (<>
                <label htmlFor="modelo">Endere??o Final* </label>
                <select 
                value={choiceAddressFinal}
                onChange={event => {
                  setChoiceAddressFinal(event.target.value)
                }
                }>
                <option
                  value=''
                  disabled
                  hidden
                >
                  Selecione o endere??o:
                </option>
                {addressesFinal.map((item)=>{
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
                onClick={handleChangeFinalAddress}
              >
                Alterar
              </button>
          </>):
          (
            <>
          
            <label htmlFor="modelo">Tipo </label>
            <select 
              value={choiceOrderTypes}
              onChange={event => {
                setChoiceOrderTypes(event.target.value)
              }
              }>
              <option
                value=''
                disabled
                hidden
              >
                Selecione o tipo de pedido:
              </option>
              {orderTypes.map((item)=>{
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
              onClick={handleChangeTypeOrder}
            >
              Salvar
            </button>
          </>
          )

        }
      </Container>
    </Modal>
  )
}