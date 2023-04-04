import React,{useState} from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {Container, List, ListHeader,ListContent,Card} from './styles';


const initialColumns = [
  {
    name: "01.2.001",
    id: '01.2.001',
    items: [ 
      {id: '001', uma: "000000000016234", pedido: "200300", lote: "130000", active: false},
      {id: '002', uma: "000000000016235", pedido: "200301", lote: "130001", active: false}
    ]
  },
  {
    name: "01.2.002",
    id: '01.2.002',
    items: [
      {id: '003', uma: "000000000016236", pedido: "200302", lote: "130002", active: false},
      {id: '004', uma: "000000000016237", pedido: "200300", lote: "130000", active: false},
      {id: '005', uma: "000000000016238", pedido: "200301", lote: "130001", active: false}
    ]
  },
  {
    name: "01.2.003",
    id: '01.2.003',
    items: []
  },
  {
    name: "01.2.004",
    id: '01.2.004',
    items: [{id: '009', uma: "000000000016242", pedido: "200304", lote: "130004", active: false}  ]
  },
  {
    name: "02.2.001",
    id: '02.2.001',
    items: [
      {id: '006', uma: "000000000016239", pedido: "200302", lote: "130002", active: false},
      {id: '007', uma: "000000000016240", pedido: "200300", lote: "130000", active: false},
      {id: '008', uma: "000000000016241", pedido: "200301", lote: "130001", active: false}
    ]
  },
  {
    name: "02.2.002",
    id: '02.2.002',
    items: []
  },
  {
    name: "02.2.003",
    id: '02.2.003',
    items: []
  },
  {
    name: "02.2.004",
    id: '02.2.004',
    items: [
      {id: '010', uma: "000000000016339", pedido: "200402", lote: "130402", active: false},
      {id: '011', uma: "000000000016340", pedido: "200400", lote: "130400", active: false},
      {id: '012', uma: "000000000016341", pedido: "200401", lote: "130401", active: false},
      {id: '013', uma: "000000000016342", pedido: "200411", lote: "130402", active: false},
      {id: '014', uma: "000000000016343", pedido: "200435", lote: "130405", active: false},
      {id: '015', uma: "000000000016344", pedido: "200456", lote: "130404", active: false},
      {id: '016', uma: "000000000016345", pedido: "200464", lote: "150405", active: false},
      {id: '017', uma: "000000000016346", pedido: "200469", lote: "130205", active: false},
      {id: '018', uma: "000000000016347", pedido: "200435", lote: "132405", active: false},
      {id: '019', uma: "000000000016348", pedido: "204653", lote: "120405", active: false}
    ]
  },
]
  

export function Shipment() {

  const [columns, setColumn] = useState(initialColumns);

  const onDragEnd = (result) =>{


    if(!result.destination){
      return;
    }

    const columnsCopy = JSON.parse(JSON.stringify(columns));

    const draggableId = result.draggableId;
    const droppableSourceId = result.source.droppableId;
    const droppableSourceIndex = result.source.index;

    const droppableDestinationId = result.destination.droppableId;
    const droppableDestinationIndex = result.destination.index;

    if(droppableSourceIndex === droppableDestinationIndex && droppableSourceId === droppableDestinationId ){
      return;
    }

    //Obtem coluna origem
    const sourceColumnItems = columnsCopy.find(column => column.id === droppableSourceId);


    //Obtem card arrastado
    const itemCard = sourceColumnItems.items.find(item => item.id === draggableId);

    //Exclui objeto arrastado
    const filteredColumnItems = sourceColumnItems.items.filter(item => item.id !== draggableId);

    //Troca o objeto arrastado de lugar
    if(droppableSourceId === droppableDestinationId ){

      filteredColumnItems.splice(droppableDestinationIndex, 0 , itemCard);
      

      for(let i in columnsCopy){
        if(columnsCopy[i].id ===  droppableSourceId){
          columnsCopy[i].items = filteredColumnItems;
        }
      }
      
    }else {
      const destinationIndex = columnsCopy.findIndex(column => column.id === droppableDestinationId);

      columnsCopy[destinationIndex].items.splice(droppableDestinationIndex, 0 , itemCard);       
      
      for(let i in columnsCopy){
        if(columnsCopy[i].id ===  droppableDestinationId){
          columnsCopy[i].items = columnsCopy[destinationIndex].items;
        }else if(columnsCopy[i].id ===  droppableSourceId){
          columnsCopy[i].items = filteredColumnItems;
        }
      }
  
    }

    setColumn(columnsCopy);

  }

  const handleActiveCards = (array, card) => {
    const newColumns = array.map(column => {
      return {
        ...column,
        items:column.items.map(item => {
          if (item.pedido === card.pedido){
              item['active'] = !item.active;
              return item;
          }
          return item;
        })
      }
      
    })

    setColumn(newColumns);
  }
  
  const handleOnMouseToggle = (cardItem) =>{

    handleActiveCards(columns, cardItem);

  }

  // const handleOnMouseEnter = (cardItem) =>{

  //   handleActiveCards(columns, cardItem);
    // const newColumns = columns.map(column => {
    //   return {
    //     ...column,
    //     items:column.items.map(item => {
    //       if (item.pedido === cardItem.pedido){
    //           item['active'] = !item.active;
    //           return item;
    //       }
    //       return item;
    //     })
    //   }
      
    // })
    // setColumn(newColumns);
  // }

  return (
    
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
      {columns.map((column,index) => (
        <Droppable droppableId={column.id} key={column.id}index={index}>
          {(provided)=>(
            <List ref={provided.innerRef}>
              <ListHeader key={column.id}>
                {column.name}
              </ListHeader>
              <ListContent>           
                    {column.items.map((item,index) =>(
                      <Draggable key={item.id}draggableId={item.id} index={index}>
                      {(provided)=>(
                            <Card 
                              onMouseEnter={() => handleOnMouseToggle(item)}
                              onMouseLeave={() => handleOnMouseToggle(item)}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              style={{...provided.draggableProps.style}}
                              active={item.active}
                            >
                              <h3>{item.uma}</h3>
                              <p>{item.lote} | {item.pedido} </p>
                            </Card>
                      )}
                      </Draggable>
                  ))}        
                  {provided.placeholder}
              </ListContent>
              
            </List>
          )}
          
        </Droppable>
      ))}
      </DragDropContext>
    </Container>
  );
}

