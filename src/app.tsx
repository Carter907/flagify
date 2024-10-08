import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import NavBar from "./components/Nav";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL || "flagify"}
      root={props => (
        <MetaProvider>
          <Title>Flagify</Title>
          <NavBar />

          <div class="md:w-2/3 m-auto py-36">

            <Suspense>{props.children}</Suspense>
          </div>
        </MetaProvider>
      )
      }
    >
      <FileRoutes />
    </Router >
  );
}
