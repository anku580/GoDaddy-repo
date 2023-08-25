import React from "react";
import { Link } from "react-router-dom";
import { useRepositoryList } from "../utils/useRepositoryList";
import Loader from "./Loader";
import RepositoryCard from "./RepositoryCard";

const RepositoryList = () => {
  const [loading, repositoryList] = useRepositoryList();

  return (
    <div className="container mx-auto bg-gray-600 h-full">
      <div className="p-10 text-white h-full">
        <h1 className="text-4xl font-bold">GoDaddy Repository List</h1>
        <div className="h-[95%] mt-5 p-5 overflow-auto">
          {loading ? (
            <div className="flex h-[500px] justify-center items-center">
              <Loader />
            </div>
          ) : (
            repositoryList.map((repository) => {
              return (
                <Link
                  key={repository.id}
                  to={"/repository/" + repository.id}
                  state={{ repositoryInfo: repository }}
                >
                  <RepositoryCard {...repository} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryList;
