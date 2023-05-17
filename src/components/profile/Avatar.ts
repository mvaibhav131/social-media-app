import { Avatar as ChakraAvatar } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { PROTECTED } from "lib/routes";
import { Link } from "react-router-dom";

export default function Avatar({
  user,
  size = "xl",
  overrideAvatar = null
}: any) {
  return (
    // @ts-expect-error TS(2749): 'ChakraAvatar' refers to a value, but is being use... Remove this comment to see the full error message
    <ChakraAvatar
      // @ts-expect-error TS(2304): Cannot find name 'as'.
      as={Link}
      // @ts-expect-error TS(2304): Cannot find name 'to'.
      to={`${PROTECTED}/profile/${user.id}`}
      // @ts-expect-error TS(2588): Cannot assign to 'name' because it is a constant.
      name={user.username}
      // @ts-expect-error TS(2304): Cannot find name 'size'.
      size={size}
      // @ts-expect-error TS(2304): Cannot find name 'src'.
      src={overrideAvatar || user.avatar}
      // @ts-expect-error TS(2304): Cannot find name '_hover'.
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
};
