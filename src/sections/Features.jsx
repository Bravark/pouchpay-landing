import Card from '../components/Card';
import './Features.css';
import { Landmark, Globe, ShieldCheck, Zap, Bell, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Landmark,
      title: 'Local Payment Methods',
      description: 'Nigerian bank transfers (NGN), no international cards required'
    },
    {
      icon: Globe,
      title: 'Multi-Network Support',
      description: 'TRC20, ERC20, Polygon, BSC, Base, Solana, Bitcoin, and more'
    },
    {
      icon: ShieldCheck,
      title: 'Built-In KYC/AML',
      description: 'Compliant verification with BVN and NIN support'
    },
    {
      icon: Zap,
      title: 'Developer-Friendly',
      description: 'React widget, TypeScript SDK, and REST API'
    },
    {
      icon: Bell,
      title: 'Real-Time Updates',
      description: 'Live transaction tracking and webhook notifications'
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Bank-grade security with HMAC signature verification'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features__header">
          <span className="text-label text-violet">KEY FEATURES</span>
          <h2 className="text-display-m">
            Everything you need to bridge crypto and local currency
          </h2>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="feature-card">
                <div className="feature-card__icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-h3">{feature.title}</h3>
                <p className="text-body fg-2">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
