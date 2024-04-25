const Footer = (props) => {
    const {redes} = props
    return(
        <footer>
            <nav>
                <ul>
                    {
                        redes.map((redesSociales, index) =>(
                            <li key={index}>
                                <a href={redesSociales.link}>{redesSociales.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default Footer