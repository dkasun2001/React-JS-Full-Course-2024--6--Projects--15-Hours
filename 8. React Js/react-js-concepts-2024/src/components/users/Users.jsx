//------------------------------------ data fetching using useEffect
//------------------------------------ manage loading state

import { useEffect, useState } from "react";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false); // manage loading state

  const fetchAllUsers = async () => {
    try {
      setPending(true);
      const apiResponce = await fetch("https://dummyjson.com/users");
      const result = await apiResponce.json();

      if (result?.users) {
        setUsersList(result.users);
        setPending(false);
      } else {
        setUsersList([]);
        setPending(false);
      }

      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchListUsers = () => {
    fetchAllUsers();
  };

  // data fetching using useEffect

  /*  useEffect(() => {
    fetchAllUsers();
  }, []); */

  console.log(usersList);

  if (pending) return <h4>Fetching users! Please wait</h4>;

  return (
    <div>
      <h1>All Users List</h1>
      <button onClick={handleFetchListUsers}>Fetch Users</button>
      <ol>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem?.id}>
              <p>
                {userItem.firstName} {userItem.lastName}
              </p>
            </li>
          ))
        ) : (
          <h4>No users found! Please try again later</h4>
        )}
      </ol>
    </div>
  );
};

export default Users;
