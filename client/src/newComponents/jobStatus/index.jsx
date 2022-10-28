import './styles.css';

const JobStatus = ({ status }) => {
    switch (status) {
      case 'open':
        return (<span className="jobStatus">Actively recruiting</span>);
      case 'closed':
        return (<span className="jobStatus">No longer accepting applications</span>);
      case 'draft':
        return '';
      default:
        return (<span className="jobStatus">Unknown status</span>);
    }
};

export default JobStatus;
