import React from "react";

import Intro from "./Intro";
import Installation from "./Installation";
import UsageDetails from "./UsageDetails";
import Playground from "./Playground";

function KeyBindingsFragment() {
  return (
    <main>
      <Intro />
      <Installation />
      <UsageDetails />
      <Playground />
    </main>
  );
}

export default KeyBindingsFragment;
