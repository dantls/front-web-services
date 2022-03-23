import { useState , useEffect} from 'react';
import {Container} from './styles';
import { useRouteMatch, Link } from 'react-router-dom';
import { Table } from '../../components/Table';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

export function Detail() {

  const [listService, setListService] = useState([]);

  const { params } = useRouteMatch();
  
  console.log(params.id)

  useEffect(() => {
    api.get(`/list-service/${params.id}`).then((response) => {
      setListService(response.data);
    });

  },[params.id]);

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

