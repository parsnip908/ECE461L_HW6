import React from "react";
import { Button } from "@mui/material";

const JoinButton = ({ joined, setJoined, projectId, setStatusMessage }) => {
  const handleToggleJoin = async () => {
    const endpoint = joined ? "leave" : "join";
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${endpoint}?projectId=${projectId}`);
      const data = await res.json();
      setStatusMessage(data.message); // <-- update status message
      setJoined(!joined);
    } catch (err) {
      setStatusMessage("Failed to join/leave project.");
      console.error(err);
    }
  };

  return (
    <Button
      variant="contained"
      color={joined ? "error" : "primary"}
      onClick={handleToggleJoin}
    >
      {joined ? "Leave Project" : "Join Project"}
    </Button>
  );
};

export default JoinButton;

// import React from "react";
// import { Button } from "@mui/material";

// const JoinButton = ({ joined, setJoined }) => {
//   return (
//     <Button
//       variant="contained"
//       color={joined ? "error" : "primary"}
//       onClick={() => setJoined(!joined)}
//     >
//       {joined ? "Leave Project" : "Join Project"}
//     </Button>
//   );
// };

// export default JoinButton;
