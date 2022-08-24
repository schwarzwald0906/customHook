import { UserCard } from "./components/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    id: 1,
    name: "じゃけえ",
    email: "abc@aa.com",
    address: "東京"
  };
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
