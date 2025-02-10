import React, { useState } from 'react';
import Data from './data';

function Accordian() {
  const [selected, setSelected] = useState([]);

  function handleClickedQuestion(id) {
    console.log(id);
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  return (
    <div className='flex flex-col w-xl'>
      {Data.map((datas) => (
        <div key={datas.id} className="m-4 bg-amber-300 p-2 rounded-md" onClick={() => handleClickedQuestion(datas.id)}>
          <h1>{datas.id}. {datas.question}</h1>
          <h2>{selected.includes(datas.id) ? datas.answer : ''}</h2>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
