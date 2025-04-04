import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import JoinButton from "./JoinButton";
import CheckoutButtons from "./CheckoutButtons";

const ProjectItem = ({ project, hardwareCounts, handleCheckout }) => {
  const [joined, setJoined] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // new

  return (
    <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>

        <Box sx={{ marginY: 1 }}>
          <Typography variant="body1">Hardware Set A: {hardwareCounts.A}/10</Typography>
          <CheckoutButtons
            set="A"
            hardwareCounts={hardwareCounts}
            handleCheckout={handleCheckout}
            joined={joined}
            projectId={project.id}
            setStatusMessage={setStatusMessage} // pass down
          />
        </Box>

        <Box sx={{ marginY: 1 }}>
          <Typography variant="body1">Hardware Set B: {hardwareCounts.B}/10</Typography>
          <CheckoutButtons
            set="B"
            hardwareCounts={hardwareCounts}
            handleCheckout={handleCheckout}
            joined={joined}
            projectId={project.id}
            setStatusMessage={setStatusMessage} // pass down
          />
        </Box>

        <JoinButton
          joined={joined}
          setJoined={setJoined}
          projectId={project.id}
          setStatusMessage={setStatusMessage} // pass down
        />

        {statusMessage && (
          <Box mt={2}>
            <Typography variant="body2" color="text.secondary">
              {statusMessage}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectItem;


// import React, { useState } from "react";
// import { Card, CardContent, Typography, Box } from "@mui/material";
// import JoinButton from "./JoinButton";
// import CheckoutButtons from "./CheckoutButtons";

// const ProjectItem = ({ project, hardwareCounts, handleCheckout }) => {
//   const [joined, setJoined] = useState(false);

//   return (
//     <Card variant="outlined" sx={{ marginBottom: 2, padding: 2 }}>
//       <CardContent>
//         <Typography variant="h6">{project.name}</Typography>

//         <Box sx={{ marginY: 1 }}>
//           <Typography variant="body1">Hardware Set A: {hardwareCounts.A}/10</Typography>
//           <CheckoutButtons set="A" hardwareCounts={hardwareCounts} handleCheckout={handleCheckout} joined={joined} />
//         </Box>

//         <Box sx={{ marginY: 1 }}>
//           <Typography variant="body1">Hardware Set B: {hardwareCounts.B}/10</Typography>
//           <CheckoutButtons set="B" hardwareCounts={hardwareCounts} handleCheckout={handleCheckout} joined={joined} />
//         </Box>

//         <JoinButton joined={joined} setJoined={setJoined} />
//       </CardContent>
//     </Card>
//   );
// };

// export default ProjectItem;
