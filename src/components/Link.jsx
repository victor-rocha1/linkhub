export default function Link(props){
    return (
        <div className="links">
            <a href={props.url}>{props.text}</a>
        </div>
    )
}