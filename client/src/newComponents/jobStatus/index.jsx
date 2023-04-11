import './styles.css';

const JobStatus = ({ status }) => {
    switch (status) {
      case 'open':
        return (<span className="jobStatus">Actively recruiting</span>);
      case 'closed':
        return (<span className="jobStatus">No longer accepting applications</span>);
      case 'draft':
        return (<span className="jobStatus">Still in draft</span>);
      default:
        return (<span className="jobStatus">No status</span>);
    }
};

export default JobStatus;
