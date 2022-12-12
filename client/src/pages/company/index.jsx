import { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { axiosInstance } from '../../config';

import Topbar from '../../components/topbar';
import CompanyCover from "../../newComponents/companyCover";
import CompanyAbout from "../../newComponents/companyAbout";
import ManageAside from "../../newComponents/manageAside";


import './styles.css';

const Company = () => {
  const [company, setCompany] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axiosInstance.get(`/companies?name=${name}`);
        setCompany(res.data);
    };
    fetchUser();
  }, [name]);
  
  return (
    <>
      <Topbar />
      <div className="company">
        <section>
          <CompanyCover company={company}/>
          <CompanyAbout company={company}/>
        </section>
        <ManageAside />
      </div>
    </>
  );
};

export default Company;
