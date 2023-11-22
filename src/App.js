import { useEffect } from 'react';
import './App.css';
import Collabration from './Components/Collabration/Collabration';
import Footer from './Components/Footer/Footer';
import GithubIssue from './Components/GithubIssue/GithubIssue';
import Header from './Components/Header/Header';
import AOS from "aos";
import Card from './Components/Card/Card';
import MAinSection from './Components/MainSection/MAinSection';
import BottomSection from './Components/BottomSection/BottomSection';
import Vulnerabilityfixes from './Components/vulnerabilityfixes/Vulnerabilityfixes';
import VulnerabilityCard from './Components/vulnerabilityCard/VulnerabilityCard';
import Application from './Components/Application/Application';

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
  <>
  <Header/>
  <MAinSection/>
  <Application/>
  <Vulnerabilityfixes/>
  <VulnerabilityCard/>
  <Collabration/>
  <GithubIssue/>
  <Card/>
  <BottomSection/>
  <Footer/>
  
  </>
  );
}

export default App;
