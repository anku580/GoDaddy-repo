import React from "react";

const RepositoryCard = (props) => {
  const { name, visibility } = props;
  return (
    <div
      data-testid="repCard"
      className="pb-3 p-5 sm:pb-4 bg-neutral-500 rounded-xl border border-black my-5 divide-gray-200 hover:bg-gray-50 hover:text-black"
    >
      <div className="flex items-center space-x-4">
        <div className="flex flex-row gap-3">
          <div className="text-left font-bold text-lg">{name}</div>
          <div className="text-red-400 font-bold px-2 border rounded-2xl border-black">
            {visibility}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
