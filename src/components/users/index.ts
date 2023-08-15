import { SimpleGrid } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/users' or its correspond... Remove this comment to see the full error message
import { useUsers } from "hooks/users";
import User from "./User";

export default function Users() {
  const { users, isLoading } = useUsers();

  if (isLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'SimpleGrid' refers to a value, but is being used ... Remove this comment to see the full error message
    <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
      // @ts-expect-error TS(2349): This expression is not callable.
      {users?.map((user) => (
        // @ts-expect-error TS(2749): 'User' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <User key={user.id} user={user} />
      ))}
    </SimpleGrid>
  );
}