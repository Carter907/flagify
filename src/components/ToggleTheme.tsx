import { createSignal, createEffect, on, Show, onMount } from 'solid-js'
import { BsBrightnessHigh, BsBrightnessLow } from 'solid-icons/bs'
export const [theme, toggleTheme] = createSignal(false);

export default function ToggleTheme() {
  createEffect(on(theme, () => {

    if (theme()) {
      localStorage.setItem("theme", JSON.stringify(true))
      document.body.classList.add('dark')
    } else {
      localStorage.setItem("theme", JSON.stringify(false))
      document.body.classList.remove('dark')

    }

  }, { defer: true }))

  onMount(() => {

    const theme = localStorage.getItem("theme")

    if (theme) {
      toggleTheme(JSON.parse(theme))
    } else {
      localStorage.setItem("theme", JSON.stringify(false))
    }

  })

  return (
    <button class="border-2 rounded-full p-2" onclick={() => {
      toggleTheme(!theme())
    }}>
      <Show when={theme()} fallback={<BsBrightnessHigh size={24} />}>
        <BsBrightnessLow size={24} />
      </Show>


    </button>
  )
}

