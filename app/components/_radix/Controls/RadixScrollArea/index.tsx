/* https://www.radix-ui.com/primitives/docs/components/scroll-area */
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default () => (
  <ScrollArea.Root>
    <ScrollArea.Viewport />
    <ScrollArea.Scrollbar orientation="horizontal">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
);
