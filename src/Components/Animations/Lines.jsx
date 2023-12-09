const AnimatedTitle = ({title}) => {
    return (
        <div className="containery">
            <svg className='loopertitle' viewBox="0 0 960 300">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">{title}</text>
                </symbol>

                <g className="g-ants">
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                    <use href="#s-text" className="text-copy"></use>
                </g>
            </svg>
        </div>
    );
}

const AnimatedTitleSm  = ({title}) => {
    return (
        <div className="containery">
            <svg className='loopertitleSm' viewBox="0 0 960 300">
                <symbol id="s-text1">
                    <text textAnchor="middle" x="50%" y="80%">{title}</text>
                </symbol>

                <g className="g-ants">
                    <use href="#s-text1" className="text-copy"></use>
                    <use href="#s-text1" className="text-copy"></use>
                    <use href="#s-text1" className="text-copy"></use>
                    <use href="#s-text1" className="text-copy"></use>
                    <use href="#s-text1" className="text-copy"></use>
                </g>
            </svg>
        </div>
    );
}
export {AnimatedTitle, AnimatedTitleSm};