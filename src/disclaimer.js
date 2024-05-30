export default function disclaimerWarning() {
  const disclaimerWarningElement = document.createElement("div");
  disclaimerWarningElement.classList.add("disclaimer");
  disclaimerWarningElement.innerHTML = `
    <h3>WARNING!</h3>
    <p>If you leave or reload this page, you will lose your free spin! </p>`;
  document.querySelector(".wrapper").prepend(disclaimerWarningElement);
}
