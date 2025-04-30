export default function Link({ text, url, icon, image }) {
    return (
        <a className="links" href={url} target="_blank" rel="noopener noreferrer">
            {icon && <i className={`bi ${icon}`} style={{ fontSize:"25px", marginRight: "10px" }}></i>}
            {image && <img src={image} alt={text} style={{ width: "35px", height:"20px", marginRight: "10px" }} />}
            {text}
        </a>
    );
}  