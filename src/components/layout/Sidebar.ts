import { Box, Button, Code, Stack } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useAuth } from "hooks/auth";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { PROTECTED, USERS } from "lib/routes";
import { Link } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/Avatar' or ... Remove this comment to see the full error message
import Avatar from "components/profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();

  if (isLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      // @ts-expect-error TS(2635): Type 'RegExp' has no signatures for which the type... Remove this comment to see the full error message
      <Code>@{user.username}</Code>
      <Button
        // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
        colorScheme="teal"
        // @ts-expect-error TS(2304): Cannot find name 'w'.
        w="full"
        // @ts-expect-error TS(2304): Cannot find name 'as'.
        as={Link}
        // @ts-expect-error TS(2304): Cannot find name 'to'.
        to={`${PROTECTED}/profile/${user.id}`}
      >
        // @ts-expect-error TS(2304): Cannot find name 'Edit'.
        Edit Profile
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box
      // @ts-expect-error TS(2304): Cannot find name 'px'.
      px="6"
      // @ts-expect-error TS(2304): Cannot find name 'height'.
      height="100vh"
      // @ts-expect-error TS(2304): Cannot find name 'w'.
      w="100%"
      // @ts-expect-error TS(2304): Cannot find name 'maxW'.
      maxW="300px"
      // @ts-expect-error TS(2304): Cannot find name 'borderLeft'.
      borderLeft="1px solid"
      // @ts-expect-error TS(2304): Cannot find name 'borderLeftColor'.
      borderLeftColor="teal.100"
      // @ts-expect-error TS(2304): Cannot find name 'position'.
      position="sticky"
      // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'Window'.
      top="16"
      // @ts-expect-error TS(2304): Cannot find name 'display'.
      display={{ base: "none", md: "block" }}
    // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
    >
      // @ts-expect-error TS(2749): 'ActiveUser' refers to a value, but is being used ... Remove this comment to see the full error message
      <ActiveUser />
      // @ts-expect-error TS(2304): Cannot find name 'align'.
      <Box align="center">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="outline"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="teal"
          // @ts-expect-error TS(2304): Cannot find name 'as'.
          as={Link}
          // @ts-expect-error TS(2304): Cannot find name 'to'.
          to={USERS}
          // @ts-expect-error TS(2304): Cannot find name 'mt'.
          mt="4"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="sm"
        >
          // @ts-expect-error TS(2304): Cannot find name 'ALL'.
          ALL USERS
        </Button>
      </Box>
    </Box>
  );
}