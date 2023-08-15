import { Box, Flex, Text } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/Avatar' or ... Remove this comment to see the full error message
import Avatar from "components/profile/Avatar";
// @ts-expect-error TS(2307): Cannot find module 'hooks/users' or its correspond... Remove this comment to see the full error message
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/UsernameBut... Remove this comment to see the full error message
import UsernameButton from "components/profile/UsernameButton";

export default function Header({
  post
}: any) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Flex
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      alignItems="center"
      // @ts-expect-error TS(2304): Cannot find name 'borderBottom'.
      borderBottom="2px solid"
      // @ts-expect-error TS(2304): Cannot find name 'borderColor'.
      borderColor="teal.100"
      // @ts-expect-error TS(2304): Cannot find name 'p'.
      p="3"
      // @ts-expect-error TS(2304): Cannot find name 'bg'.
      bg="gray.50"
    >
      // @ts-expect-error TS(2304): Cannot find name 'size'.
      <Avatar user={user} size="md" />

      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box ml="4">
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
        <UsernameButton user={user} />
        // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
        <Text fontSize="sm" color="gray.500">
          // @ts-expect-error TS(2304): Cannot find name 'ago'.
          {formatDistanceToNow(date: any)} ago
        </Text>
      </Box>
    </Flex>
  );
}