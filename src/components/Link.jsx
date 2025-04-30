export default function Link({ text, url, icon, image }) {
    return (
        <a className="links" href={url} target="_blank" rel="noopener noreferrer">
            {/* Mostra o ícone se existir e não tiver imagem */}
            {icon && !image && (
                <i
                    className={`bi ${icon}`}
                    style={{ fontSize: "25px", marginRight: "10px" }}
                ></i>
            )}

            {/* Mostra a imagem se existir e não tiver ícone */}
            {image && !icon && (
                <img
                    src={image}
                    alt={text}
                    style={{ width: "35px", height: "20px", marginRight: "10px" }}
                />
            )}

            {text}
        </a>
    );
}  