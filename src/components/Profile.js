import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(1);
  }

  useEffect(() => {
    console.log("count has been updated");

    const timer = setInterval(() => {
      console.log("interval craeted functional component");
    }, 1000);

    return () => {
      console.log("functional component unmounted");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <h2>Count: {count}</h2>
      <button onClick={updateCount}>Update Count</button>
    </>
  );
};

export default Profile;
