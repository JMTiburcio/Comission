import React, { useState } from 'react';
import './styles.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function JobFilter({ filter, options, handleSearch, query, setQuery, param }) {
  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!open)
  }

  const handleBtnFilled = () => {
    if(param === "date"){ return query.date === "Any Time" }
    if(param === "type"){ return !query.type.length }
    if(param === "workPlace"){ return !query.workPlace.length }
    if(param === "company"){ return query.company === "" }
    return true
  }

  const toggleDropdown = open ? "--show" : ""
  const toggleBtnFilled = handleBtnFilled() ? "" : "--filled"
  
  return (
    <div className='jobFilter'>
      <button className={`jobFilter__button${toggleBtnFilled}`} onClick={handleDropDown}>
        <span>{filter}</span>
        <ArrowDropDownIcon />
      </button>
      <div className={`jobFilter__dropdown${toggleDropdown}`}>
        { param !== "company" ?
          <ul className='jobFilter__options'>
            { options.map((option, i) => (
            <li key={i+1} className='jobFilter__option'>
              <input 
                type={param === "date" ? "radio" : "checkbox"}
                name={param}
                value={option}
                id={"jobFilter__"+option}
                onChange={(e) => {
                  if(param === "type" || param === "workPlace") {
                    if(!query[param].includes(option)){
                      setQuery({...query, [param]:[...query[param], e.target.value]})
                    } else {
                      setQuery({...query, [param]:[...query[param].slice(0, query[param].indexOf(option)), ...query[param].slice(query[param].indexOf(option)+1)]})
                    }
                  } else {
                    setQuery({...query, [param]:e.target.value})
                  }
                }}
                checked={param === "date" ? query[param] === option : (query[param].includes(option))}
              />
              <label 
                className='jobFilter__label'
                htmlFor={"jobFilter__"+option}
              >
                {option}
              </label>
            </li>  
            ))}
          </ul>
          :
          <form>
            <input 
              type="text" 
              placeholder='Add a company'
              onChange={e => {
                setQuery({...query, [param]: e.target.value})
              }}
            />
          </form>
        }
        
        <footer className='jobFilter__footer'>
          <button className='jobFilter__search' onClick={handleSearch}>Search</button>
          <button className='jobFilter__cancel' onClick={handleDropDown}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default JobFilter;
