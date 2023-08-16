const Prueba = ({handleToggleGenreMenu, title}) => {
    return(
        <div className="outer button">
            <button onClick={handleToggleGenreMenu}>{title}</button>
            <span></span>
            <span></span>
         </div>
    )
}

export default Prueba;