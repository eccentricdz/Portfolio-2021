import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "../components/Link";
import Rotator from "../components/Rotator";
import ContentToggle from "../components/ContentToggle";
import Toggle from "../components/Toggle";
import About from "../components/About";
import Work from "../components/Work";
import Curtain from "../components/Curtain";
import ReactGA from "react-ga";

export function logReactEvent(eventData) {
  ReactGA.event(eventData);
}

export default function Index() {
  const [content, setContent] = useState("work");
  const [curtainState, setCurtainState] = useState("closed");
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    initializeReactGA();
    setInitialColorMode();
  }, []);

  const assignColorModeToBody = (currentColorMode) => {
    if (currentColorMode === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  };

  const setInitialColorMode = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setMode("dark");
      assignColorModeToBody("dark");

      if (
        window.matchMedia("(prefers-color-scheme: dark)") &&
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener
      ) {
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .addEventListener("change", (e) => {
            const newMode = e.matches ? "dark" : "light";
            setMode(newMode);

            assignColorModeToBody(newMode);
          });
      }
    }
  };

  const initializeReactGA = () => {
    ReactGA.initialize("UA-104943545-2");
    ReactGA.pageview("/homepage");
  };

  const logUserAction = (action, label) => {
    logReactEvent({
      category: "User Action",
      action,
      label,
    });
  };

  // toggle the dark mode
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    assignColorModeToBody(newMode);
    logUserAction("Dark Mode Toggle", newMode);
    setMode(newMode);
  };

  const contentToggleHandler = (content) => {
    setCurtainState("close");
    setTimeout(() => {
      logUserAction("Content Toggle", content);
      setContent(content);
    }, 500);
  };

  return (
    <div className={`${mode} App`}>
      <Head>
        <title>Rahul Agarwal</title>
        <meta
          name="description"
          content="This is the portfolio of Rahul Agarwal."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="left-grid">
        {/* grid lines */}
        <div className="grid-lines" id="left-grid-line-1"></div>
        <div className="grid-lines" id="left-grid-line-2"></div>
        {/* grid lines */}

        <div className="left-grid-1">
          <Toggle handleToggle={toggleMode}></Toggle>
          <Link href="/documents/Rahul Agarwal - Resume.pdf" id="resume-top">
            Resume
          </Link>
        </div>
        <div className="left-grid-2">
          <div className="left-grid-2-1">
            <section className="primary">
              <p id="my-name">Rahul Agarwal</p>
              <Rotator
                elements={["Developer", "Designer", "Learner"]}
                id="primary-rotator"
              ></Rotator>
            </section>
          </div>
          <div className="left-grid-2-2">
            <section className="account-links-1">
              <Link href="https://www.behance.net/eccentricdz" id="behance">
                Behance
              </Link>
              <Link href="https://dribbble.com/eccentricdz" id="dribbble">
                Dribbble
              </Link>
              <Link href="https://github.com/eccentricdz" id="github">
                Github
              </Link>
            </section>
            <section className="account-links-2">
              <Link
                href="https://www.instagram.com/createdbyrahul/"
                id="instagram"
              >
                Instagram
              </Link>
              <Link
                href="https://twitter.com/simplyrahul93"
                id="twitter"
              >
                Twitter
              </Link>
              <Link
                href="https://soundcloud.com/rahul-agarwal-397883738"
                id="soundcloud"
              >
                Soundcloud
              </Link>
            </section>
          </div>
          <div className="left-grid-2-3">
            <Link
              href="/documents/Rahul Agarwal - Resume.pdf"
              id="resume-bottom"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="right-grid">
        {/* grid lines */}
        <div className="grid-lines" id="right-grid-line-1"></div>
        <div className="grid-lines" id="right-grid-line-2"></div>
        <div className="grid-lines" id="right-grid-line-3"></div>
        {/* grid lines */}

        <div className="right-grid-1">
          <ContentToggle
            initialContent={content}
            contentToggleHandler={contentToggleHandler}
          ></ContentToggle>
        </div>
        <div className="right-grid-2">
          <Curtain state={curtainState}></Curtain>
          {content === "about" ? (
            <About setCurtainState={setCurtainState}></About>
          ) : (
            <Work
              clickHandler={(id) => logUserAction("Project Click", id)}
              setCurtainState={setCurtainState}
            ></Work>
          )}
        </div>

        <footer>
          {/* <div className="left">Built with ❤ during the COVID-19 lockdown.</div> */}
          Stay home,{" "}
          <a
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            target="_blank"
            rel="noopener noreferrer"
          >
            stay informed,
          </a>{" "}
          stay safe!
        </footer>
      </div>
    </div>
  );
}
