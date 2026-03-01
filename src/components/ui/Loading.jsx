
import React from 'react'

const Loading = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    spinner: {
      width: "40px",
      height: "40px",
      border: "4px solid #ccc",
      borderTop: "4px solid #333",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
}

export default Loading;