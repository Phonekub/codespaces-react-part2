export default function MouseEvent(){
    return (
    <h1 
    onMouseEnter={e=>alert("onMouseEnter")}
    onMouseDown={e=>alert("Down")}
    onMouseOver={e=>alert("Over")}
    onMouseLeave={e=>alert("Leave")}
    onMouseUp={e=>alert("Up")}
    onClick={e=>alert("onclick")}
    >
        Click Me</h1>);
}