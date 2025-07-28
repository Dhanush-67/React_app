function Message(){
    const name = "Rai";
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hellow world</h1>;
}

export default Message;