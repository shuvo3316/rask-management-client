import * as React from 'react';
import KanbanBoard from './Kanbanboard';

export  const Swap= () => {
  const [items1, setItems1] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  const [div, s] = React.useState(['Item 1', 'Item 2', 'Item 3']);
  return (
    
 <div>
    {/* {
        QuoteApp()
        
    } */}

    <KanbanBoard></KanbanBoard>
 </div>
  );
};