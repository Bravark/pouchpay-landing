import { useState } from 'react';
import Button from './Button';
import Chip from './Chip';
import './WidgetDemo.css';

export default function WidgetDemo() {
  const [activeTab, setActiveTab] = useState('npm');

  const npmInstall = `npm install @pouchpay/widget`;
  const yarnInstall = `yarn add @pouchpay/widget`;

  const reactCode = `import { PouchPayWidget } from '@pouchpay/widget';

function App() {
  return (
    <PouchPayWidget
      apiKey="your_api_key"
      type="onramp"
      theme="dark"
    />
  );
}`;

  const vanillaCode = `<script src="https://widget.pouch.finance/widget.js"></script>

<div id="pouchpay-widget"></div>

<script>
  PouchPay.init({
    apiKey: 'your_api_key',
    type: 'onramp',
    theme: 'dark'
  });
</script>`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="widget-demo">
      <div className="widget-demo__header">
        <Chip variant="cyan">Live Widget Demo</Chip>
        <h3 className="text-h2">Try it yourself</h3>
        <p className="text-body fg-2">
          Install via npm or use our CDN. Works with React, Next.js, Vue, and vanilla JavaScript.
        </p>
      </div>

      <div className="widget-demo__tabs">
        <button
          className={`widget-demo__tab ${activeTab === 'npm' ? 'active' : ''}`}
          onClick={() => setActiveTab('npm')}
        >
          npm
        </button>
        <button
          className={`widget-demo__tab ${activeTab === 'yarn' ? 'active' : ''}`}
          onClick={() => setActiveTab('yarn')}
        >
          yarn
        </button>
        <button
          className={`widget-demo__tab ${activeTab === 'react' ? 'active' : ''}`}
          onClick={() => setActiveTab('react')}
        >
          React
        </button>
        <button
          className={`widget-demo__tab ${activeTab === 'vanilla' ? 'active' : ''}`}
          onClick={() => setActiveTab('vanilla')}
        >
          Vanilla JS
        </button>
      </div>

      <div className="widget-demo__content">
        {activeTab === 'npm' && (
          <div className="widget-demo__code-block">
            <pre className="text-mono"><code>{npmInstall}</code></pre>
            <button
              className="widget-demo__copy"
              onClick={() => copyToClipboard(npmInstall)}
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        )}

        {activeTab === 'yarn' && (
          <div className="widget-demo__code-block">
            <pre className="text-mono"><code>{yarnInstall}</code></pre>
            <button
              className="widget-demo__copy"
              onClick={() => copyToClipboard(yarnInstall)}
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        )}

        {activeTab === 'react' && (
          <div className="widget-demo__code-block">
            <pre className="text-mono"><code>{reactCode}</code></pre>
            <button
              className="widget-demo__copy"
              onClick={() => copyToClipboard(reactCode)}
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        )}

        {activeTab === 'vanilla' && (
          <div className="widget-demo__code-block">
            <pre className="text-mono"><code>{vanillaCode}</code></pre>
            <button
              className="widget-demo__copy"
              onClick={() => copyToClipboard(vanillaCode)}
              title="Copy to clipboard"
            >
              📋
            </button>
          </div>
        )}
      </div>

      <div className="widget-demo__actions">
        <Button
          variant="primary"
          size="medium"
          onClick={() => window.open('https://widget.pouch.finance', '_blank')}
        >
          Try Live Demo
        </Button>
        <Button
          variant="ghost"
          size="medium"
          onClick={() => window.open('https://www.npmjs.com/package/@pouchpay/widget', '_blank')}
        >
          View on npm
        </Button>
      </div>

      <div className="widget-demo__features">
        <div className="widget-demo__feature">
          <span className="text-body-s text-cyan">✓</span>
          <span className="text-body-s fg-3">Onramp & Offramp</span>
        </div>
        <div className="widget-demo__feature">
          <span className="text-body-s text-cyan">✓</span>
          <span className="text-body-s fg-3">Light & Dark themes</span>
        </div>
        <div className="widget-demo__feature">
          <span className="text-body-s text-cyan">✓</span>
          <span className="text-body-s fg-3">Modal or Inline mode</span>
        </div>
        <div className="widget-demo__feature">
          <span className="text-body-s text-cyan">✓</span>
          <span className="text-body-s fg-3">TypeScript support</span>
        </div>
      </div>
    </div>
  );
}
