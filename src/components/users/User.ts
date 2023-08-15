import { Button, Code, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { PROTECTED } from "lib/routes";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/Avatar' or ... Remove this comment to see the full error message
import Avatar from "components/profile/Avatar";

export default function User({
  user
}: any) {
  const { id, username } = user;

  return (
    // @ts-expect-error TS(2749): 'VStack' refers to a value, but is being used as a... Remove this comment to see the full error message
    <VStack
      // @ts-expect-error TS(2304): Cannot find name 'bg'.
      bg="gray.100"
      // @ts-expect-error TS(2304): Cannot find name 'shadow'.
      shadow="sm"
      // @ts-expect-error TS(2304): Cannot find name 'rounded'.
      rounded="md"
      // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
      textAlign="center"
      // @ts-expect-error TS(2304): Cannot find name 'p'.
      p="4"
      // @ts-expect-error TS(2304): Cannot find name 'spacing'.
      spacing="3"
    >
      <Avatar user={user} />
      // @ts-expect-error TS(2635): Type 'RegExp' has no signatures for which the type... Remove this comment to see the full error message
      <Code>@{username}</Code>
      <Link>
        // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'as'.
          as={Link}
          // @ts-expect-error TS(2304): Cannot find name 'to'.
          to={`${PROTECTED}/profile/${id}`}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="sm"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="link"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="teal"
        >
          // @ts-expect-error TS(2304): Cannot find name 'View'.
          View Profile
        </Button>
      </Link>
    </VStack>
  );
};