export const PropertyItem = ({ children }) => {
  return (
    <li className="">
      <a
        href="#"
        className="h-full w-full flex justify-center items-center py-3 rounded-xl mb-1 border hover:border-primary hover:text-primary"
      >
        {children}
      </a>
    </li>
  );
};
