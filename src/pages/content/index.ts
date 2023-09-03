console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
const injectedElement = import("./components/Demo") as unknown as Node;

document.body.append(injectedElement);
