const pingBtn = document.querySelector("#ping");
const synonymizeBtn = document.querySelector("#synonymize");
const statusEl = document.querySelector("#status");

pingBtn?.addEventListener("click", async () => {
  statusEl.textContent = "…";
  try {
    const res = await chrome.runtime.sendMessage({ type: "PING" });
    statusEl.textContent = res?.ok ? `Background replied: ${res.message}` : "Unexpected reply";
  } catch (err) {
    statusEl.textContent = `Error: ${err?.message ?? err}`;
  }
});

synonymizeBtn?.addEventListener("click", async () => {
  statusEl.textContent = "Synonymizing…";
  try {
    const res = await chrome.runtime.sendMessage({ type: "SYNONYMIZE_ACTIVE_TAB" });
    statusEl.textContent = res?.ok ? "Done." : (res?.error ?? "Failed.");
  } catch (err) {
    statusEl.textContent = `Error: ${err?.message ?? err}`;
  }
});
