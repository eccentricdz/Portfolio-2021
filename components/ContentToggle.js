import { useEffect, useState } from "react";

export default function (props) {
  const [content, setContent] = useState(props.initialContent);
  useEffect(() => {
    props.contentToggleHandler(content);
  }, [content]);

  return (
    <section className={`${content}-active content-toggle`}>
      <div
        className="content-toggle-button"
        id="about"
        onClick={() => setContent("about")}
      >
        About
      </div>
      <div
        className="content-toggle-button"
        id="work"
        onClick={() => setContent("work")}
      >
        Work
      </div>
      <div className="content-toggle-divider">
        <div className="content-toggle-shifter"></div>
      </div>
    </section>
  );
}
