import Button from '../components/Button';
import Chip from '../components/Chip';
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
            <div className="hero__card">
              <div className="hero__card-header">
                <span className="text-label fg-3">Buy Crypto</span>
                {/* <Chip variant="lime">Active</Chip> */}
              </div>

              <div className="hero__amount">
                <div className="text-body-s fg-3">You Pay</div>
                <div className="hero__amount-value">
                  <span className="text-h1">₦50,000</span>
                  <span className="text-body fg-3">NGN</span>
                </div>
              </div>

              <div className="hero__divider"></div>

              <div className="hero__amount">
                <div className="text-body-s fg-3">You Receive</div>
                <div className="hero__amount-value">
                  <span className="text-h1 text-cyan">62.5</span>
                  <span className="text-body fg-3">USDT</span>
                </div>
              </div>

              <div className="hero__rate">
                <span className="text-mono fg-3">Rate: ₦800 = 1 USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
