"use client";

// import { useTranslations } from "next-intl";

import { Page } from "@/components/Page";

import HomeLayout from "@/components/HomeLayout/HomeLayout";

export default function Home() {
  // const t = useTranslations("i18n");

  return (
    <Page back={false}>
      <HomeLayout />

      {/*<List>*/}
      {/*  <Section*/}
      {/*    header="Features"*/}
      {/*    footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"*/}
      {/*  >*/}
      {/*    <Link href="/ton-connect">*/}
      {/*      <Cell*/}
      {/*        before={*/}
      {/*          <Image*/}
      {/*            src={tonSvg.src}*/}
      {/*            style={{ backgroundColor: '#007AFF' }}*/}
      {/*          />*/}
      {/*        }*/}
      {/*        subtitle="Connect your TON wallet"*/}
      {/*      >*/}
      {/*        TON Connect*/}
      {/*      </Cell>*/}
      {/*    </Link>*/}
      {/*  </Section>*/}
      {/*  <Section*/}
      {/*    header="Application Launch Data"*/}
      {/*    footer="These pages help developer to learn more about current launch information"*/}
      {/*  >*/}
      {/*    <Link href="/init-data">*/}
      {/*      <Cell subtitle="User data, chat information, technical data">*/}
      {/*        Init Data*/}
      {/*      </Cell>*/}
      {/*    </Link>*/}
      {/*    <Link href="/launch-params">*/}
      {/*      <Cell subtitle="Platform identifier, Mini Apps version, etc.">*/}
      {/*        Launch Parameters*/}
      {/*      </Cell>*/}
      {/*    </Link>*/}
      {/*    <Link href="/theme-params">*/}
      {/*      <Cell subtitle="Telegram application palette information">*/}
      {/*        Theme Parameters*/}
      {/*      </Cell>*/}
      {/*    </Link>*/}
      {/*  </Section>*/}
      {/*  <Section header={t('header')} footer={t('footer')}>*/}
      {/*    <LocaleSwitcher/>*/}
      {/*  </Section>*/}
      {/*</List>*/}
    </Page>
  );
}
