import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import tailwindConfig from "../tailwind.emails";

export const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Tailwind config={tailwindConfig}>
      <Body className="font-stripe bg-[#f6f9fc]">
        <Preview>
          You`&apos;`re now ready to make live transactions with Stripe!
        </Preview>
        <Container className="mx-auto mb-16 bg-white py-5 pb-12">
          <Section className="px-12">
            <Img src="#" width="49" height="21" alt="Stripe" />
            <Hr className="my-5 border-[#e6ebf1]" />
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              Thanks for submitting your account information. You&apos;re now
              ready to make live transactions with Stripe!
            </Text>
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              You can view your payments and a variety of other information
              about your account right from your dashboard.
            </Text>
            <Button
              className="block rounded-[3px] bg-[#656ee8] p-[10px] text-center text-[16px] font-bold text-white no-underline"
              href="https://dashboard.stripe.com/login"
            >
              View your Stripe Dashboard
            </Button>
            <Hr className="my-5 border-[#e6ebf1]" />
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              If you haven&apos;t finished your integration, you might find our{" "}
              <Link
                className="text-[#556cd6]"
                href="https://docs.stripe.com/dashboard/basics"
              >
                docs
              </Link>{" "}
              handy.
            </Text>
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              Once you&apos;re ready to start accepting payments, you&apos;ll
              just need to use your live{" "}
              <Link
                className="text-[#556cd6]"
                href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
              >
                API keys
              </Link>{" "}
              instead of your test API keys. Your account can simultaneously be
              used for both test and live requests, so you can continue testing
              while accepting live payments. Check out our{" "}
              <Link
                className="text-[#556cd6]"
                href="https://docs.stripe.com/dashboard/basics"
              >
                tutorial about account basics
              </Link>
              .
            </Text>
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              Finally, we&apos;ve put together a{" "}
              <Link
                className="text-[#556cd6]"
                href="https://docs.stripe.com/get-started/checklist/website"
              >
                quick checklist
              </Link>{" "}
              to ensure your website conforms to card network standards.
            </Text>
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              We&apos;ll be here to help you with any step along the way. You
              can find answers to most questions and get in touch with us on our{" "}
              <Link
                className="text-[#556cd6]"
                href="https://support.stripe.com"
              >
                support site
              </Link>
              .
            </Text>
            <Text className="text-left text-base leading-6 text-[#525f7f]">
              — The Stripe team
            </Text>
            <Hr className="my-5 border-[#e6ebf1]" />
            <Text className="text-xs leading-4 text-[#8898aa]">
              Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default StripeWelcomeEmail;
