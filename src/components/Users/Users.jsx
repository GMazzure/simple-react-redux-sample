import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectByMinAge } from "../../store/slices/users";

const Users = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const { loading, error } = useSelector((state) => state.users);

  const users = useSelector(selectByMinAge(counter))
  const orderedUsers = useMemo(() => {
    let localUsers = [...(users || [])]
    localUsers?.sort((a, b) => {
      if (a.age < b.age) return 1;
      if (a.age > b.age) return -1;
      return 0;
    });

    return localUsers
  }, [users])

  React.useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to fetch...</div>;

  if (users)
    return (
      <>
        <div className="flex-col p-5 w-full">
          <div className="w-full bg-neutral-300 text-center p-3"> Filtered users: </div>
          <table className="w-full">
            <thead>
              <tr className="font-bold bg-slate-200">
                <td className="w-1/2 text-right p-2">User</td>
                <td className="w-1/2 p-2">Age</td>
              </tr>
            </thead>
            <tbody>
              {orderedUsers.map((user) => (
                <tr className="odd:bg-slate-50">
                  <td className="text-right p-1 px-3">{user.name}</td>
                  <td className="p-1 px-3">{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </>

    );
};

export default Users;
