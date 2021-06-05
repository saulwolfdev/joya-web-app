import Image from 'next/image'

const Img = (props) => {
    return (
        <Image src={props.src} alt={props.alt} width={props.width} height={props.height}/> 
    );
}

export default Img;