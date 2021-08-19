import React, { useEffect, useState } from "react";

const HookEffect = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.id);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    setUsers([
      {
        hola: "hola mundo",
      },
    ]);
    console.log(id);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1> useEffect</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            search
          </label>
          <input
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            type="text "
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookEffect;
