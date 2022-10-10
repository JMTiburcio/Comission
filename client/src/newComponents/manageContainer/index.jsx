import React from 'react';
import './styles.css';

function ManageContainer({ }) {
  return (
    <section className='manageContainer'>
      <h1>Posted Jobs</h1>
      <div>
        <ul className='manageContainer__filterList'>
          <li><button>Draft</button></li>
          <li><button>Filter</button></li>
          <li><button>Save</button></li>
        </ul>
      </div>
      <ul className='manageContainer__resultList'>
        <li>
          <div className='manageContainer__resultItem'>
            <div className='manageContainer__resultImg'><img src="#" alt="#" /></div>
            <div className='manageContainer__resultContent'>Content</div>
            <div className='manageContainer__resultAction'>dropdown menu</div>
          </div>
        </li>
        <li>
          <div className='manageContainer__resultItem'>
            <div className='manageContainer__resultImg'><img src="#" alt="#" /></div>
            <div className='manageContainer__resultContent'>Content</div>
            <div className='manageContainer__resultAction'>dropdown menu</div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ManageContainer;
