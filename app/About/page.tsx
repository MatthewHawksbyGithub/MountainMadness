import React from 'react';
import '../globals.css';

const About = () => {
  return (
    <div className="AboutUs w-96 h-96 relative">
      <div className="PetmatchIsTheUltimatePetDatingAppWhereYouCanSwipeRightToFindCompanionshipJustLikeTinderButForDogsPetmatchLetsYouCreateAProfileForYourselfAndSwipeThroughOtherAdorableProfilesInYourAreaConnectChatAndSetUpPlayDatesWithPets w-96 left-[52.87px] top-[365.02px] absolute text-blue-950 text-opacity-70 text-3xl font-normal font-['Ledger']">PetMatch is the ultimate pet dating app where you can swipe right to find companionship! Just like Tinder, but for dogs, PetMatch lets you create a profile for yourself and swipe through other adorable profiles in your area. Connect, chat, and set up play dates with pets.</div>
      <div className="AboutUs left-[54.58px] top-[189.62px] absolute text-blue-950 text-opacity-70 text-7xl font-normal font-['Ledger']">About Us</div>
      <div className="Header w-96 h-28 left-0 top-0 absolute">
        <div className="About w-36 h-20 left-[1001.45px] top-[24.26px] absolute text-black text-4xl font-normal font-['Kaushan Script']">About</div>
        <div className="PawSwipe left-[488.19px] top-[27.61px] absolute text-black text-4xl font-normal font-['Kaushan Script']">PawSwipe</div>
        <div className="SignIn left-[35.14px] top-[27.61px] absolute text-black text-4xl font-normal font-['Kaushan Script']">Sign-in</div>
      </div>
      <div className="Github w-14 h-14 pb-px left-[54.58px] top-[645.48px] absolute justify-center items-center inline-flex" />
      {/* Remove the img tag for the background */}
      <div className="BackgroundElement opacity-80 mix-blend-color-burn w-96 h-96 left-[250.06px] top-[135.32px] absolute" />
    </div>
  );
}

export default About;
