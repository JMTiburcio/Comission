import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { axiosInstance } from '../../config';


const DropDownOption = ({ click=false, Icon, link=false, option } ) => { 
  return (
    <div className="manageItem__dropdownOption">
      { link && (
        <a className="dropDownOption__link" href={link}>
          <Icon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }}/>
          <span>{option}</span>
        </a>
      )}
      
      { click && (
        <a className="dropDownOption__link" onClick={click}>
          <Icon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }}/>
          <span>{option}</span>
        </a>
      )}
    </div>
)}


const JobDropdown = ({ filter, job, jobData, setJobData, user }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, { data: { userId: user._id } });
      setJobData([...jobData.filter((e) => e._id !== job._id)]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async () => {
    try {
      const isOpen = filter === 'Open';

      isOpen
        ? await axiosInstance.put(`/jobs/${job._id}`, { userId: user._id, status: 'closed' })
        : await axiosInstance.put(`/jobs/${job._id}`, { userId: user._id, status: 'open' });

      setJobData([...jobData.filter((e) => e._id !== job._id)]);
      } catch (err) {
      console.log(err);
  }
  };

  return (
    <>
      { filter === 'Open' && (
        <>
          <DropDownOption link={`/myJob/${job._id}`} Icon={WorkIcon} option="manage job" />
          <DropDownOption click={handleStatus} Icon={CreateIcon} option="close job" />
          <DropDownOption link={`/myJob/${job._id}/applicants`} Icon={GroupsIcon} option="view applicants" />
          <DropDownOption link={`/job/view/${job._id}`} Icon={PersonIcon} option="view job as candidate" />
        </> 
      )}

      { filter === 'Draft' && (
        <>
          <DropDownOption link={`/myJob/${job._id}`} Icon={WorkIcon} option="manage job" />
          <DropDownOption click={handleDelete} Icon={DeleteIcon} option="delete draft" />
        </>
      )}

      { filter === 'Closed' && (
        <>
          <DropDownOption link={`/myJob/${job._id}`} Icon={WorkIcon} option="manage job" />
          <DropDownOption click={handleStatus} Icon={CreateIcon} option="repost job" />
          <DropDownOption link={`/job/view/${job._id}`} Icon={PersonIcon} option="view job as candidate" />
        </>
      )}
    </>
)};

export default JobDropdown;
