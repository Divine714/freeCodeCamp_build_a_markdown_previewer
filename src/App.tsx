import "./styles.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const text = `
# This is a Markdown Previewer H1 Title!
## This is an H2 preview

Here is how you include a [link](https://www.freecodecamp.org)

Some inline code:  \`<p>That's amazing</p>\`

 Or a code block:
\`\`\`
  const function = (par) => {
    return par + 2
  }
\`\`\`

You can **bold** text

- You can make lists
  - Simply indent
    - Further
      - And further

And
> Block Quotes!

And you can include images!
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

export default function App() {
  const [state, setState] = useState(text);
  return (
    <div className="App">
      <div id="textArea">
        <textarea
          id="editor"
          value={state}
          onChange={(event) => setState(event.target.value)}
        ></textarea>
      </div>
      <div id="preview">
        <ReactMarkdown>{state}</ReactMarkdown>
      </div>
    </div>
  );
}
