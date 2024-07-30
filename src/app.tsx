import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import ToggleTheme from "./components/ToggleTheme";
import "./app.css";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={props => (
        <MetaProvider>
          <Title>Flags of the World</Title>
          <nav class="flex flex-row shadow-2xl gap-4 p-2 bg-neutral-300 dark:bg-neutral-800">

            <div class="w-2/3 flex flex-row m-auto">
              <div class="basis-1/2 self-center flex flex-row gap-10">
                <a href="/" class="border rounded p-2" target="_self">Home</a>
                <a href="/flagify/quiz" class="border rounded p-2" target="_self">Start Quiz</a>
                <a href="/flagify/flags" class="border rounded p-2" target="_self">Flags</a>

              </div>
              <div class="basis-1/2 flex flex-row justify-end gap-10">

                <a href="/profile" class="border rounded p-2" target="_self">Sandbox Profile</a>
                <div class="inline">

                  <ToggleTheme></ToggleTheme>
                </div>
              </div>
            </div>

          </nav>
          <div class="w-2/3 m-auto py-20">

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
