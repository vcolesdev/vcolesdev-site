/* https://www.radix-ui.com/primitives/docs/components/alert-dialog */
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export default () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger />
    <AlertDialog.Portal>
      <AlertDialog.Overlay />
      <AlertDialog.Content>
        <AlertDialog.Title />
        <AlertDialog.Description />
        <AlertDialog.Cancel />
        <AlertDialog.Action />
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
