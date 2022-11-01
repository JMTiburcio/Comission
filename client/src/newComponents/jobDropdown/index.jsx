import './styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import { axiosInstance } from '../../config';


const JobDropdown = ({ filter, job, jobData, setJobData, open, user }) => {
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/jobs/${job._id}`, { data: { userId: user._id } });
      setJobData([...jobData.filter((e) => e._id !== job._id)]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = async () => {
    try {
      await axiosInstance.put(`/jobs/${job._id}`, {...job, status: 'closed'});
      setJobData([...jobData.filter((e) => e._id !== job._id)]);
      } catch (err) {
      console.log(err);
  }
  };


  const toggleDropdown = open ? '--show' : '';

  return (
    <div className={`manageItem__dropdown${toggleDropdown}`}>

      <div className="manageItem__dropdownOption">
        <a className="manageItem__link" href={`/myJob/${job._id}`}>
          <WorkIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
          <span>manage job</span>
        </a>
      </div>

      {
        filter === 'Open' && (
          <>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" onClick={handleClose}>
                <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>close Job</span>
              </a>
            </div>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" href={`/myJob/${job._id}/applicants`}>
                <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>view Applicants</span>
              </a>
            </div>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" href={`/myJob/${job._id}/applicants`}>
                <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>view job as candidate</span>
              </a>
            </div>
          </> 
        )
      }

      {
        filter === 'Draft' && (
          <>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" onClick={handleDelete}>
                <DeleteIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>delete draft</span>
              </a>
            </div>
          </>
        )
      }

      {
        filter === 'Closed' && (
          <>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" href={`/myJob/${job._id}/applicants`}>
                <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>repost Job</span>
              </a>
            </div>
            <div className="manageItem__dropdownOption">
              <a className="manageItem__link" href={`/myJob/${job._id}/applicants`}>
                <CreateIcon style={{ fontSize: 24, color: '#5e5e5e', marginRight: 5 }} />
                <span>view job as candidate</span>
              </a>
            </div>
          </>
        )
      }

    </div>
)};

export default JobDropdown;
