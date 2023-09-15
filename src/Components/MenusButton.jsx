const MenuButton = ({ evento, title }) => (
  <div className="outer button mb-3">
    <button onClick={evento}>{title}</button>
    <span></span>
    <span></span>
  </div>
);

export default MenuButton;
