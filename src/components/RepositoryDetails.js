import React from "react";
import { useLocation } from "react-router-dom";

const RepositoryDetails = () => {
  const location = useLocation();
  const {
    name,
    description,
    html_url,
    language,
    open_issues_count,
    forks_count,
    watchers_count,
  } = location.state?.repositoryInfo;

  return (
    <div className="flex items-center justify-center">
      <div
        data-testid="repositoryDetails"
        className="flex m-5 text-left flex-col gap-5 bg-stone-600 p-10 rounded-xl text-white w-[50%] items-center"
      >
        <div className="text-5xl">{name}</div>
        <div>{description}</div>
        <div>
          <a
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            target="_blank"
            href={html_url}
            rel="noreferrer"
          >
            Open on github
          </a>
        </div>
        <div>Languages: {language}</div>
        <div>Open Issuse - {open_issues_count}</div>
        <div>Forks - {forks_count}</div>
        <div>Watchers- {watchers_count}</div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
