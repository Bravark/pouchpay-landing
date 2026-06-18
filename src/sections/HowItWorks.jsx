import Chip from '../components/Chip';
import './HowItWorks.css';

export default function HowItWorks() {
  const onrampSteps = [
    'Enter wallet address and amount',
    'Complete email and KYC verification (one-time)',
    'Receive virtual bank account details',
    'Make bank transfer in NGN',
    'Crypto automatically sent to wallet'
  ];

  const offrampSteps = [
    'Enter bank account and crypto amount',
    'Complete verification (if first time)',
    'Receive deposit wallet address',
    'Send crypto to provided address',
    'NGN automatically deposited to bank'
  ];

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="how-it-works__header">
          <span className="text-label text-lime">HOW IT WORKS</span>
          <h2 className="text-display-m">Simple, fast, and secure</h2>
        </div>

        <div className="how-it-works__grid">
          <div className="how-it-works__flow">
            <div className="how-it-works__flow-header">
              {/* <Chip variant="cyan">Onramp</Chip> */}
              <h3 className="text-h2">Buy Crypto</h3>
              <p className="text-body fg-3">
                Convert Nigerian Naira to cryptocurrency
              </p>
            </div>

            <ol className="how-it-works__steps">
              {onrampSteps.map((step, index) => (
                <li key={index} className="how-it-works__step">
                  <div className="how-it-works__step-number">
                    <span className="text-mono">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <p className="text-body">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="how-it-works__flow">
            <div className="how-it-works__flow-header">
              {/* <Chip variant="lime">Offramp</Chip> */}
              <h3 className="text-h2">Sell Crypto</h3>
              <p className="text-body fg-3">
                Convert cryptocurrency to Nigerian Naira
              </p>
            </div>

            <ol className="how-it-works__steps">
              {offrampSteps.map((step, index) => (
                <li key={index} className="how-it-works__step">
                  <div className="how-it-works__step-number">
                    <span className="text-mono">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <p className="text-body">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
