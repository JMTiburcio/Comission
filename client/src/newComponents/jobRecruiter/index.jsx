import './styles.css';

const JobRecruiter = ({ recruiter }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="JobRecruiter">
      <h3>Meet the hiring team</h3>
      <section>
        <img alt="#" src={recruiter.profilePicture ? PF + recruiter.profilePicture : `${PF}person/noAvatar.png`} />
        <div className="jobView__recruiterDesc">
          <h5>{recruiter.username}</h5>
          <p>Tech Recruiter | Analista de Recrutamento e Seleção na Comission</p>
        </div>
        <a href="#">Message</a>
      </section>
    </div>
);
};

export default JobRecruiter;
