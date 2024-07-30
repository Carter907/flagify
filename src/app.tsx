import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import ToggleTheme from "./components/ToggleTheme";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL || "flagify"}
      root={props => (
        <MetaProvider>
          <Title>Flags of the World</Title>
          <nav class="flex flex-row shadow-2xl md:gap-4 p-2 bg-neutral-300 dark:bg-neutral-800">

            <div class="md:w-2/3 w-full md:px-0 px-4 flex flex-row m-auto">
              <div class="basis-1/2 justify-start flex flex-row gap-2 md:gap-5">
                <a href="/flagify" class="border rounded p-2" target="_self">Home</a>
                <a href="/flagify/quiz" class="border rounded p-2" target="_self">Start Quiz</a>
                <a href="/flagify/flags" class="border rounded p-2" target="_self">Flags</a>

              </div>
              <div class="basis-1/2 flex flex-row justify-end gap-2 md:gap-5">

                <a href="/profile" class="border rounded p-2" target="_self">Sandbox Profile</a>
                <div class="inline-flex">

                  <ToggleTheme></ToggleTheme>
                </div>
              </div>
            </div>

          </nav>
          <div class="md:w-2/3 m-auto py-14">

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
