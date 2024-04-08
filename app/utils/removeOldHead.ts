/**
 * This function is used to remove the old header nodes from the document head.
 * @param parent
 */
export function removeOldHead(parent: HTMLElement = document.head) {
  // Create a variable to track if the old header has been found.
  let foundOldHeader: boolean = false;

  // Store the notes to remove/replace. (All)
  const nodesToRemove: ChildNode[] = [];

  // Loop through each child node of the parent node (in this case, the document head).
  for (const node of parent.childNodes) {
    // List nodes found.
    // console.log(node.nodeName, node.nodeValue);

    // If the old header has not been found and the node is not a comment, continue to the next node.
    if (!foundOldHeader && node.nodeName !== "#comment") {
      continue;
    }

    // If the old header has been found and the node is a comment with the value `end head`, add the node to the list of nodes to remove and break the loop.
    if (
      foundOldHeader &&
      node.nodeName === "#comment" &&
      node.nodeValue === `end head`
    ) {
      nodesToRemove.push(node);
      break;
    }

    // If the old header has been found or the node is a comment with the value `start head`, add the node to the list of nodes to remove.
    if (
      foundOldHeader ||
      (node.nodeName === "#comment" && node.nodeValue === `start head`)
    ) {
      foundOldHeader = true;
      nodesToRemove.push(node);
    }
  }

  // Let's remove the old header nodes.
  for (const node of nodesToRemove) {
    node.remove();
  }
}
