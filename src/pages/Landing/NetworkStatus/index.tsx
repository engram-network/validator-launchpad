import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FormattedMessage, useIntl } from 'react-intl';
import { Heading } from '../../../components/Heading';
import { Text } from '../../../components/Text';
import { Link } from '../../../components/Link';
import { Button } from '../../../components/Button';
import { BEACONCHAIN_URL, TICKER_NAME } from '../../../utils/envVars';

//
// Styled Components

const Container = styled.div`
  background-color: ${p => p.theme.green.light};
  position: relative;
  padding: ${(p: { isMobile: boolean }) => (p.isMobile ? '64px 0' : '124px 0')};
`;
const Content = styled.div`
  max-width: ${p => p.theme.screenSizes.largest};
  width: 100%;
  margin: 0 auto;
  padding: 0 120px;
  @media only screen and (max-width: ${p => p.theme.screenSizes.largest}) {
    padding: ${(p: { isMobile: boolean }) =>
      p.isMobile ? '0 20px' : '0 60px'};
  }
`;

const BoldGreen = styled.span`
  color: ${(p: { theme: any; fontSize: number }) => p.theme.green.dark};
  font-size: ${(p: { theme: any; fontSize: number }) => p.fontSize}px;
  font-weight: bold;
`;

const Card = styled.div`
  padding: 24px;
  border: 1px solid ${p => p.theme.gray.dark};
  border-radius: 4px;
  width: 100%;
  margin: 16px;
  background: white;
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    margin: 0px;
    margin-top: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${p => p.theme.screenSizes.medium}) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type PropData = {
  amountEth: number;
  totalValidators: number;
  status: number;
};

//
// Main Component

export const NetworkStatus: React.FC<{
  state: PropData;
  // eslint-disable-next-line no-empty-pattern
}> = ({}): JSX.Element | null => {
  const { formatMessage } = useIntl();
  const [m, setM] = React.useState<boolean>((window as any).mobileCheck());

  React.useEffect(() => {
    const resizeListener = () => {
      setM((window as any).mobileCheck());
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return (
    <Container isMobile={m}>
      <ScrollAnimation delay={750} animateIn="fadeIn" animateOnce>
        <Content isMobile={m}>
          <Heading level={2} size="medium" color="blueDark" className="mb40">
            <FormattedMessage defaultMessage="The Engram Economics" />
          </Heading>
          <CardContainer>
            <Card>
              <Heading level={3} size="medium" color="blueDark" margin="none">
                <FormattedMessage
                  defaultMessage="Total {TICKER_NAME} staked"
                  values={{ TICKER_NAME }}
                />
              </Heading>
              <Text size="x-large" className="mt20">
                <BoldGreen className="mr10" fontSize={24}>
                  <FormattedMessage
                    defaultMessage="9278"
                    values={{ TICKER_NAME }}
                  />
                </BoldGreen>
              </Text>
            </Card>
            <Card>
              <Heading level={3} size="medium" color="blueDark" margin="none">
                <FormattedMessage defaultMessage="Total validators" />
              </Heading>
              <Text size="x-large" className="mt20">
                <BoldGreen className="mr10" fontSize={24}>
                  <FormattedMessage
                    defaultMessage="301"
                    values={{ TICKER_NAME }}
                  />
                </BoldGreen>
              </Text>
            </Card>
            <Card>
              <Heading level={3} size="medium" color="blueDark" margin="none">
                <FormattedMessage
                  defaultMessage="Current APR"
                  description="APR refers to Annual Percentage Rate"
                />
              </Heading>
              <Text size="x-large" className="mt20">
                <BoldGreen className="mr10" fontSize={24}>
                  <FormattedMessage
                    defaultMessage="7%"
                    values={{ TICKER_NAME }}
                  />
                </BoldGreen>
              </Text>
            </Card>
          </CardContainer>
          <ButtonContainer className="pt40">
            <Link isTextLink={false} to={BEACONCHAIN_URL}>
              <Button
                fullWidth
                width={m ? undefined : 400}
                label={formatMessage({ defaultMessage: 'More stats' })}
              />
            </Link>
          </ButtonContainer>
        </Content>
      </ScrollAnimation>
    </Container>
  );
};
