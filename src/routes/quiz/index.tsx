import QuizSelection from "~/components/QuizSelection";

export default function Home() {
  return (
    <main class="p-2 flex flex-col gap-10">
      <div>
        <p class="text-2xl">Where your Journy Begins!</p>
        <section>test your skills in the following quiz types:</section>


      </div>

      <div class="rounded">
        <QuizSelection />
      </div>

    </main>

  );
}

