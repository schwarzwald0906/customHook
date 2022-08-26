import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import { User } from "../types/api/user";
import axios from "axios";

export const AllUsers = () => {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    setError(false);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.street}${user.address.suite}${user.address.city}`
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { userProfile, error, loading, getUsers };
};
