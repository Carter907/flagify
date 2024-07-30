// @refresh reload
//
import { mount, StartClient } from "@solidjs/start/client";
const theme = JSON.parse(localStorage.getItem("theme")!!)
if (theme) {
  document.body.classList.add("dark")
} else {
  document.body.classList.remove("dark")
}
mount(() => <StartClient />, document.getElementById("app")!);
