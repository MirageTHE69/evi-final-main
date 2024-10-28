import React from "react";
import Navbar from "@/components/nav"; // Assuming you have this already created
import Footer from "@/components/footer"; // Assuming you have this already created

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Terms of Use Content */}
      <div className="max-w-7xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-bold text-[#1B4572] mb-8">Terms Of Use</h1>

        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed">
            These Terms of Use govern your use of the website provided by E-Vi
            Mobility. By accessing or using our services, you agree to comply
            with the following terms and conditions outlined below.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">General</h2>
          <p className="text-gray-600 leading-relaxed">
            The use of this website is subject to the following terms:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              The content provided on this website is for your general
              information and use only. It is subject to change without notice.
            </li>
            <li>
              Unauthorized use of this website may give rise to a claim for
              damages and/or be a criminal offense.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
          <p className="text-gray-600 leading-relaxed">
            By using this website, you represent that you are of legal age and
            have the authority to enter into these Terms of Use.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            User Account, Password, and Security
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password, and for restricting access to your computer.
            </li>
            <li>
              You agree to accept responsibility for all activities that occur
              under your account.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            E-Vi Mobility shall not be liable for any damages resulting from
            your use of or inability to use the website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Obligations</h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              You agree not to use the website for any illegal or unauthorized
              purpose.
            </li>
            <li>
              You agree not to interfere with or disrupt the website&apos;s
              security features or attempt to gain unauthorized access.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Intellectual Property Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content provided on this website, including but not limited to
            text, graphics, logos, and images, are the property of E-Vi
            Mobility.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms shall be governed by and construed in accordance with
            the laws of India, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to Terms of Use
          </h2>
          <p className="text-gray-600 leading-relaxed">
            E-Vi Mobility reserves the right to modify or update these terms at
            any time without prior notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For any queries regarding these Terms of Use, you can contact us
            through the details provided on our website.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfUse;
