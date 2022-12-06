import { useState, useContext } from 'react';
import './styles.css';
import CloseIcon from '@mui/icons-material/Close';

import { axiosInstance } from '../../config';
import { AuthContext } from '../../context/AuthContext';
import ApplyUserInfo from '../applyUserInfo';
import ApplyQuestions from '../../newComponents/applyQuestions';
import ApplyReview from '../../newComponents/applyReview';


const Modal = ({ open, onClose, job }) => {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [applyForm, setApplyForm] = useState({
    userId: user._id,
    jobId: job._id,
    email: user.email,
    phone: '',
    questions: job.screeningQuestions.map(q => {
      return {...q, applyAnswer: ""};
    }),
    status: 'on going'
  });

  const nextPage = () => {
    setPage(page + 1);
  };
  
  const previousPage = () => {
    setPage(page - 1);
  };

  const submitForm = async () => {
    try {
      const res = await axiosInstance.post('/apply', applyForm);
      console.log(res);
      setPage(1);
      onClose();
    } catch (err) {
      console.log(err);
    };
  };

  return (
    <>
      { open && (
        <div onClick={onClose} className='overlay'>
          <div
              onClick={(e) => {
              e.stopPropagation();
            }}
            className='modal__container'
          >
            <header>
              <h3>Apply to {job.company}</h3>
              <CloseIcon className="screeningQuestion__icon" onClick={onClose} />
            </header>
            <div className="modal__form">
              {page === 1 && 
                <ApplyUserInfo 
                  applyForm={applyForm} 
                  nextPage={nextPage} 
                  setApplyForm={setApplyForm} 
                  user={user} 
                />}
              {page === 2 && 
                <ApplyQuestions 
                  applyForm={applyForm} 
                  previousPage={previousPage} 
                  nextPage={nextPage} 
                  setApplyForm={setApplyForm} 
                />}
                {page === 3 && 
                <ApplyReview 
                  applyForm={applyForm} 
                  previousPage={previousPage} 
                  nextPage={submitForm} 
                  setApplyForm={submitForm} 
                />}
            </div>
          </div>
        </div>
      )}
    </>
)};

export default Modal;
