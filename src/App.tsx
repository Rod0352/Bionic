import React from "react";

function App() {
  const onClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        const paragraphs = document.getElementsByTagName("p");
        const H1headings = document.getElementsByTagName("h1");
        const H2headings = document.getElementsByTagName("h2");
        const H3headings = document.getElementsByTagName("h3");
        const H4headings = document.getElementsByTagName("h4");
        const H5headings = document.getElementsByTagName("h5");
        const H6headings = document.getElementsByTagName("h6");
        const A = document.getElementsByTagName("a");
        const allHeadings = [
          H1headings,
          H2headings,
          H3headings,
          H4headings,
          H5headings,
          H6headings,
          paragraphs,
          //   A,
        ];
        for (let i = 0; i < allHeadings.length; i++) {
          const headings = allHeadings[i];
          for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const words = heading.innerText.split(" ");
            // the first half of the word is bold
            heading.innerHTML = words
              .map(
                (word) =>
                  `<span style="font-weight: 800">${word.slice(
                    0,
                    word.length / 2
                  )}</span><span style="">${word.slice(word.length / 2)}</span>`
              )
              .join(" ");
          }
        }
      },
    });
  };
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Welcome to the world of React</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
