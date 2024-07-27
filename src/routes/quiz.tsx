
export default function Home() {
  return (
    <main class="m-2">
      <p class="text-2xl">Where your Journy Begins!</p>
      <section>test your skills in the following quiz types:</section>

      <div class="flex flex-col gap-4 w-fit p-2">
        <a href="/quiz/four-countries" class="border rounded p-2">Four Countries Test</a>
        <a href="/quiz/four-flags" class="border rounded p-2">Four Flags Test</a>

      </div>
    </main>

  );
}
