import Image from "next/image";

const Card = (props) => {
    const{image, title, description} = props;
    return(
        <div style={{backgroundColor: 'grey', padding: '20px', margin: '20px'}}>
            <Image
                src={image}
                alt='Next.js Logo'
                width={180}
                height={37}
                priority
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Ver más</button>
        </div>
    )
}

export default Card