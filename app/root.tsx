import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,
} from "remix";
import Toolbar from "./shared/components/Toolbar";


export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};


export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document >
  );
}

function Document({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: '0 2.5vw' }}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export function Layout({ children }: any) {
  return (
    /* 
    It is possible to define the Default Layout here. 
    In that way, all the pages are going to be in the same format.
    Examples of components to be added here: Toolbar/Navbar, Footer and etc...
    */
    <>
      <Toolbar />
      {children}
    </>
  )
}