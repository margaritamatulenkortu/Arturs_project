import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { Users } from "./Users"
import logo from "./logo.svg";

const query = `
  query listNotes {
    listNotes {
      id name completed
    }
  }
`;

const subscription = `
  subscription onCreateNote { 
    onCreateNote {
      id name completed
    }
  }
`;

async function fetchNotes() {
  const data = await API.graphql({ query });
  console.log("data from GraphQL:", data);
}

function subscribe() {
  ((API.graphql({
    query: subscription,
  }) as unknown) as any).subscribe({
    next: (noteData: unknown) => {
      console.log("noteData: ", noteData);
    },
  });
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  useEffect(() => {
    Promise.all([fetchNotes(), subscribe()])
      .then(() => {
        console.log("Finished with graphql");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Users/>
  );
}

export default App;
