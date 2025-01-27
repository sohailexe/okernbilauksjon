import React from "react";

const Table = () => {
  return (
    <table className="  ">
      <tbody>
        <tr className="">
          <th className="px-4 py-1 text-lg font-bold">Sunday</th>
          <td className="px-4 py-1">Closed</td>
        </tr>
        <tr className="">
          <th className="px-4 py-1 text-lg font-bold">Monday</th>
          <td className="px-4 py-1">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-1 text-lg font-bold">Tuesday</th>
          <td className="px-4 py-1">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-1 text-lg font-bold">Wednesday</th>
          <td className="px-4 py-1">9am - 5pm</td>
        </tr>
        <tr className="">
          <th className="px-4 py-1 text-lg font-bold">Thursday</th>
          <td className="px-4 py-1">9am - 5pm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
