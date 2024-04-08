function Project({ title="Campus Management", description= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio laudantium sequi quia nesciunt voluptates exercitationem autem animi odio dolore ab ut, cumque ducimus natus omnis quos quis aliquam iure in." }) {
    return (
        <>
            <h1 className="projHeader">{title}</h1>
            <p className="projDesc">{description}</p>
        </>
    );
}

export default Project;