import './App.css';

export default function Profile(props) {
    console.log(props)
    return (
        <div className='App-header'>
            <h2>{props.day.toLocaleTimeString()}</h2>
            <h1>React</h1>
            <p>{props.bio}</p>
            {props.show ? <p>{props.fullName}</p> : null}
            <button onClick={props.action}>{props.show ? "Afficher moins" : "Afficher plus"}</button>
        </div>
    )
}
