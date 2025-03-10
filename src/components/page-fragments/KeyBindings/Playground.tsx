import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Shortcut from "./shortcut";
import ShortcutExtended from "./shortcut-extended";

function Playground() {
  return (
    <section id="playground">
      <h2 className="text-2xl font-medium mb-2 mt-8">Playground</h2>
      <Tabs defaultValue="useShortcut" className="w-full">
        <TabsList>
          <TabsTrigger value="useShortcut">useShortcut()</TabsTrigger>
          <TabsTrigger value="useShortcutExtended">useShortcutExtended()</TabsTrigger>
        </TabsList>
        <TabsContent value="useShortcut">
          <Shortcut />
        </TabsContent>
        <TabsContent value="useShortcutExtended">
          <ShortcutExtended />
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default Playground;
