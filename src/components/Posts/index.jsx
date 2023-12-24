// Library Imports
import React, { useCallback, useEffect, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      throw new Error("no such action type!");
  }
};

export const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to retrieve data because an error occurred");
      }
      const json = await res.json();
      dispatch({
        type: "end",
        data: json,
      });
    } catch (error) {
      dispatch({
        type: "error",
        error,
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (state.loading) {
    return <div className="">Loading...</div>;
  }
  if (state.error) {
    return <div className="">{state.error.message}</div>;
  }
  if (state.data.length === 0) {
    return <div className="">No data...</div>;
  }

  return (
    <>
      <div className="block">
        <ol className="list-decimal">
          {state.data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      </div>
    </>
  );
};
