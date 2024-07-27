import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>Flags of the World</Title>
          <nav class="flex flex-row gap-4 p-2 border">

            <a href="/" class="border rounded p-2" target="_self">Home</a>
            <a href="/quiz" class="border rounded p-2" target="_self">Start Quiz</a>
            <a href="/flags" class="border rounded p-2" target="_self">Flags</a>
          </nav>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
