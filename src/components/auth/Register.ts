import {
    Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
  } from "@chakra-ui/react";
  // @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
  import { DASHBOARD, LOGIN } from "lib/routes";
  import { Link as RouterLink, useNavigate } from "react-router-dom";
  // @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
  import { useRegister } from "hooks/auth";
  import { useForm } from "react-hook-form";
  import {
    emailValidate,
    passwordValidate,
    usernameValidate,
  // @ts-expect-error TS(2307): Cannot find module 'utils/form-validate' or its co... Remove this comment to see the full error message
  } from "utils/form-validate";
  
  export default function Register() {
    const { register: signup, isLoading } = useRegister();
    const navigate=useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    async function handleRegister(data: any) {
      signup({
        username: data.username,
        email: data.email,
        password: data.password,
        redirectTo: DASHBOARD,
      });
    }
  
    return (
      // @ts-expect-error TS(2749): 'Center' refers to a value, but is being used as a... Remove this comment to see the full error message
      <Center w="100%" h="100vh">
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
          // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
          <Heading mb="4" size="lg" textAlign="center">
            Register
          </Heading>
  
          // @ts-expect-error TS(2304): Cannot find name 'form'.
          <form onSubmit={handleSubmit(handleRegister: any)}>
            // @ts-expect-error TS(2749): 'FormControl' refers to a value, but is being used... Remove this comment to see the full error message
            <FormControl isInvalid={errors.username} py="2">
              // @ts-expect-error TS(2749): 'FormLabel' refers to a value, but is being used a... Remove this comment to see the full error message
              <FormLabel>Username</FormLabel>
              <Input
                // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                placeholder="username"
                {...register("username", usernameValidate)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              />
              <FormErrorMessage>
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            // @ts-expect-error TS(2304): Cannot find name 'isInvalid'.
            <FormControl isInvalid={errors.email} py="2">
              // @ts-expect-error TS(2749): 'FormLabel' refers to a value, but is being used a... Remove this comment to see the full error message
              <FormLabel>Email</FormLabel>
              <Input
                // @ts-expect-error TS(2304): Cannot find name 'type'.
                type="email"
                // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                placeholder="user@email.com"
                {...register("email", emailValidate)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              />
              <FormErrorMessage>
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            // @ts-expect-error TS(2304): Cannot find name 'isInvalid'.
            <FormControl isInvalid={errors.password} py="2">
              // @ts-expect-error TS(2749): 'FormLabel' refers to a value, but is being used a... Remove this comment to see the full error message
              <FormLabel>Password</FormLabel>
              <Input
                // @ts-expect-error TS(2304): Cannot find name 'type'.
                type="password"
                // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                placeholder="password123"
                {...register("password", passwordValidate)}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'RegExp' a... Remove this comment to see the full error message
              />
              <FormErrorMessage>
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              // @ts-expect-error TS(2304): Cannot find name 'mt'.
              mt="4"
              // @ts-expect-error TS(2304): Cannot find name 'type'.
              type="submit"
              // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
              colorScheme="teal"
              // @ts-expect-error TS(2304): Cannot find name 'size'.
              size="md"
              // @ts-expect-error TS(2304): Cannot find name 'w'.
              w="full"
              // @ts-expect-error TS(2588): Cannot assign to 'isLoading' because it is a const... Remove this comment to see the full error message
              isLoading={isLoading}
              // @ts-expect-error TS(2304): Cannot find name 'loadingText'.
              loadingText="Signing Up"
              // @ts-expect-error TS(2304): Cannot find name 'onClick'.
              onClick={navigate(LOGIN: any)}
            >
              Register
            </Button>
          </form>
  
          // @ts-expect-error TS(2304): Cannot find name 'fontSize'.
          <Text fontSize="xlg" align="center" mt="6">
            // @ts-expect-error TS(2304): Cannot find name 'Already'.
            Already have an account?{" "}
            <Link
              // @ts-expect-error TS(2304): Cannot find name 'as'.
              as={RouterLink}
              // @ts-expect-error TS(2304): Cannot find name 'to'.
              to={LOGIN}
              // @ts-expect-error TS(2304): Cannot find name 'color'.
              color="teal.800"
              // @ts-expect-error TS(2304): Cannot find name 'fontWeight'.
              fontWeight="medium"
              // @ts-expect-error TS(2304): Cannot find name 'textDecor'.
              textDecor="underline"
              // @ts-expect-error TS(2304): Cannot find name '_hover'.
              _hover={{ background: "teal.100" }}
            >
              // @ts-expect-error TS(2304): Cannot find name 'Log'.
              Log In
            </Link>{" "}
            // @ts-expect-error TS(2304): Cannot find name 'instead'.
            instead!
          </Text>
        </Box>
      </Center>
    );
  }