import { Card, Button, ButtonGroup } from "@blueprintjs/core";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
export default function Home() {
  const [page, setPage] = useState(1);
  const fetchCharacters = async () => {
    return axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.data)
      .catch((error) => error);
  };

  const { data, isLoading, isPreviousData } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  });

  return (
    <div className="container">
      {isLoading && <div>Loading....</div>}
      {data && (
        <>
          <div className="buttons">
            <ButtonGroup>
              <Button disabled={!data.info.prev} onClick={() => setPage((prev) => prev - 1)} large>
                Previous
              </Button>
              <Button
                disabled={page == data.info.pages}
                onClick={() => setPage((prev) => prev + 1)}
                large
              >
                Next
              </Button>
            </ButtonGroup>
            <div>{`Page ${page} of ${data.info.pages}`}</div>
          </div>
          <div className="grid">
            {data.results.map((item, index) => {
              return (
                <Card className="character" key={`item_${index}`}>
                  <img src={item.image} />
                  <div className="meta">
                    <h1>{item.name}</h1>
                    <div className="species">{item.species}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
