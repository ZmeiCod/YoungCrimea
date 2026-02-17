import React, { useState, useEffect } from "react";
import RichPeopleTable from "./Table";

export default function Fetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/random.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки JSON");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return <RichPeopleTable data={data} />;
}
