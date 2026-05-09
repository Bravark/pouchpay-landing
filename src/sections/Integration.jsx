import Card from '../components/Card';
import Chip from '../components/Chip';
import Button from '../components/Button';
import WidgetDemo from '../components/WidgetDemo';
import './Integration.css';

export default function Integration() {
  const integrations = [
    {
      tag: 'Easiest',
      tagVariant: 'cyan',
      title: 'Widget',
      description: 'Drop our React component into your app. Handles everything from UI to verification.',
      features: ['React component', 'Next.js & Vite support', 'Customizable theming']
    },
    {
      tag: 'Flexible',
      tagVariant: 'violet',
      title: 'SDK',
      description: 'Use our TypeScript SDK for server-side or client-side integration.',
      features: ['TypeScript SDK', 'Full type safety', 'Comprehensive methods']
    },
    {
      tag: 'Complete Control',
      tagVariant: 'lime',
      title: 'API',
      description: 'Build custom experiences with our REST API. Perfect for unique workflows.',
      features: ['REST API', 'Webhook notifications', 'HMAC security']
    }
  ];

  return (
    <section id="integration" className="integration section">
      <div className="container">
        <div className="integration__header">
          <span className="text-label text-magenta">INTEGRATION OPTIONS</span>
          <h2 className="text-display-m">Built for developers</h2>
          <p className="text-body fg-2">
            Choose the integration method that fits your needs. Get started in minutes, not months.
          </p>
        </div>

        <div className="integration__grid">
          {integrations.map((integration, index) => (
            <Card key={index} className="integration-card">
              <Chip variant={integration.tagVariant}>{integration.tag}</Chip>
              <h3 className="text-h2">{integration.title}</h3>
              <p className="text-body fg-2">{integration.description}</p>

              <ul className="integration-card__features">
                {integration.features.map((feature, idx) => (
                  <li key={idx} className="text-body-s fg-3">
                    <span className="integration-card__check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <WidgetDemo />

        <div className="integration__cta">
          <Button
            variant="primary"
            size="large"
            onClick={() => window.open('https://api.pouch.finance/docs', '_blank')}
          >
            View Documentation
          </Button>
          <Button
            variant="ghost"
            size="large"
            onClick={() => window.open('https://www.npmjs.com/package/@pouchpay/sdk', '_blank')}
          >
            Explore SDK
          </Button>
        </div>
      </div>
    </section>
  );
}
