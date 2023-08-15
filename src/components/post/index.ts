import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({
  post
}: any) {
  const { text } = post;

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box p="2" maxW="600px" textAlign="left">
      // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        // @ts-expect-error TS(2749): 'Header' refers to a value, but is being used as a... Remove this comment to see the full error message
        <Header post={post} />

        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <Box p="2" minH="100px">
          // @ts-expect-error TS(2304): Cannot find name 'wordBreak'.
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>
        </Box>

        // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
        <Actions post={post} />
      </Box>
    </Box>
  );
}