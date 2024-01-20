import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Heading } from './Heading';
import { routesEnum } from '../Routes';
import { Link } from './Link';

const RainbowBackground = styled.div`
  min-width: 100%;
  overflow: hidden;
  background-image: ${p =>
    `radial-gradient(circle at 100% -80%, ${p.theme.rainbowLight})`};
`;

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    .cta-button {
      display: none;
    }
  }

  @media screen and (max-width: 518px) {
    .extra-links {
      margin-top: 1rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  const { pathname } = useLocation();
  const despotWorkflowRoutes = [
    routesEnum.acknowledgementPage,
    routesEnum.selectClient,
    routesEnum.generateKeysPage,
    routesEnum.uploadValidatorPage,
    routesEnum.connectWalletPage,
    routesEnum.summaryPage,
    routesEnum.transactionsPage,
    routesEnum.congratulationsPage,
    routesEnum.topUpPage,
  ];

  return (
    <RainbowBackground>
      <FooterStyles>
        <div className="col">
          <Heading level={4}>
            <FormattedMessage defaultMessage="Staking Launchpad" />
          </Heading>
          <Link to={routesEnum.acknowledgementPage}>
            <FormattedMessage defaultMessage="Deposit" />
          </Link>
          <Link to={routesEnum.checklistPage}>
            <FormattedMessage defaultMessage="Checklist" />
          </Link>
          <Link to={routesEnum.termsOfServicePage}>
            <FormattedMessage defaultMessage="Terms of Service" />
          </Link>
        </div>

        {!despotWorkflowRoutes.includes(pathname as routesEnum) && (
          // eslint-disable-next-line react/self-closing-comp
          <ButtonContainer className="m-auto"></ButtonContainer>
        )}
        <div className="col extra-links">
          <Heading level={4}>
            <FormattedMessage defaultMessage="More on staking" />
          </Heading>
          <Link to={routesEnum.phishingPage}>
            <FormattedMessage defaultMessage="Avoid phishing" />
          </Link>
          <Link to="#">
            <FormattedMessage defaultMessage="Staking economics" />
          </Link>
          <Link to="https://github.com/runtimeverification/deposit-contract-verification/blob/96434de/deposit-contract-verification.pdf">
            <FormattedMessage defaultMessage="Formal verification report" />
          </Link>
        </div>
      </FooterStyles>
    </RainbowBackground>
  );
};
