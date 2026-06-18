import Button from '../components/Button';
import './CTA.css';
import logo from '../assets/pouchLogo.png';

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__card">
          <div className="cta__content">
            <h2 className="text-display-m">
              Ready to integrate crypto payments for African users?
            </h2>
            <p className="text-body fg-2">
              Join thousands of businesses using PouchPay to bridge the gap between
              cryptocurrency and local African banking systems.
            </p>

            <div className="cta__actions">
              <Button
                variant="primary"
                size="large"
                onClick={() => window.open('https://dash.pouch.finance', '_blank')}
              >
                Get API Keys
              </Button>
              <Button
                variant="glow"
                size="large"
                onClick={() => window.location.href = 'mailto:support@pouch.finance?subject=Sales Inquiry'}
              >
                Contact Sales
              </Button>
            </div>

            <div className="cta__links">
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="text-body-s">Documentation</a>
              <span className="fg-4">·</span>
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="text-body-s">API Reference</a>
              <span className="fg-4">·</span>
              <a href="mailto:support@pouch.finance" className="text-body-s">Support</a>
            </div>
          </div>

          <div className="cta__stats">
            <div className="cta__stat-item">
              <div className="text-h2 text-cyan">150+</div>
              <div className="text-body-s fg-3">Partner Companies</div>
            </div>
            <div className="cta__stat-item">
              <div className="text-h2 text-lime">12</div>
              <div className="text-body-s fg-3">Supported Networks</div>
            </div>
            <div className="cta__stat-item">
              <div className="text-h2 text-violet">24/7</div>
              <div className="text-body-s fg-3">Developer Support</div>
            </div>
          </div>
        </div>

        <footer className="cta__footer">
          <div className="cta__footer-brand">
            <div className="cta__footer-logo">
              <img src={logo} alt="PouchPay Logo" className="cta__footer-logo-img" />
              <div className="text-h3">PouchPay</div>
            </div>
            <p className="text-body-s fg-3">
              Seamless crypto on/off-ramp for Africa
            </p>
          </div>

          <div className="cta__footer-links">
            <div>
              <div className="text-label fg-3">Product</div>
              <a href="#features" className="text-body-s">Features</a>
              <a href="https://widget.pouch.finance" target="_blank" rel="noopener noreferrer" className="text-body-s">Widget</a>
              <a href="https://app.pouch.finance" target="_blank" rel="noopener noreferrer" className="text-body-s">User Portal</a>
            </div>

            <div>
              <div className="text-label fg-3">Developers</div>
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="text-body-s">Documentation</a>
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="text-body-s">API Reference</a>
              <a href="https://www.npmjs.com/package/@pouchpay/sdk" target="_blank" rel="noopener noreferrer" className="text-body-s">SDK</a>
            </div>

            <div>
              <div className="text-label fg-3">Resources</div>
              <a href="https://dash.pouch.finance" target="_blank" rel="noopener noreferrer" className="text-body-s">Developer Portal</a>
              <a href="#integration" className="text-body-s">Integration Guide</a>
              <a href="https://api.pouch.finance/docs" target="_blank" rel="noopener noreferrer" className="text-body-s">API Docs</a>
            </div>

            <div>
              <div className="text-label fg-3">Support</div>
              <a href="mailto:support@pouch.finance" className="text-body-s">Contact Support</a>
              <a href="https://twitter.com/PouchPay" target="_blank" rel="noopener noreferrer" className="text-body-s">Twitter</a>
              <a href="https://app.pouch.finance" target="_blank" rel="noopener noreferrer" className="text-body-s">Help Center</a>
            </div>
          </div>
        </footer>

        <div className="cta__copyright">
          <p className="text-body-s fg-4">
            © 2026 Liquifia Limited. All rights reserved.
          </p>
          <div className="cta__legal">
            <a href="#privacy" className="text-body-s fg-4">Privacy Policy</a>
            <span className="fg-4">·</span>
            <a href="#terms" className="text-body-s fg-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
