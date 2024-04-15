import '../styles/header.css'

export default function Header({name = "John Doe", title = "Project Lead", phone = '123456789', mail = 'dummy@example.com', website = "example.com"}) {
    return (
        <header>
            <div style={{ marginRight: "auto" }}>
                {name?.split(" ").map( frag =><h1>{frag}</h1> )}
                <h2>{title}</h2>
            </div>
            <div style={{ paddingTop: "20px" }}>
                <p>{phone}</p>
                <p>{mail}</p>
                <p>{website}</p>
            </div>
        </header>
    )
}