import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import {Container ,TransactionTypeContainer, RadioBox, OrderDetails} from './styles';
import { useDataStore } from '../../services/stores/dataStores'
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { CgMoreVertical} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

Modal.setAppElement('#root');
export function ChangeStatusModal({isOpen,onRequestClose }){
  const { selectedData } = useDataStore()
  const { user } = useAuth();


  const [situations, setSituations] = useState([]);
  const [choiceSituation ,setChoiceSituation] = useState('');

  const [orderTypes, setOrderTypes] = useState([]);
  const [choiceOrderTypes ,setChoiceOrderTypes] = useState('');

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
      const response = await api.get('/list-addresses');
      setAddress(response.data);
    }
    
    loadAddresses();
    setChoiceAddress('');
    

  },[isOpen]);


  async function handleChangeStatus(event){
    event.preventDefault();

    if(choiceSituation === "Faturado" || 
      choiceSituation === "Finalizado" || 
      choiceSituation === "Pendência Comercial/Vendas/Financeiro" || 
      choiceSituation === "Cancelado"
    ){
      
      if(choiceSituation === "Faturado")
      await api.post('/billed',{
        "order": selectedData.content,
        "user": user.id
      });

      
      if(choiceSituation === "Finalizado")
      await api.post('/finalized',{
        "order": selectedData.content,
        "user": user.id
      });

      if(choiceSituation === "Pendência Comercial/Vendas/Financeiro")
      await api.post('/pendency',{
        "order": selectedData.content,
        "user": user.id
      });

      if(choiceSituation === "Cancelado")
      await api.post('/cancel',{
        "order": selectedData.content,
        "user": user.id
      });

      
    }
    onRequestClose()
  }

  async function handleChangeAddress(event){
    event.preventDefault();

    await api.post('/transfer',{
      "order": selectedData.content,
      "address": choiceAddress
    });

    onRequestClose()
  }
  async function handleChangeTypeOrder(event){
    event.preventDefault();

    await api.put('/add-ordertype',{
      "order": selectedData.content,
      "ordertype": choiceOrderTypes
    });

    setChoiceOrderTypes('');

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
          <h1>{selectedData?.content}</h1>
        
            <Link
              key={selectedData?.content}
              onClick={onRequestClose}
              to={`/detail/${selectedData?.content}`}
            >
              <CgMoreVertical />
            </Link>
        </OrderDetails>
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
          (type === 'change')? 
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