import {
    Button,
    Divider,
    Flex,
    HStack,
    Stack,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  // @ts-expect-error TS(2307): Cannot find module 'components/post/PostsList' or ... Remove this comment to see the full error message
  import PostsList from "components/post/PostsList";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/posts' or its correspond... Remove this comment to see the full error message
  import { usePosts } from "hooks/posts";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/users' or its correspond... Remove this comment to see the full error message
  import { useUser } from "hooks/users";
  import { useParams } from "react-router-dom";
  import Avatar from "./Avatar";
  import { format } from "date-fns";
  import EditProfile from "./EditProfile";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
  import { useAuth } from "hooks/auth";
  
  export default function Profile() {
    const { id } = useParams();
    const { posts, isLoading: postsLoading } = usePosts(id);
    const { user, isLoading: userLoading } = useUser(id);
    const { user: authUser, isLoading: authLoading } = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    if (userLoading) return "Loading...";
  
    return (
      // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Stack spacing="5">
        // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
        <Flex p={["4", "6"]} pos="relative" align="center">
          // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
          <Avatar size="2xl" user={user} />
  
          {!authLoading && authUser.id === user.id && (
            // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
            <Button
              // @ts-expect-error TS(2304): Cannot find name 'pos'.
              pos="absolute"
              // @ts-expect-error TS(2304): Cannot find name 'mb'.
              mb="2"
              // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'Window'.
              top="6"
              // @ts-expect-error TS(2304): Cannot find name 'right'.
              right="6"
              // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
              colorScheme="teal"
              // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
              onClick={onOpen}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Change'.
              Change avatar
            </Button>
          )}
  
          // @ts-expect-error TS(2749): 'Stack' refers to a value, but is being used as a ... Remove this comment to see the full error message
          <Stack ml="10">
            // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
            <Text fontSize="2xl">{user.username}</Text>
            // @ts-expect-error TS(2304): Cannot find name 'spacing'.
            <HStack spacing="10">
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                // @ts-expect-error TS(2304): Cannot find name 'Posts'.
                Posts: {posts.length}
              </Text>
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                // @ts-expect-error TS(2304): Cannot find name 'Likes'.
                Likes: todo!
              </Text>
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              <Text color="gray.700" fontSize={["sm", "lg"]}>
                // @ts-expect-error TS(2304): Cannot find name 'Joined'.
                Joined: {format(user.date, "MMMM YYY")}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              </Text>
            </HStack>
          </Stack>
  
          // @ts-expect-error TS(2304): Cannot find name 'isOpen'.
          <EditProfile isOpen={isOpen} onClose={onClose} />
        </Flex>
        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <Divider />
  
        // @ts-expect-error TS(7006): Parameter '(Missing)' implicitly has an 'any' type... Remove this comment to see the full error message
        {postsLoading ? (
          // @ts-expect-error TS(7006): Parameter 'Text' implicitly has an 'any' type.
          <Text>Posts are loading...</Text>
        ) : (
          // @ts-expect-error TS(2304): Cannot find name 'posts'.
          <PostsList posts={posts} />
        )}
      </Stack>
    );
  };