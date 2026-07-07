import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsWrapza from './components/WhatIsWrapza';
import MenuEcosystem from './components/MenuEcosystem';
import BusinessModel from './components/BusinessModel';
import SetupInvestment from './components/SetupInvestment';
import SupportPackage from './components/SupportPackage';
import DocumentsRequired from './components/DocumentsRequired';
import FeeStructure from './components/FeeStructure';
import ClientTimeline from './components/ClientTimeline';
import Summary from './components/Summary';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsWrapza />
        <MenuEcosystem />
        <BusinessModel />
        <SetupInvestment />
        <SupportPackage />
        <DocumentsRequired />
        <FeeStructure />
        <ClientTimeline />
        <Summary />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
