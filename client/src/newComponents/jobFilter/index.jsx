import { useState, useRef, useEffect } from 'react';
import './styles.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const JobFilter = ({ filter, options, handleSearch, query, setQuery, param }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleBtnFilled = () => {
    if (param === 'date') { return query.date === 'Any Time'; }
    if (param === 'type') { return !query.type.length; }
    if (param === 'workPlace') { return !query.workPlace.length; }
    if (param === 'company') { return query.company === ''; }
    return true;
  };

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const toggleDropdown = open ? '--show' : '';
  const toggleBtnFilled = handleBtnFilled() ? '' : '--filled';
  
  return (
    <div ref={menuRef} className="jobFilter">
      <button className={`jobFilter__button${toggleBtnFilled}`} onClick={() => setOpen(!open)} type="button">
        <span>{filter}</span>
        <ArrowDropDownIcon />
      </button>
      <div className={`jobFilter__dropdown${toggleDropdown}`}>
        { param !== 'company' ? (
          <ul className="jobFilter__options">
            { options.map((option, i) => (
              <li key={i + 1} className="jobFilter__option">
                <input
                  checked={param === 'date' ? query[param] === option : (query[param].includes(option))}
                  id={`jobFilter__${option}`}
                  name={param}
                  onChange={(e) => {
                  if (param === 'type' || param === 'workPlace') {
                    if (!query[param].includes(option)) {
                      setQuery({ ...query, [param]: [...query[param], e.target.value] });
                    } else {
                      setQuery({
                        ...query,
                        [param]: [...query[param].slice(0, query[param].indexOf(option)),
                                    ...query[param].slice(query[param].indexOf(option) + 1)]
                      });
                    }
                  } else {
                    setQuery({ ...query, [param]: e.target.value });
                  }
                }}
                  type={param === 'date' ? 'radio' : 'checkbox'}
                  value={option}
                />
                <label
                  className="jobFilter__label"
                  htmlFor={`jobFilter__${option}`}
                >
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )
          : (
            <form>
              <input
                onChange={(e) => {
                setQuery({ ...query, [param]: e.target.value });
              }}
                placeholder="Add a company"
                type="text"
              />
            </form>
        )}
        
        <footer className="jobFilter__footer">
          <button className="jobFilter__search" onClick={handleSearch} type="button">Search</button>
          <button className="jobFilter__cancel" onClick={() => setOpen(!open)} type="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default JobFilter;
