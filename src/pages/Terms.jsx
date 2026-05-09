import './Legal.css';

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1 className="text-display-l">Terms of Service</h1>
          <p className="text-body fg-3">Last updated: May 6, 2026</p>
        </div>

        <div className="legal-content">
          <section>
            <h2 className="text-h1">1. Acceptance of Terms</h2>
            <p className="text-body fg-2">
              By accessing or using PouchPay's platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
            </p>
            <p className="text-body fg-2">
              These Terms constitute a legally binding agreement between you and PouchPay. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-h1">2. Eligibility</h2>
            <p className="text-body fg-2">
              To use our Services, you must:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Be at least 18 years of age</li>
              <li className="text-body fg-2">Have the legal capacity to enter into binding contracts</li>
              <li className="text-body fg-2">Not be located in a jurisdiction where our Services are prohibited</li>
              <li className="text-body fg-2">Not be on any sanctions lists or prohibited from using our Services under applicable law</li>
              <li className="text-body fg-2">Complete our Know Your Customer (KYC) verification process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">3. Account Registration and Security</h2>
            <h3 className="text-h3">3.1 Account Creation</h3>
            <p className="text-body fg-2">
              To use our Services, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-h3">3.2 KYC Verification</h3>
            <p className="text-body fg-2">
              We require identity verification to comply with anti-money laundering (AML) and counter-terrorist financing (CTF) regulations. You agree to provide:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Valid government-issued identification</li>
              <li className="text-body fg-2">Bank Verification Number (BVN) or National Identification Number (NIN)</li>
              <li className="text-body fg-2">Proof of address</li>
              <li className="text-body fg-2">Any additional information we may reasonably request</li>
            </ul>

            <h3 className="text-h3">3.3 Account Security</h3>
            <p className="text-body fg-2">
              You must immediately notify us of any unauthorized access to your account. We are not liable for any losses resulting from unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-h1">4. Services Description</h2>
            <h3 className="text-h3">4.1 Onramp Services</h3>
            <p className="text-body fg-2">
              Our onramp service allows you to purchase cryptocurrency (USDT, USDC) using Nigerian Naira (NGN) via bank transfer. We facilitate the transaction but do not provide investment advice.
            </p>

            <h3 className="text-h3">4.2 Offramp Services</h3>
            <p className="text-body fg-2">
              Our offramp service allows you to sell cryptocurrency and receive Nigerian Naira in your bank account. You are responsible for ensuring the cryptocurrency you send is legally obtained.
            </p>

            <h3 className="text-h3">4.3 API and Integration Services</h3>
            <p className="text-body fg-2">
              We provide APIs, SDKs, and widgets for businesses to integrate our Services. Partner businesses must comply with our API terms and acceptable use policies.
            </p>
          </section>

          <section>
            <h2 className="text-h1">5. Fees and Payments</h2>
            <p className="text-body fg-2">
              We charge fees for our Services as disclosed at the time of transaction. Fees may include:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Service fees (typically 1.5% of transaction amount)</li>
              <li className="text-body fg-2">Network fees for blockchain transactions</li>
              <li className="text-body fg-2">Third-party payment processing fees</li>
            </ul>
            <p className="text-body fg-2">
              All fees are deducted from the transaction amount. We reserve the right to modify our fee structure with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-h1">6. Transaction Processing</h2>
            <h3 className="text-h3">6.1 Transaction Limits</h3>
            <p className="text-body fg-2">
              We may impose transaction limits based on your verification level, transaction history, and applicable regulations.
            </p>

            <h3 className="text-h3">6.2 Processing Times</h3>
            <p className="text-body fg-2">
              Transaction processing times vary based on payment method, blockchain network congestion, and verification requirements. We do not guarantee specific processing times.
            </p>

            <h3 className="text-h3">6.3 Failed Transactions</h3>
            <p className="text-body fg-2">
              Transactions may fail due to insufficient funds, incorrect information, network issues, or compliance concerns. We will make reasonable efforts to notify you of failed transactions.
            </p>

            <h3 className="text-h3">6.4 Refunds and Reversals</h3>
            <p className="text-body fg-2">
              Cryptocurrency transactions are generally irreversible. Refunds may be issued at our discretion in cases of technical errors or duplicate payments, subject to applicable fees.
            </p>
          </section>

          <section>
            <h2 className="text-h1">7. Prohibited Activities</h2>
            <p className="text-body fg-2">
              You agree not to use our Services for:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Money laundering or terrorist financing</li>
              <li className="text-body fg-2">Fraud, scams, or deceptive practices</li>
              <li className="text-body fg-2">Purchasing or selling illegal goods or services</li>
              <li className="text-body fg-2">Violating any applicable laws or regulations</li>
              <li className="text-body fg-2">Circumventing our security measures or verification processes</li>
              <li className="text-body fg-2">Using automated systems to access our Services without authorization</li>
              <li className="text-body fg-2">Interfering with or disrupting our Services</li>
              <li className="text-body fg-2">Impersonating others or providing false information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">8. Compliance and Regulatory Matters</h2>
            <p className="text-body fg-2">
              We comply with applicable Nigerian and international financial regulations. We reserve the right to:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Suspend or terminate accounts that violate regulations</li>
              <li className="text-body fg-2">Report suspicious activities to relevant authorities</li>
              <li className="text-body fg-2">Request additional verification information at any time</li>
              <li className="text-body fg-2">Freeze funds pending investigation of suspicious activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">9. Intellectual Property</h2>
            <p className="text-body fg-2">
              All content, trademarks, logos, and intellectual property on our platform are owned by PouchPay or our licensors. You may not use our intellectual property without prior written permission.
            </p>
            <p className="text-body fg-2">
              Our APIs, SDKs, and widgets are licensed to you for integration purposes only. You may not reverse engineer, decompile, or create derivative works without authorization.
            </p>
          </section>

          <section>
            <h2 className="text-h1">10. Disclaimers and Limitations of Liability</h2>
            <h3 className="text-h3">10.1 No Investment Advice</h3>
            <p className="text-body fg-2">
              We do not provide investment, financial, legal, or tax advice. Cryptocurrency investments are risky and volatile. You are solely responsible for your investment decisions.
            </p>

            <h3 className="text-h3">10.2 Service Availability</h3>
            <p className="text-body fg-2">
              We strive for 99.9% uptime but do not guarantee uninterrupted service. Services may be unavailable due to maintenance, technical issues, or circumstances beyond our control.
            </p>

            <h3 className="text-h3">10.3 Limitation of Liability</h3>
            <p className="text-body fg-2">
              To the maximum extent permitted by law, PouchPay is not liable for:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Cryptocurrency price fluctuations or market volatility</li>
              <li className="text-body fg-2">Network delays or blockchain congestion</li>
              <li className="text-body fg-2">Losses resulting from your negligence or security breaches</li>
              <li className="text-body fg-2">Third-party services or payment processor failures</li>
              <li className="text-body fg-2">Indirect, consequential, or punitive damages</li>
            </ul>
            <p className="text-body fg-2">
              Our total liability to you for any claims shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-h1">11. Indemnification</h2>
            <p className="text-body fg-2">
              You agree to indemnify and hold harmless PouchPay, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, damages, or expenses (including legal fees) arising from:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Your violation of these Terms</li>
              <li className="text-body fg-2">Your violation of applicable laws</li>
              <li className="text-body fg-2">Your use of the Services</li>
              <li className="text-body fg-2">Your infringement of third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h1">12. Termination</h2>
            <p className="text-body fg-2">
              We may suspend or terminate your access to our Services at any time for:
            </p>
            <ul className="legal-list">
              <li className="text-body fg-2">Violation of these Terms</li>
              <li className="text-body fg-2">Suspicious or fraudulent activity</li>
              <li className="text-body fg-2">Regulatory or compliance reasons</li>
              <li className="text-body fg-2">Request by law enforcement</li>
              <li className="text-body fg-2">Any reason with or without notice</li>
            </ul>
            <p className="text-body fg-2">
              Upon termination, you remain liable for all outstanding obligations. We will make reasonable efforts to return your funds, subject to applicable fees and legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-h1">13. Dispute Resolution</h2>
            <h3 className="text-h3">13.1 Governing Law</h3>
            <p className="text-body fg-2">
              These Terms are governed by the laws of the Federal Republic of Nigeria.
            </p>

            <h3 className="text-h3">13.2 Arbitration</h3>
            <p className="text-body fg-2">
              Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration in Nigeria, except where prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-h1">14. General Provisions</h2>
            <h3 className="text-h3">14.1 Entire Agreement</h3>
            <p className="text-body fg-2">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and PouchPay.
            </p>

            <h3 className="text-h3">14.2 Severability</h3>
            <p className="text-body fg-2">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-h3">14.3 Waiver</h3>
            <p className="text-body fg-2">
              Our failure to enforce any right or provision of these Terms does not constitute a waiver of that right or provision.
            </p>

            <h3 className="text-h3">14.4 Assignment</h3>
            <p className="text-body fg-2">
              You may not assign or transfer these Terms without our written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section>
            <h2 className="text-h1">15. Contact Information</h2>
            <p className="text-body fg-2">
              For questions about these Terms or our Services, please contact us:
            </p>
            <div className="legal-contact">
              <p className="text-body fg-2">
                <strong>Email:</strong> <a href="mailto:support@pouch.finance" className="text-cyan">support@pouch.finance</a>
              </p>
              <p className="text-body fg-2">
                <strong>User Portal:</strong> <a href="https://app.pouch.finance" className="text-cyan">app.pouch.finance</a>
              </p>
              <p className="text-body fg-2">
                <strong>Developer Portal:</strong> <a href="https://dash.pouch.finance" className="text-cyan">dash.pouch.finance</a>
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
