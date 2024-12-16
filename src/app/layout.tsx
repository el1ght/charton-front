import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import NavigationBar from "@/components/NavigationBar";
import ToasterProvider from "@/providers/ToasterProvider";
import Content from "@/components/Content";
import Player from "@/components/Player/Player";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useState from "react";
import React from "react";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Charton",
  description: "New Age Music App just in Telegram",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
      <I18nProvider>
        <Providers>
          <Root>
            <div className={"relative h-[100vh] flex flex-col"}>
              <Content>{children}</Content>
              <NavigationBar />
            </div>
            <Player />
          </Root>
        </Providers>
      </I18nProvider>
      </body>
    </html>
  );
}
