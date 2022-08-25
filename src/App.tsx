import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { UserProfile } from "./types/UserProfile";
import { useState } from "react";

export default function App() {
  const user = {
    id: 1,
    name: "じゃけえ",
    email: "abc@aa.com",
    address: "東京"
  };

  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);

  const onClickFetchUser = () => {
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
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>表示</button>
      {userProfile.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
