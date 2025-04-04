import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

const CheckoutButtons = ({ set, hardwareCounts, handleCheckout, joined, projectId, setStatusMessage }) => {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(isNaN(value) ? 0 : value);
  };

  const apiCall = async (type) => {
    try {
      const res = await fetch(`http://localhost:5000/${type}?projectId=${projectId}&qty=${quantity}`);
      const data = await res.json();
      setStatusMessage(data.message); // <-- update status message
      handleCheckout(set, type === "checkout" ? quantity : -quantity);
    } catch (err) {
      setStatusMessage("API call failed.");
      console.error(err);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <TextField
        label="Qty"
        type="number"
        value={quantity}
        onChange={handleInputChange}
        inputProps={{ min: 0, max: 10 }}
        size="small"
        sx={{ width: 80 }}
        disabled={!joined}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={!joined || hardwareCounts[set] + quantity > 10 || quantity <= 0}
        onClick={() => apiCall("checkout")}
      >
        Checkout
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled={!joined || hardwareCounts[set] - quantity < 0 || quantity <= 0}
        onClick={() => apiCall("checkin")}
      >
        Check-in
      </Button>
    </Stack>
  );
};

export default CheckoutButtons;

// import React, { useState } from "react";
// import { Button, Stack, TextField } from "@mui/material";

// const CheckoutButtons = ({ set, hardwareCounts, handleCheckout, joined }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleInputChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= 0) {
//       setQuantity(value);
//     } else {
//       setQuantity(0);
//     }
//   };

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <TextField
//         label="Qty"
//         type="number"
//         value={quantity}
//         onChange={handleInputChange}
//         inputProps={{ min: 0, max: 10 }}
//         size="small"
//         sx={{ width: 80 }}
//         disabled={!joined}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         disabled={!joined || hardwareCounts[set] + quantity > 10 || quantity <= 0}
//         onClick={() => handleCheckout(set, quantity)}
//       >
//         Checkout
//       </Button>
//       <Button
//         variant="contained"
//         color="secondary"
//         disabled={!joined || hardwareCounts[set] - quantity < 0 || quantity <= 0}
//         onClick={() => handleCheckout(set, -quantity)}
//       >
//         Check-in
//       </Button>
//     </Stack>
//   );
// };

// export default CheckoutButtons;
