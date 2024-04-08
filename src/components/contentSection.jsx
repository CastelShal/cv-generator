import '../styles/contentSection.css';

function contentSection({title, children, padding="20px"}) {
    return (
        <>
            <h3>{title}</h3>
            <hr />
            <div className="text" style={{paddingLeft: padding, marginBottom: "30px"}}>
                {children}
            </div>
        </>
    );
}

export default contentSection;