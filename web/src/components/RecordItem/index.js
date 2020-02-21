import React from 'react';

import './styles.css';

function RecordItem({ record }) {
  return (
    <li className="record-item">
        <header>
        <img src={record.cover} alt={record.title}></img>
        <div className="record-info">
          <strong>{record.artist} - {record.title} </strong>
          <span>R${record.price},00 </span>
        </div>
        </header>
        <p>
          <span>
            <i className="fas fa-home"/>
          </span>
        </p>
    </li>
  );
}

export default RecordItem;