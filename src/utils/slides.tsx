import OnboardingOne from "@assets/onboarding/onboarding-one.svg";
import OnboardingTwo from "@assets/onboarding/onboarding-two.svg";
import OnboardingThree from "@assets/onboarding/onboarding-three.svg";
import { ReactNode } from "react";

export type OnboardingDataItemType = {
  id: string;
  image: ReactNode;
  textOne: string;
  textTwo: string;
};

type OnboardingDataType = OnboardingDataItemType[];

const onboardingData: OnboardingDataType = [
  {
    id: "1",
    image: <OnboardingOne />,
    textOne: "INVEST &",
    textTwo: "Grow Your Wealth",
  },
  {
    id: "2",
    image: <OnboardingTwo />,
    textOne: "SECURE &",
    textTwo: "Guaranteed Loan Offers",
  },
  {
    id: "3",
    image: <OnboardingThree />,
    textOne: "MANAGE",
    textTwo: "Your Finance",
  },
];

export default onboardingData;
