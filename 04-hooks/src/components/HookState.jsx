import { useState } from "react";

const HookState = () => {
  const [State, SetState] = useState(0);

  return (
    <div className="container text-center">
      <h1>useEstate</h1>
      <hr />
    </div>
  );
};

export default HookState;
