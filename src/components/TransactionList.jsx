import * as React from 'react';
import { useState } from 'react';
import { mockTransactions } from '../mockData';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow() {
  const [transactions, setTransactions] = useState(mockTransactions);

  {
    //sort by array index
    //render txId, user, date, and cost from each object
    //each part with their own style - class? typography? listItemText?
  }
  return (
    <>

        <ListItem key={transactions.id} component="div" disablePadding>
          <ListItemText primary={transactions.txId} className='txId' />
          <ListItemText primary={transactions.user} className='user' />
          <ListItemText primary={transactions.date} className='date' />
          <ListItemText primary={transactions.cost} className='cost' />
        </ListItem>

    </>
  );
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}