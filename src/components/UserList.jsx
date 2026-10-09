
import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

function UserList() {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    try {
      setIsLoading(true);
      setError('');

      const data = await fetchUsers();

      setUsers(data);
    } catch (error) {
      console.error(error);

      setError('Unable to load users');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;