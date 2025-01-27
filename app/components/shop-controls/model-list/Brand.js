export const Brand = ({ name, id, num, active, setActive, children }) => {
  const handleClick = (e) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="font-light">
      <button
        className="toggle-btn flex justify-between w-full py-2 mb-2 hover:text-primary"
        onClick={handleClick}
      >
        {name} <span>({num})</span>
      </button>
      <ul id="" className={active === id ? "" : "hidden"}>
        {children}
      </ul>
    </div>
  );
};
