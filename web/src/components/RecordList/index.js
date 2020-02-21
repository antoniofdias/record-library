import React from 'react';
import RecordItem from '../RecordItem'

import './styles.css';

function RecordList({ records }) {
  return (
    <ul>
      {records.map(record => (
        <RecordItem key={record._id} record={record} />
      ))}
    </ul>
  );
}

export default RecordList;