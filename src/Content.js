import React, { useState } from 'react';
import ItemsList from './ItemsList';


const Content=({ items,handleCheck,handleDelete })=> {
  return (
    <main>
      {(items.length) ?( 
      <ItemsList 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      ) :(
        <p style={{marginTop:'2rem',color:'darkblue',fontFamily:'bold-italic'}}> Your List is Empty </p>
      )}
    </main>
  );
};

export default Content;
