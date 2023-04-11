import './styles.css';
import CreateIcon from '@mui/icons-material/Create';

const JobApply = ({ openModal, isApplied }) => (
  <button
    className={`jobs__applyButton${isApplied ? '--cancel' : ''}`}
    onClick={() => openModal(isApplied)}
    type="button"
  >
    {(isApplied ? '' : <CreateIcon style={{ fontSize: 18 }} />)}
    {(isApplied ? 'Cancel' : 'Apply')}
  </button>
);

export default JobApply;
