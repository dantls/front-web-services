import React from 'react';
import { ShipmentBoard2 } from '../../components/ShipmentBoard2';
import { useShipment2Services } from '../../hooks/shipment2Service';
import {Container} from './styles';


export function Shipment2Dashboard() {
  const {addresses} = useShipment2Services();
  return (
    <Container>
      <ShipmentBoard2
        addresses={addresses}
      />
    </Container>
  );
}

