document.addEventListener("DOMContentLoaded", () => {
  const htmlEditor = document.getElementById("editor-html");
  const cssEditor = document.getElementById("editor-css");
  const jsEditor = document.getElementById("editor-js");
  const outputFrame = document.getElementById("output");
  const consoleOutput = document.getElementById("console");

  function updateOutput() {
    const html = htmlEditor.value;
    const css = `<style>${Editor.value}</style    const js = `<scriptjsEditor.value}<\/script`;

    const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    outputDoc.open();
    outputDoc.write(html + css + js);
    outputDoc.close();
  }

  function logToConsole(message) {
    const logEntry = document.createElement("div");
    logEntry.textContent = message;
    consoleOutput.appendChild(logEntry);
  }

  // Capture console.log from the iframe
  outputFrame.contentWindow.console.log = logToConsole;

  // Add event listeners to update output on input
  htmlEditor.addEventListener("input", updateOutput);
  cssEditor.addEventListener("input", updateOutput);
  jsEditor.addEventListener("input", updateOutput);

  // Initial render
  updateOutput();
});