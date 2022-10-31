import './styles.css';
import CreateIcon from '@mui/icons-material/Create';

const JobApply = ({ job, user, applyHandler }) => (
  <button
    className={`jobs__applyButton${job.applicants.includes(user._id) ? '--cancel' : ''}`}
    onClick={applyHandler}
    type="button"
  >
    {(job.applicants.includes(user._id) ? '' : <CreateIcon style={{ fontSize: 18 }} />)}
    {(job.applicants.includes(user._id) ? 'Cancel' : 'Apply')}
  </button>
);

export default JobApply;
