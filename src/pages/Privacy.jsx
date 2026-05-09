import './Legal.css';

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1 className="text-display-l">Privacy Policy</h1>
          <p className="text-body fg-3">Last updated: May 6, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2 className="text-h1">1. Introduction</h2>
            <p className="text-body fg-2">
              PouchPay ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cryptocurrency on-ramp and off-ramp platform.
            </p>
          </section>

          <section>
            <h2 className="text-h1">2. Information We Collect</h2>
            <h3 className="text-h3">2.1 Personal Information</h3>
            <p className="text-body fg-2">
              We collect personal information that you provide to us, including:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Full name and date of birth</li>
              <li className="text-body fg-2">Email address and phone number</li>
              <li className="text-body fg-2">Bank Verification Number (BVN) or National Identification Number (NIN)</li>
              <li className="text-body fg-2">Bank account details</li>
              <li className="text-body fg-2">Cryptocurrency wallet addresses</li>
              <li className="text-body fg-2">Residential address</li>
              <li className="text-body fg-2">Government-issued identification documents</li>
            </ul>

            <h3 className="text-h3">2.2 Transaction Information</h3>
            <p className="text-body fg-2">
              We collect information about your transactions, including:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Transaction amounts and currencies</li>
              <li className="text-body fg-2">Wallet addresses and blockchain network information</li>
              <li className="text-body fg-2">Transaction timestamps and status</li>
              <li className="text-body fg-2">Payment method details</li>
            </ul>

            <h3 className="text-h3">2.3 Technical Information</h3>
            <p className="text-body fg-2">
              We automatically collect certain information when you use our services:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">IP address and device information</li>
              <li className="text-body fg-2">Browser type and version</li>
              <li className="text-body fg-2">Operating system</li>
              <li className="text-body fg-2">Usage data and analytics</li>
              <li className="text-body fg-2">Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">3. How We Use Your Information</h2>
            <p className="text-body fg-2">
              We use your information for the following purposes:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2"><strong>Service Provision:</strong> To process your cryptocurrency transactions and provide our platform services</li>
              <li className="text-body fg-2"><strong>KYC/AML Compliance:</strong> To verify your identity and comply with regulatory requirements</li>
              <li className="text-body fg-2"><strong>Fraud Prevention:</strong> To detect, prevent, and address fraudulent activity and security issues</li>
              <li className="text-body fg-2"><strong>Customer Support:</strong> To respond to your inquiries and provide technical support</li>
              <li className="text-body fg-2"><strong>Communication:</strong> To send you transaction confirmations, updates, and important notices</li>
              <li className="text-body fg-2"><strong>Improvement:</strong> To analyze usage patterns and improve our services</li>
              <li className="text-body fg-2"><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">4. How We Share Your Information</h2>
            <p className="text-body fg-2">
              We may share your information with:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2"><strong>Service Providers:</strong> Third-party vendors who assist us in providing our services (e.g., payment processors, KYC verification providers)</li>
              <li className="text-body fg-2"><strong>Partner Businesses:</strong> If you access our services through a partner platform, we may share relevant information with that partner</li>
              <li className="text-body fg-2"><strong>Regulatory Authorities:</strong> Government agencies and regulators when required by law</li>
              <li className="text-body fg-2"><strong>Legal Requirements:</strong> When necessary to comply with legal obligations, court orders, or to protect our rights</li>
              <li className="text-body fg-2"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-body fg-2">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-h1">5. Data Security</h2>
            <p className="text-body fg-2">
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Encryption of data in transit and at rest</li>
              <li className="text-body fg-2">Secure database storage with access controls</li>
              <li className="text-body fg-2">Regular security audits and testing</li>
              <li className="text-body fg-2">Separate storage of personally identifiable information (PII)</li>
              <li className="text-body fg-2">HMAC signature verification for webhooks</li>
            </ul>
            <p className="text-body fg-2">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-h1">6. Data Retention</h2>
            <p className="text-body fg-2">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Provide our services to you</li>
              <li className="text-body fg-2">Comply with legal and regulatory requirements</li>
              <li className="text-body fg-2">Resolve disputes and enforce our agreements</li>
            </ul>
            <p className="text-body fg-2">
              KYC and transaction records are typically retained for a minimum of 5 years to comply with anti-money laundering regulations.
            </p>
          </section>

          <section>
            <h2 className="text-h1">7. Your Rights</h2>
            <p className="text-body fg-2">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2"><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li className="text-body fg-2"><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li className="text-body fg-2"><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
              <li className="text-body fg-2"><strong>Objection:</strong> Object to certain processing of your information</li>
              <li className="text-body fg-2"><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li className="text-body fg-2"><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-body fg-2">
              To exercise these rights, please contact us at <a href="mailto:support@pouch.finance" className="text-cyan">support@pouch.finance</a>.
            </p>
          </section>

          <section>
            <h2 className="text-h1">8. Cookies and Tracking</h2>
            <p className="text-body fg-2">
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Maintain your session and preferences</li>
              <li className="text-body fg-2">Analyze usage patterns and improve our services</li>
              <li className="text-body fg-2">Provide security features</li>
            </ul>
            <p className="text-body fg-2">
              You can control cookies through your browser settings, but disabling certain cookies may affect the functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-h1">9. Third-Party Links</h2>
            <p className="text-body fg-2">
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-h1">10. Children's Privacy</h2>
            <p className="text-body fg-2">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-h1">11. International Data Transfers</h2>
            <p className="text-body fg-2">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-h1">12. Changes to This Privacy Policy</h2>
            <p className="text-body fg-2">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-h1">13. Contact Us</h2>
            <p className="text-body fg-2">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="legal-contact">
              <p className="text-body fg-2">
                <strong>Email:</strong> <a href="mailto:support@pouch.finance" className="text-cyan">support@pouch.finance</a>
              </p>
              <p className="text-body fg-2">
                <strong>Support Portal:</strong> <a href="https://app.pouch.finance" className="text-cyan">app.pouch.finance</a>
              </p>
            </div>
          </section>
        </div>

        <div className="legal-footer">
          <a href="#home" className="text-body">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
