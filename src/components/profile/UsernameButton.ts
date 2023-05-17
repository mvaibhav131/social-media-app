import { Button } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function UsernameButton({
  user
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button
      // @ts-expect-error TS(2304): Cannot find name 'as'.
      as={Link}
      // @ts-expect-error TS(2304): Cannot find name 'to'.
      to={`${PROTECTED}/profile/${user.id}`}
      // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
      colorScheme="teal"
      // @ts-expect-error TS(2304): Cannot find name 'variant'.
      variant="link"
    >
      // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      {user.username}
    </Button>
  );
}