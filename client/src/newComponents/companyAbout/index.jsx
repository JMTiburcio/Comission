import "./styles.css"

const CompanyAbout = ({ company }) => {
    return(
        <>
        { company && (
        <div className="companyAbout">
            <h3>About</h3>
            <p>{company.about}</p>
            { company.website && (
                <>
                <h4>Website</h4>
                <span>{company.website}</span>
                </>
            )}
            <h4>Category</h4>
            <span>{company.category}</span>
            <h4>Company size</h4>
            <span>{company.size}</span>
            <span>{company.employees.length} on Comission</span>
            <h4>Founded</h4>
            <span>{company.founded}</span>
            <h4>Location</h4>
            <span>{company.location}</span>
        </div>)}
        </>
    )
}


export default CompanyAbout;