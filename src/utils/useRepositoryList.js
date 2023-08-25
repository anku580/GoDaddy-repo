import { useEffect, useState } from "react";
import { GET_REPOSITORIES } from "../constants/ApiURLs";

export const useRepositoryList = () => {
  const [repositoryList, setRepositoryList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllRepositories();
  }, []);

  const fetchAllRepositories = async () => {
    setLoading(true);
    try {
      const resonse = await fetch(GET_REPOSITORIES);
      const dataInJSON = await resonse.json();

      setRepositoryList(dataInJSON);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return [loading, repositoryList];
};
