export const USESHORTCUT_USAGE = `import React, { useState } from "react";
import { useShortcut } from "@hookies/key-bindings";

const App = () => {
  const [message, setMessage] = useState("Press Ctrl+8");

  useShortcut(["Ctrl", "8"], () => setMessage("Shortcut Triggered!"), { preventDefault: true });

  return <h1>{message}</h1>;
};

export default App;`;

export const USESHORTCUTEXTENDED_USAGE = `
import { useState } from "react";
import { useShortcutExtended } from "@hookies/key-bindings";

const App = () => {
  const [message, setMessage] = useState("Press A + S");

  useShortcutExtended(["a", "s"], () => setMessage("Shortcut Triggered!"), { preventDefault: true });

  return <h1>{message}</h1>;
};

export default App;
`;

export const GETOS_USAGE = `import { getOS } from "@hookies/key-bindings";

const os = getOS(); // MacOS, Windows, Linux, Android, iOS, Unknown`;
