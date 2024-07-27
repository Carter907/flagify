import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="border rounded p-2" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
