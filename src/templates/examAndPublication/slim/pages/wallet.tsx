import React from "react";
import Wallet from "@src/components/wallet";
import { BasePageProps } from "@src/utils/interface";
import { DEFAULT_LOGO, queryClient } from "@src/utils";
import ExamAndPublicationsWrapper from "@src/components/Wrapper/ExamAndPublicationWrapper";

const ExamsWallet = () => {
  const { cachedData } = queryClient.getQueryData("pageProps") as BasePageProps;
  const { name, logo } = cachedData.centre;

  return (
    <ExamAndPublicationsWrapper
      title="Wallet"
      description={`${name} academy online courses and folders`}
      image={logo || DEFAULT_LOGO}
      showHeader={true}
      showFooter={true}
    >
      <Wallet />
    </ExamAndPublicationsWrapper>
  );
};

export default ExamsWallet;