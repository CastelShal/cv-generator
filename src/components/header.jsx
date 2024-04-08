import '../styles/header.css'

export default function Header({name, title, phone, mail, website}) {
    return (
        <header>
            <div style={{ marginRight: "auto" }}>
                {name.split(" ").map( frag =><h1>{frag}</h1> )}
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