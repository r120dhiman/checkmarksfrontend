import React from 'react';

const PrivacyPolicyAndTnCPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-pink-200 to-violet-300 overflow-hidden px-4">
      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30"></div>

      <div className="relative z-10 bg-white/80 rounded-2xl shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-violet-600 text-center mb-6">
          Privacy Policy & Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-800 font-medium text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg text-violet-700">1. Acceptance of Terms</h2>
            <p>
              By using CheckMarks, you agree to comply with these terms and conditions. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">2. Use of Services</h2>
            <ul className="list-disc list-inside pl-2">
              <li>CheckMarks provides an estimated score based on the response sheet and answer key. The score is not official and should be used for reference only.</li>
              <li>The “Check Competition” feature offers average score analysis for JEE Mains but does not guarantee rankings.</li>
              <li>Users must provide accurate and truthful response sheets to receive valid results.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">3. User Responsibilities</h2>
            <ul className="list-disc list-inside pl-2">
              <li>Users must not misuse the platform or attempt to manipulate scores.</li>
              <li>Any unauthorized use, such as copying or distributing content from CheckMarks, is prohibited.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">4. Limitation of Liability</h2>
            <p>
              CheckMarks does not guarantee 100% accuracy in score calculations.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">5. Privacy and Data Protection</h2>
            <p>
              By using CheckMarks, you agree that your uploaded response sheet may be processed for score evaluation. We do not share your personal data with third parties.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-violet-700">6. Modifications to Terms</h2>
            <p>
              CheckMarks reserves the right to update these terms at any time. Continued use means acceptance of changes.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-pink-600 mt-6">Privacy Policy</h2>
            <ul className="list-disc list-inside pl-2">
              <li>Response sheets uploaded by users are solely for score calculation.</li>
              <li>We may analyze anonymized data for competition analysis.</li>
              <li>No personal data is shared with third parties.</li>
              <li>You can request data deletion at any time.</li>
            </ul>
          </div>

          <p className="text-center font-semibold text-pink-700 mt-4">
            By using CheckMarks, you acknowledge and agree to these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTnCPage;