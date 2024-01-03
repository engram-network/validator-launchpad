import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${p => p.theme.screenSizes.larger}) {
    flex-direction: column;
  }
`;

export const Upgrades = (): JSX.Element => {
  useIntl();
  return (
    <ResponsiveContainer>
      {/*
          <div className="px20">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
              <StyledHeading margin="none" className="mt20" isMobile={m}>
                <FormattedMessage defaultMessage="How is Ethereum scaling?" />
              </StyledHeading>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" animateOnce>
              <Text className="mt20 mb40">
                <FormattedMessage
                  defaultMessage="Several upgrades are underway that will make Ethereum more scalable, secure, and sustainable. These upgrades will improve Ethereum while seamlessly continuing on the chain
                  of today. Here's more on the different upgrades:"
                />
              </Text>
              <UpgradeTitle className="mt20">
                <FormattedMessage defaultMessage="Proof-of-stake and the Beacon Chain" />
              </UpgradeTitle>
              <Text className="mt20">
                <FormattedMessage
                  defaultMessage="Ethereum is secured by proof-of-stake, although this was not always the case.
                  The Beacon Chain was the first step to establishing a PoS consensus layer on Ethereum, launching in parallel to Mainnet in December 2020.
                  This allowed participants to start staking their ETH and prepare the network for the formal transition from proof-of-work to proof-of-stake via The Merge."
                />
              </Text>
              <Link
                className="mt20 mb40"
                to="https://ethereum.org/en/upgrades/beacon-chain/"
              >
                <FormattedMessage defaultMessage="More on the Beacon Chain" />
              </Link>
              <UpgradeTitle className="mt20">
                <FormattedMessage defaultMessage="The Merge" />
              </UpgradeTitle>
              <Text className="mt20">
                <FormattedMessage defaultMessage="The Merge upgrade officially brought proof-of-stake to Ethereum on September 15, 2022, simultaneously deprecating proof-of-work. This prepared the chain for future scaling upgrades such as data sharding by bringing proof-of-stake consensus together with Mainnet, while simultaneously reducing energy consumption by over 99.9%." />
              </Text>
              <Text className="mt20">
                <FormattedMessage defaultMessage="This marked the merging of the execution layer (existing Mainnet) with the new consensus layer (the Beacon Chain) to form the single Ethereum chain of today." />
              </Text>
              <Link
                className="mt20 mb40"
                to="https://ethereum.org/en/upgrades/merge/"
              >
                <FormattedMessage defaultMessage="More on the Merge" />
              </Link>
              <UpgradeTitle className="mt20">
                <FormattedMessage defaultMessage="Sharding" />
              </UpgradeTitle>
              <Text className="mt20">
                <FormattedMessage defaultMessage="Sharding will change the requirement that full nodes carry the entire history of the chain, and instead will distribute this load amongst the network while still ensuring data availability. This will significantly expand the capacity of layer 1 Ethereum while maintaining the ability to operate a full node on consumer hardware, keeping the network decentralized." />
              </Text>
              <Link
                className="mt20 mb40"
                to="https://ethereum.org/en/upgrades/shard-chains/"
              >
                <FormattedMessage defaultMessage="More on data sharding" />
              </Link>
            </ScrollAnimation>
          </div>
          <UpgradesContainer>
            {upgrades.map((upgrade: upgrade) => (
              <UpgradeCard key={upgrade.title} {...upgrade} />
            ))}
          </UpgradesContainer>
          */}
    </ResponsiveContainer>
  );
};
