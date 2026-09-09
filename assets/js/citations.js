(() => {
  const citationLinks = document.querySelectorAll(".js-cite");

  if (!citationLinks.length || typeof HTMLDialogElement === "undefined") return;

  const dialog = document.createElement("dialog");
  dialog.className = "citation-dialog";
  dialog.setAttribute("aria-labelledby", "citation-dialog-title");
  dialog.innerHTML = `
    <div class="citation-dialog-head">
      <h2 id="citation-dialog-title">Cite this publication</h2>
      <button type="button" class="citation-dialog-close" aria-label="Close citation dialog">×</button>
    </div>
    <pre><code>Loading citation…</code></pre>
    <p class="citation-dialog-error" role="alert" hidden></p>
    <div class="citation-dialog-actions">
      <button type="button" class="citation-copy">Copy BibTeX</button>
      <a class="citation-download" download="cite.bib">Download</a>
    </div>`;
  document.body.append(dialog);

  const code = dialog.querySelector("code");
  const error = dialog.querySelector(".citation-dialog-error");
  const copyButton = dialog.querySelector(".citation-copy");
  const downloadLink = dialog.querySelector(".citation-download");

  dialog.querySelector(".citation-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      copyButton.textContent = "Copied";
      window.setTimeout(() => { copyButton.textContent = "Copy BibTeX"; }, 1600);
    } catch {
      error.textContent = "Could not copy automatically. Select and copy the citation above.";
      error.hidden = false;
    }
  });

  citationLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const url = link.dataset.citationUrl;
      code.textContent = "Loading citation…";
      error.hidden = true;
      copyButton.disabled = true;
      downloadLink.href = url;
      dialog.showModal();

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        code.textContent = await response.text();
        copyButton.disabled = false;
      } catch {
        code.textContent = "";
        error.textContent = "The citation could not be loaded. You can still download the BibTeX file.";
        error.hidden = false;
      }
    });
  });
})();
