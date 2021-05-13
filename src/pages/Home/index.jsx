import {useEffect, useState} from 'react';

import api from '../../services/api';

import { Board } from '../../components/Board';
import { Header } from '../../components/Header';
import  ModalAdd from '../../components/ModalAdd';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    
    (async () => {
      const response = await api.get('/list-services');

      setList(response.data)
    })()

  },[])

  

  function toggleModal(){
    setModalOpen(!modalOpen);
  }

  async function handleAdd() {
    try {
      console.log('add')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header openModal={toggleModal}  />
      <ModalAdd
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAdd}
      />
      <Board list={list}/>
    </>
  );
}

export default Home;
