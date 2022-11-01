import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';
import ManageItem from '../manageItem';
import { sortByDate } from '../../utils';
import './styles.css';

const buttonFilter = (filter, label) => (filter === label ? 'manageContainer__filter--active' : 'manageContainer__filter');

const JobButton = ({ filter, label, setFilter, setJobData }) => (
  <button 
    className={`${buttonFilter(filter, label)}`} 
    onClick={() => {
      setJobData([]);
      setFilter(label);
    }} 
    type="button"
  >
    {label}
  </button>
);

const ManageContainer = ({ page }) => {
  const { user } = useContext(AuthContext);
  const [jobData, setJobData] = useState([]);
  const [filter, setFilter] = useState(page === 'postedJob' ? 'Open' : 'Applied');

  useEffect(() => {
    const fetchJobs = async () => {
      const query = { userId: user._id, status: filter.toLowerCase() };
      const isApplied = ['Applied', 'Saved'].includes(filter);
      
      const result = isApplied
        ? await axiosInstance.get(`/users/appliedjobs/${user._id}`)
        : await axiosInstance.get('/users/postedjobs/', { params: query });

      result?.data && setJobData(result.data.sort(sortByDate));
    };
    fetchJobs();
  }, [user, filter]);

  return (
    <section className="manageContainer__section">
      <div className="manageContainer">
        <h1 className="manageContainer__header">{page === 'postedJob' ? 'Posted Jobs' : 'My Jobs'}</h1>
        <div className="manageContainer__filterBar">
          <ul className="manageContainer__filterList">
            {page === 'postedJob' && <li><JobButton filter={filter} label="Open" setFilter={setFilter} setJobData={setJobData} /></li>}
            {page === 'postedJob' && <li><JobButton filter={filter} label="Draft" setFilter={setFilter} setJobData={setJobData} /></li>}
            {page === 'postedJob' && <li><JobButton filter={filter} label="Close" setFilter={setFilter} setJobData={setJobData} /></li>}
            {page === 'savedJob' && <li><JobButton filter={filter} label="Applied" setFilter={setFilter} setJobData={setJobData} /></li>}
          </ul>
        </div>
        <ul className="manageContainer__resultList">
          {jobData.map((job) => (
            <li key={job._id}>
              <ManageItem filter={filter} job={job} jobData={jobData} setJobData={setJobData} user={user} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ManageContainer;
