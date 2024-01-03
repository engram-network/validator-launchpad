import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

// adds an opaque eth logo behind the text on small screen sizes
export const Introduction = (): JSX.Element => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce>
      {/*
            <Heading level={2} size="medium" color="blueDark" margin="none">
              <FormattedMessage defaultMessage="Validators and Ethereum" />
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" animateOnce>
            <Text className="mt20">
              <FormattedMessage
                defaultMessage="This launchpad will help you become a validator, so you can play
                  an active part in Ethereum's future. Validators are key to the
                  more secure, scalable, and sustainable Ethereum we're building
                  together."
              />
            </Text>
            <Link
              className="mt20 mb40"
              to="https://ethereum.org/en/upgrades/vision/"
            >
              <FormattedMessage defaultMessage="More on the Ethereum vision" />
            </Link>
            <Text className="mt20">
              <FormattedMessage defaultMessage="By running a validator, you'll be responsible for securing the network and receive continuous payouts for actions that help the network reach consensus." />
            </Text>
            <Text className="mt20">
              <FormattedMessage defaultMessage="Since the successful transition to proof-of-stake via The Merge, Ethereum is fully secured by proof-of-stake validators. By running a validator, you'll be helping to secure the Ethereum network." />
            </Text>
            <Link
              className="mt20"
              to="https://ethereum.org/en/upgrades/beacon-chain/"
            >
              <FormattedMessage defaultMessage="More on the Beacon Chain" />
            </Link>
            <Link
              className="mt20 mb40"
              to="https://ethereum.org/en/upgrades/merge/"
            >
              <FormattedMessage defaultMessage="More on the Merge" />
            </Link>
            <Text className="mt20">
              <FormattedMessage
                defaultMessage="Validating in Ethereum is not the same as mining. The outcomes are
                  similar: the work you do will extend and secure the chain. But the
                  process is completely different because they use different
                  consensus mechanisms."
              />
            </Text>
            <Link
              className="mt20 mb40"
              to="https://ethereum.org/en/developers/docs/consensus-mechanisms/"
            >
              <FormattedMessage defaultMessage="More on consensus mechanisms" />
            </Link>
            {/* NOTE: this section felt like there was a lot of repetition with the section below so have reframed to talk about validators in the context of the upgrades 
            */}
    </ScrollAnimation>
  );
};
