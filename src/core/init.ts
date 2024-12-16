import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  init as initSDK,
  expandViewport,
  retrieveLaunchParams,
} from "@telegram-apps/sdk-react";

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Mount all components used in the project.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  backButton.isSupported() && backButton.mount();
  miniApp.mount();
  // miniApp.ready();
  themeParams.mount();
  initData.restore();
  void viewport.mount().catch((e) => {
    console.error("Something went wrong mounting the viewport", e);
  });

  // const { initDataRaw } = retrieveLaunchParams();

  // fetch('https://example.com/api', {
  //   method: "POST",
  //   headers: {
  //     Authorization: `tma ${initDataRaw}`
  //   },
  // });

  expandViewport();

  // Define components-related CSS variables.
  viewport.bindCssVars();
  miniApp.bindCssVars();
  themeParams.bindCssVars();

  // Add Eruda if needed.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  debug &&
    import("eruda").then((lib) => lib.default.init()).catch(console.error);
}
