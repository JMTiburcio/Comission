import React from 'react';
import './styles.css';
import ManageItem from '../manageItem';

function ManageContainer({ }) {
  return (
    <section className='manageContainer__section'>
      <div className='manageContainer'>
        <h1 className='manageContainer__header'>Posted Jobs</h1>
        <div className='manageContainer__filterBar'>
          <ul className='manageContainer__filterList'>
            <li><button className='manageContainer__button'>Draft</button></li>
            <li><button className='manageContainer__button'>Filter</button></li>
            <li><button className='manageContainer__button'>Save</button></li>
          </ul>
        </div>
        <ul className='manageContainer__resultList'>
          <li>
            <ManageItem/>
          </li>
          <li>
            <ManageItem/>
          </li>
          <li>
            <ManageItem/>
          </li>
          <li>
            <ManageItem/>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ManageContainer;
