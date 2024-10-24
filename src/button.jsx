function Print (){
    console.log("Hello Wajdan");
    
}

export default function Button (){

    return (
        <div>
            <button onClick={Print}>Click me</button>
        </div>
    )
}