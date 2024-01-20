import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from '../../../components/Button';
import { Heading } from '../../../components/Heading';
import { routesEnum } from '../../../Routes';
import { Link } from '../../../components/Link';
import { Step } from './Step';
import { IS_MAINNET, TESTNET_LAUNCHPAD_URL } from '../../../utils/envVars';

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${p => p.theme.screenSizes.largest};
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;
  @media only screen and (max-width: ${p => p.theme.screenSizes.largest}) {
    padding: 0 60px;
  }
`;
const StepsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  @media only screen and (max-width: 1380px) {
    justify-content: center;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignupSteps = (): JSX.Element => {
  const m: boolean = (window as any).mobileCheck();
  const { formatMessage } = useIntl();
  return (
    <Container className="py100">
      <ScrollAnimation animateIn="fadeIn" animateOnce>
        <Heading level={2} size="medium" color="blueDark" margin="none">
          <FormattedMessage defaultMessage="Validator's Staking Tips" />
        </Heading>
        <Subtitle>
          <FormattedMessage
            defaultMessage="Becoming a validator is a big responsibility with important
          preparation steps. Only start the deposit process when you're ready."
          />
        </Subtitle>
      </ScrollAnimation>
      <StepsContainer>
        <ScrollAnimation animateIn="fadeInUp" animateOnce>
          <Step
            emoji="📚"
            emojiAlt={formatMessage({ defaultMessage: 'books' })}
            title={formatMessage({
              defaultMessage: '1. Read our FAQs',
            })}
            content={formatMessage({
              defaultMessage:
                'The staking program is that will help our public Blockchain protocol to be safer and more resilient. We invite institutions, companies to join and bring their ecosystem on our chain.',
            })}
          >
            <Link to={routesEnum.FaqPage} primary>
              <FormattedMessage defaultMessage="Validators FAQ" />
            </Link>
          </Step>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={300}>
          <Step
            emoji="🔧"
            emojiAlt={formatMessage({ defaultMessage: 'wrench' })}
            title={formatMessage({ defaultMessage: '2. Prerequisites' })}
            content={formatMessage({
              defaultMessage:
                "Make sure you complete all of the validator preparation checklist before running the nodes from your computer.",
            })}
          >
            <Link to={routesEnum.checklistPage} primary>
              <FormattedMessage defaultMessage="Hardware checklist" />
            </Link>
          </Step>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={150}>
          <Step
            emoji="🥋"
            emojiAlt={formatMessage({
              defaultMessage: 'martial arts uniform',
            })}
            title={formatMessage({
              defaultMessage: '3. ⁠Prepare on Engram testnet',
            })}
            content={formatMessage({
              defaultMessage:
                'While risking real GRAM coins on Engram Mainet, we recommend validators and stakers to try and practice on our testnet chain.',
            })}
          >
            {IS_MAINNET ? (
              <Link primary to={TESTNET_LAUNCHPAD_URL}>
                <FormattedMessage defaultMessage="Try the testnet" />
              </Link>
            ) : (
              <FormattedMessage defaultMessage="You're on the testnet" />
            )}
          </Step>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={300}>
          <Step
            emoji="🎣"
            emojiAlt={formatMessage({
              defaultMessage: 'fishing rod',
            })}
            title={formatMessage({ defaultMessage: '4. Play Safe' })}
            content={formatMessage({
              defaultMessage:
                "Make sure you know The things that may affects your staking process, like phishing. Here's the list of things you need to avoid.",
            })}
          >
            <Link to={routesEnum.phishingPage} primary>
              <FormattedMessage defaultMessage="Phishing guide" />
            </Link>
          </Step>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={150}>
          <Step
            emoji="💰"
            emojiAlt={formatMessage({ defaultMessage: 'money bag' })}
            title={formatMessage({ defaultMessage: '5. Time to deposit' })}
            content={formatMessage({
              defaultMessage:
                "Once you feel comfortable and ready to stake, you can directly launch the deposit contract using your GRAM coin that you can send to your new generated keys.",
            })}
          >
            <Link to={routesEnum.acknowledgementPage} primary>
              <FormattedMessage defaultMessage="Start deposit process" />
            </Link>
          </Step>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce delay={300}>
          <Step
            emoji="🕰"
            emojiAlt={formatMessage({ defaultMessage: 'clock' })}
            title={formatMessage({
              defaultMessage: '6. Wait to become active',
            })}
            content={formatMessage({
              defaultMessage:
                "Once you have deposited the GRAM coin to staking contract, it won't be active straight away. Wait the activation process that will take approximately 1 day until it becomes active.",
            })}
          >
            <Link to={routesEnum.checklistPage} primary>
              <FormattedMessage defaultMessage="Complete checklist" />
            </Link>
          </Step>
        </ScrollAnimation>
      </StepsContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce delay={450}>
        <ButtonContainer className="pt100">
          <Link to={routesEnum.acknowledgementPage}>
            <Button
              rainbow
              className="m-auto"
              fullWidth
              width={m ? undefined : 400}
              label={formatMessage({
                defaultMessage: 'Become a validator',
              })}
            />
          </Link>
        </ButtonContainer>
      </ScrollAnimation>
    </Container>
  );
};
