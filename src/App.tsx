import { UserCard } from "./components/UserCard";
import "./styles.css";
import { AllUsers } from "./Hooks/AllUsers";

export default function App() {
  const { userProfile, error, loading, getUsers } = AllUsers();

  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>表示</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>読み込みに失敗しました</p>
      ) : loading ? (
        <p>loading...</p>
      ) : (
        <>
          {userProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
