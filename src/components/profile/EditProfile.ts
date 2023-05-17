import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
  import { useAuth } from "hooks/auth";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/users' or its correspond... Remove this comment to see the full error message
  import { useUpdateAvatar } from "hooks/users";
  import Avatar from "./Avatar";
  
  export default function EditProfile({
    isOpen,
    onClose
  }: any) {
    const { user, isLoading: authLoading } = useAuth();
    const {
      setFile,
      updateAvatar,
      isLoading: fileLoading,
      fileURL,
    } = useUpdateAvatar(user?.id);
  
    function handleChange(e: any) {
      setFile(e.target.files[0]);
    }
  
    if (authLoading) return "Loading...";
  
    return (
      // @ts-expect-error TS(2749): 'Modal' refers to a value, but is being used as a ... Remove this comment to see the full error message
      <Modal isOpen={isOpen} onClose={onClose}>
        // @ts-expect-error TS(2749): 'ModalOverlay' refers to a value, but is being use... Remove this comment to see the full error message
        <ModalOverlay />
        <ModalContent>
          // @ts-expect-error TS(2749): 'ModalHeader' refers to a value, but is being used... Remove this comment to see the full error message
          <ModalHeader>Edit profile</ModalHeader>
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <ModalCloseButton />
          // @ts-expect-error TS(2749): 'ModalBody' refers to a value, but is being used a... Remove this comment to see the full error message
          <ModalBody>
            // @ts-expect-error TS(2749): 'HStack' refers to a value, but is being used as a... Remove this comment to see the full error message
            <HStack spacing="5">
              // @ts-expect-error TS(2749): 'Avatar' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Avatar user={user} overrideAvatar={fileURL} />
              // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
              <FormControl py="4">
                // @ts-expect-error TS(2749): 'FormLabel' refers to a value, but is being used a... Remove this comment to see the full error message
                <FormLabel htmlFor="picture">Change avatar</FormLabel>
                // @ts-expect-error TS(2304): Cannot find name 'input'.
                <input type="file" accept="image/*" onChange={handleChange} />
              </FormControl>
            </HStack>
            <Button
              // @ts-expect-error TS(2304): Cannot find name 'loadingText'.
              loadingText="Uploading"
              // @ts-expect-error TS(2304): Cannot find name 'w'.
              w="full"
              // @ts-expect-error TS(2304): Cannot find name 'my'.
              my="6"
              // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
              colorScheme="teal"
              // @ts-expect-error TS(2304): Cannot find name 'onClick'.
              onClick={updateAvatar}
              // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
              isLoading={fileLoading}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Save'.
              Save
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }