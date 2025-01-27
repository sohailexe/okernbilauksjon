export const BrandItem = ({ name }) => {
  return (
    <li>
      <a
        href="#"
        className="h-full w-full flex justify-center items-center py-3 rounded-xl mb-1 border hover:text-primary hover:border-primary"
      >
        {name}
      </a>
    </li>
  );
};
