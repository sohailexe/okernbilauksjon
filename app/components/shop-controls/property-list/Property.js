export const Property = ({ id, name, active, setActive, children }) => {
  const isThisActive = id === active;

  const handleClick = (e) => {
    setActive((prev) => (prev === id ? null : id));
  };
  return (
    <div className="font-light">
      <button
        className="toggle-btn flex justify-between w-full py-2 mb-2 border-t font-semibold hover:text-primary"
        aria-controls="prop-1"
        onClick={handleClick}
      >
        {name} <span>{isThisActive ? "-" : "+"}</span>
      </button>
      <ul id="prop-1" className={isThisActive ? "" : "hidden"}>
        {children}
      </ul>
    </div>
  );
};
