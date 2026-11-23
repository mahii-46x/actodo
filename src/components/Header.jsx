function Header(props)
{
    return(
        <div>
    <h1 className="font-bold text-3xl">Hello {props.name}</h1>
    <p>I Help you manage your Activities :)</p>
    </div>
    )
}

export default Header