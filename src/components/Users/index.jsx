import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-6 mt-2">
      {data.map((user) => {
        return (
          <li
            key={user.id}
            className="block p-2 shadow rounded bg-gray-100 hover:bg-blue-100"
          >
            <Link href={`/users/${user.id}`}>
              <h1 className="text-xl font-bold truncate">{user.name}</h1>
              <p className="text-lg truncate">{user.email}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
