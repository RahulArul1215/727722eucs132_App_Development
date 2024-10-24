import { Hero } from './Hero';
import TransparencyBanner from './Transparency';
import IconButtons from './BlockInfo';
import Systemwork from './Systemwork';
import PartyRegistrationForm from './PartyRegisterForm';
import { VotingPage } from './VotingPage';
import Robot from './Robot';
import WhyBlockchain from './WhyBlockchain';
import Footer from './Footer';
import PublicRegister from './PublicRegister';

function Home() {
  return (
    <div className="App">
      <Hero/>
      <IconButtons/>
      <TransparencyBanner/>
      <Systemwork/>
      <WhyBlockchain/>
      

    </div>
  );
}

export default Home;
