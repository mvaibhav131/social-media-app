import { createBrowserRouter } from "react-router-dom";

// @ts-expect-error TS(2307): Cannot find module 'components/auth/Login' or its ... Remove this comment to see the full error message
import Login from "components/auth/Login";
// @ts-expect-error TS(2307): Cannot find module 'components/auth/Register' or i... Remove this comment to see the full error message
import Register from "components/auth/Register";
// @ts-expect-error TS(2307): Cannot find module 'components/layout' or its corr... Remove this comment to see the full error message
import Layout from "components/layout";
// @ts-expect-error TS(2307): Cannot find module 'components/dashboard' or its c... Remove this comment to see the full error message
import Dashboard from "components/dashboard";
// @ts-expect-error TS(2307): Cannot find module 'components/comments/Comment' o... Remove this comment to see the full error message
import Comments from "components/comments/Comment";
// @ts-expect-error TS(2307): Cannot find module 'components/profile' or its cor... Remove this comment to see the full error message
import Profile from "components/profile";
// @ts-expect-error TS(2307): Cannot find module 'components/users' or its corre... Remove this comment to see the full error message
import Users from "components/users";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <Login /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
]);