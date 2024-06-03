import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { RootPage, SettingsAccountPage, SettingsAppearancePage, SettingsDisplayPage, SettingsNotificationsPage, SettingsProfilePage } from "./pages";
import { SettingsLayout } from "./components/forms";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <RootPage />
  },
  {
    path: "/examples",
    children: [
      {
        path: "forms",
        element: (
          <>
            <SettingsLayout>
              <Outlet />
            </SettingsLayout>
          </>
        ),
        children: [
          {
            index: true,
            element: <SettingsProfilePage />,
          },
          {
            path: "account",
            element: <SettingsAccountPage />,
          },
          {
            path: "appearance",
            element: <SettingsAppearancePage />,
          },
          {
            path: "display",
            element: <SettingsDisplayPage />,
          },
          {
            path: "notifications",
            element: <SettingsNotificationsPage />,
          },
          {
            path: "profile",
            element: <SettingsProfilePage />,
          },
        ],
      },
    ],
  },
];

/**
 * References
 * - [examples/lazy-loading-router-provider](https://github.com/remix-run/react-router/blob/main/examples/lazy-loading-router-provider/src/App.tsx)
 */
const router = createBrowserRouter([...publicRoutes]);
export default router;
