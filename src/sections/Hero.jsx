import Button from '../components/Button';
import Chip from '../components/Chip';
import { PouchPayWidget } from '@pouchpay/widget';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__main">
            {/* <Chip variant="cyan">🌍 Africa-First Crypto Platform</Chip> */}

            <h1 className="text-display-xl hero__title">
              Seamless Crypto On/Off-Ramp for <span className="text-primary">Africa</span>
            </h1>

            <p className="text-body hero__description fg-2">
              Buy and sell cryptocurrency using local payment methods and currencies.
              PouchPay enables businesses and individuals across Africa to seamlessly
              convert between Nigerian Naira and USDT/USDC.
            </p>

            <div className="hero__actions">
              <Button
                variant="primary"
                size="large"
                onClick={() => window.open('https://app.pouch.finance', '_blank')}
              >
                Get Started - Users
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={() => window.open('https://dash.pouch.finance', '_blank')}
              >
                Get Started - Developers
              </Button>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <div className="text-display-m text-cyan">₦2.5B+</div>
                <div className="text-body-s fg-3">Monthly Volume</div>
              </div>
              <div className="hero__stat">
                <div className="text-display-m text-lime">50k+</div>
                <div className="text-body-s fg-3">Active Users</div>
              </div>
              <div className="hero__stat">
                <div className="text-display-m text-violet">99.9%</div>
                <div className="text-body-s fg-3">Uptime</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <PouchPayWidget
              createSession={{
                type: 'ONRAMP',
                walletAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                cryptoCurrency: 'USDT',
                cryptoNetwork: 'ERC20',
                amount: 100,
                countryCode: 'NG',
                currency: 'NGN'
              }}
              variant="inline"
              theme="dark"
              apiKey="6770678da087865b607546b5c822792444824f09d5527533d15a7b1090a49ad3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
