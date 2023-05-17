import { Button, Flex, Link } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { DASHBOARD } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Flex
      // @ts-expect-error TS(2304): Cannot find name 'shadow'.
      shadow="sm"
      // @ts-expect-error TS(2304): Cannot find name 'pos'.
      pos="fixed"
      // @ts-expect-error TS(2304): Cannot find name 'width'.
      width="full"
      // @ts-expect-error TS(2304): Cannot find name 'borderTop'.
      borderTop="6px solid"
      // @ts-expect-error TS(2304): Cannot find name 'borderTopColor'.
      borderTopColor="teal.400"
      // @ts-expect-error TS(2304): Cannot find name 'height'.
      height="16"
      // @ts-expect-error TS(2304): Cannot find name 'zIndex'.
      zIndex="3"
      // @ts-expect-error TS(2304): Cannot find name 'justify'.
      justify="center"
      // @ts-expect-error TS(2304): Cannot find name 'bg'.
      bg="white"
    >
      // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Flex px="4" w="full" align="center" maxW="1200px">
        // @ts-expect-error TS(2749): 'Link' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          // @ts-expect-error TS(2304): Cannot find name 'Home'.
          Home
        </Link>
        <Button
          // @ts-expect-error TS(2304): Cannot find name 'ml'.
          ml="auto"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="teal"
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="sm"
          // @ts-expect-error TS(2304): Cannot find name 'onClick'.
          onClick={logout}
          // @ts-expect-error TS(2588): Cannot assign to 'isLoading' because it is a const... Remove this comment to see the full error message
          isLoading={isLoading}
        >
          // @ts-expect-error TS(2304): Cannot find name 'Logout'.
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}