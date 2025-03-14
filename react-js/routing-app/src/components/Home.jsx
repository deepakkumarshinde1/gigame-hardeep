import { useBasicDetailsContext } from "../context/basic.details.context";

function Home() {
  let { users } = useBasicDetailsContext();
  return (
    <div>
      Home
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
