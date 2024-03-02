import React from "react";

const styles = {
  mainDiv: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "7px",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "lightgray",
  },
  heading: {
    fontWeight: "bolder",
    color: "white",
    boxShadow: "0px 0px 10px 0px black",
  },
  button: {
    color: "#229091",
    boxShadow:
      "0 0 0 .1em inset #229091; --_g: linear-gradient(#229091 0 0) no-repeat;",
    // padding: "10px",
    borderRadius: "5px",
    // border: "none",
    alignItems: "center",
    maxHeight: "42px",
    backgroundColor: "",
  },
};

function App() {
  const [active, setActive] = React.useState(false);
  const onClickActivate = async () => {
    setActive(true);
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
        const li = document.getElementsByTagName("li");
        const A = document.getElementsByTagName("a");
        const span = document.getElementsByTagName("span");
        const allHeadings = [
          //   H1headings,
          //   H2headings,
          H3headings,
          H4headings,
          H5headings,
          H6headings,
          paragraphs,
          //   li,
          //   span,
          //   A,
        ];
        for (let i = 0; i < allHeadings.length; i++) {
          const headings = allHeadings[i];
          for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const words = heading.innerText.split(" " || "-");
            // the first half of the word is bold
            heading.innerHTML = words
              .map(
                (word) =>
                  `<span style="font-weight: bolder">${word.slice(
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

  const onClickDeactivate = async () => {
    setActive(false);
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
        const li = document.getElementsByTagName("li");
        const A = document.getElementsByTagName("a");
        const span = document.getElementsByTagName("span");
        const allHeadings = [
          //   H1headings,
          //   H2headings,
          H3headings,
          H4headings,
          H5headings,
          H6headings,
          paragraphs,
          //   li,
          //   span,
          //   A,
        ];
        for (let i = 0; i < allHeadings.length; i++) {
          const headings = allHeadings[i];
          for (let i = 0; i < headings.length; i++) {
            const heading = headings[i];
            const words = heading.innerText.split(" " || "-");
            // the first half of the word is bold

            heading.innerHTML = words
              .map((word) => `<span style="font-weight: normal">${word}</span>`) // .join(" ");
              .join(" ");
          }
        }
      },
    });
  };

  return (
    <div
      style={{
        // flexDirection: "column",
        // display: "flex",

        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "7px",
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "gray",
      }}
    >
      <h3>Bionic-izer</h3>

      <div
        style={{
          borderRadius: "100%",
          width: "10px",
          height: "10px",
          backgroundColor: active ? "green" : "red",
          marginRight: "7px",
        }}
      ></div>

      <br />
      {/* <button
        onClick={active ? onClickDeactivate : onClickActivate}
        style={styles.button}
        // style={{
        //   backgroundColor: active ? "green" : "red",
        // }}
      >
        {" "}
        {active ? "On" : "Off"}{" "}
      </button> */}
      <div
        style={{
          borderRadius: "10%",
          width: "21px",
          height: "11px",
          display: "flex",
          //   padding: "1px",
          //   justifyContent: active ? "flex-end" : "flex-start",
          backgroundColor: active ? "#b1b1b1" : "lightgray",
          border: "1px solid black",
          //   transition: "all 0.5s",
        }}
        onClick={active ? onClickDeactivate : onClickActivate}
      >
        <button
          style={{
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            // color:
            transform: active ? "translateX(8px)" : "translateX(0px)",
            transition: "all 0.5s",
            border: "none",
          }}
          // style={{
          //   backgroundColor: active ? "green" : "red",
          // }}
        ></button>
      </div>
    </div>
  );
}

export default App;
