import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/Avatar' or ... Remove this comment to see the full error message
import Avatar from "components/profile/Avatar";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/UsernameBut... Remove this comment to see the full error message
import UsernameButton from "components/profile/UsernameButton";
import { formatDistanceToNow } from "date-fns";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useAuth } from "hooks/auth";
// @ts-expect-error TS(2307): Cannot find module 'hooks/comments' or its corresp... Remove this comment to see the full error message
import { useDeleteComment } from "hooks/comments";
// @ts-expect-error TS(2307): Cannot find module 'hooks/users' or its correspond... Remove this comment to see the full error message
import { useUser } from "hooks/users";
import { FaTrash } from "react-icons/fa";

export default function Comment({
  comment
}: any) {
  const { text, uid, date, id } = comment;
  const { user, isLoading: userLoading } = useUser(uid);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { deleteComment, isLoading: deleteLoading } = useDeleteComment(id);

  if (userLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
      // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Flex pb="2">
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        <Avatar user={user} size="sm" />
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box flex="1" ml="4">
          // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box>
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              <UsernameButton user={user} />
              // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
              <Text fontSize="xs" color="gray.500">
                // @ts-expect-error TS(2304): Cannot find name 'ago'.
                {formatDistanceToNow(date: any)} ago
              </Text>
            </Box>
            {!authLoading && authUser.id === uid && (
              // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
              <IconButton
                // @ts-expect-error TS(2304): Cannot find name 'size'.
                size="sm"
                // @ts-expect-error TS(2304): Cannot find name 'ml'.
                ml="auto"
                // @ts-expect-error TS(2304): Cannot find name 'icon'.
                icon={<FaTrash />}
                // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
                colorScheme="red"
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                variant="ghost"
                // @ts-expect-error TS(2304): Cannot find name 'isRound'.
                isRound
                // @ts-expect-error TS(2304): Cannot find name 'onClick'.
                onClick={deleteComment}
                // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
                isLoading={deleteLoading}
              />
            )}
          </Flex>
          // @ts-expect-error TS(2304): Cannot find name 'pt'.
          <Box pt="2" fontSize="sm">
            // @ts-expect-error TS(2352): Conversion of type '{ text: any; }' to type 'Text'... Remove this comment to see the full error message
            <Text>{text}</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}