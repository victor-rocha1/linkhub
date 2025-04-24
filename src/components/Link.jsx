export default function Link(props) {
    return (
        <a className="links" href={props.url}>{props.text}</a>
    )
}