(()=>{const o=document.querySelectorAll(".js-cite");if(!o.length||typeof HTMLDialogElement=="undefined")return;const e=document.createElement("dialog");e.className="citation-dialog",e.setAttribute("aria-labelledby","citation-dialog-title"),e.innerHTML=`
    <div class="citation-dialog-head">
      <h2 id="citation-dialog-title">Cite this publication</h2>
      <button type="button" class="citation-dialog-close" aria-label="Close citation dialog">×</button>
    </div>
    <pre><code>Loading citation…</code></pre>
    <p class="citation-dialog-error" role="alert" hidden></p>
    <div class="citation-dialog-actions">
      <button type="button" class="citation-copy">Copy BibTeX</button>
      <a class="citation-download" download="cite.bib">Download</a>
    </div>`,document.body.append(e);const s=e.querySelector("code"),t=e.querySelector(".citation-dialog-error"),n=e.querySelector(".citation-copy"),i=e.querySelector(".citation-download");e.querySelector(".citation-dialog-close").addEventListener("click",()=>e.close()),e.addEventListener("click",t=>{t.target===e&&e.close()}),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(s.textContent),n.textContent="Copied",window.setTimeout(()=>{n.textContent="Copy BibTeX"},1600)}catch{t.textContent="Could not copy automatically. Select and copy the citation above.",t.hidden=!1}}),o.forEach(o=>{o.addEventListener("click",async a=>{a.preventDefault();const r=o.dataset.citationUrl;s.textContent="Loading citation…",t.hidden=!0,n.disabled=!0,i.href=r,e.showModal();try{const e=await fetch(r);if(!e.ok)throw new Error(`HTTP ${e.status}`);s.textContent=await e.text(),n.disabled=!1}catch{s.textContent="",t.textContent="The citation could not be loaded. You can still download the BibTeX file.",t.hidden=!1}})})})()