const MenuButtonFilter = ({ title }) => (
  <div className="outer button mb-3">
    <button >{title}</button>
    <span></span>
    <span></span>
  </div>
);

const MenuButtonProfile = ({ evento, title }) => (
  <div className="outer button mb-3">
    <button onClick={() => evento()}>{title}</button>
    <span></span>
    <span></span>
  </div>
);

export {MenuButtonFilter, MenuButtonProfile};
