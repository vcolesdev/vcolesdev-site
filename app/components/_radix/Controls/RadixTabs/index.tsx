import * as Tabs from "@radix-ui/react-tabs";

export default () => (
  <Tabs.Root>
    <Tabs.List>
      <Tabs.Trigger value="Click Me" />
    </Tabs.List>
    <Tabs.Content value="Tabs Content" />
  </Tabs.Root>
);
