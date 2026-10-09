
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';

function Home() {

    const navigate = useNavigate();

    const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Home</h1>

      <p>Welcome to the application!</p>

      <h2>User List</h2>
<UserList />
       <button onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default Home;