import { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSplash from './components/HeroSplash.jsx';
import MacbookShowcase from './components/MacbookShowcase.jsx';

function App() {
  const [stage, setStage] = useState('splash'); // 'splash' | 'macbook'

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-hidden">
      <Header onBack={() => setStage('splash')} canGoBack={stage !== 'splash'} />
      {stage === 'splash' ? (
        <HeroSplash onEnter={() => setStage('macbook')} />
      ) : (
        <MacbookShowcase />
      )}
    </div>
  );
}

export default App;
