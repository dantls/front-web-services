import { useState , useEffect} from 'react';
import {Container} from './styles';
import { useRouteMatch, Link } from 'react-router-dom';
import { Table } from '../../components/Table';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

export function Details() {

  const [listService, setListService] = useState([]);

  const { params } = useRouteMatch();
  
  useEffect(() => {
    api.get(`/list-service/${params.order}`).then((response) => {
      setListService(response.data);
    });

  },[params.order]);


  return (
    <Container>
      <Table services={listService} />
      <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
      </Link>
    </Container>
  );
}

