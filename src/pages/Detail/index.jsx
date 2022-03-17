import { useServices } from '../../hooks/services';
import {Container} from './styles';
import { Table } from '../../components/Table';


export function Detail() {
  const {listService} = useServices();
  return (
    <Container>
      <Table services={listService} />
    </Container>
  );
}

