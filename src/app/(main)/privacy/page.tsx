import React from "react";
import Footer from "@/components/footer"; // Assuming you have this already created

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}

      {/* Privacy Policy Content */}
      <div className="max-w-7xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-bold text-[#1B4572] mb-8">
          Privacy Policy
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to E-Vi Mobility - A Greenway Mobility Brand. Your privacy
            is important to us. This Privacy Policy explains how we collect,
            use, share, and protect your personal information when you visit our
            website and engage with our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Information Collection
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Greenway Mobility collects various types of personal information to
            facilitate our business operations and enhance your user experience.
            The types of information we collect include, but are not limited to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              <strong>Personal Details:</strong> Your name, contact information,
              and other identifiers that help us recognize you.
            </li>
            <li>
              <strong>Browsing Behavior:</strong> Information about how you
              navigate our website, including the pages you visit and the
              actions you take.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            We gather information through several methods:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              Website Forms: When you fill out forms on our website for
              inquiries, orders, or registration.
            </li>
            <li>
              Cookies: Small data files placed on your device to track your
              website interactions and preferences.
            </li>
            <li>
              Transactional Data: Information collected during the registration
              processes to facilitate order fulfillment, test rides, and
              customer support.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            The information we collect is used for:
          </h2>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              <strong>Order Fulfillment:</strong> To process and deliver your
              purchases efficiently.
            </li>
            <li>
              <strong>Customer Service:</strong> To provide support and address
              your inquiries or concerns.
            </li>
            <li>
              <strong>Product Improvement:</strong> To enhance the quality and
              functionality of our products and services.
            </li>
            <li>
              <strong>Marketing Initiatives:</strong> To inform you about new
              products, services, and offers that may interest you.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to protecting your personal information. Greenway
            Mobility implements robust security measures, including encryption
            and access control, to prevent unauthorized access, alteration, or
            disclosure of your data.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The company does not engage in the renting, selling, or sharing of
            your personal information with third parties except as necessary to
            fulfill the services you have expressly requested.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 leading-relaxed">
            <li>
              Request information regarding the specific data we hold about you.
            </li>
            <li>
              Request an update on any incomplete or inaccurate data we hold
              about you.
            </li>
            <li>
              Request the deletion of your data, but only in cases explicitly
              provided by law.
            </li>
            <li>
              Object at any time to the processing of your data for direct
              marketing purposes.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small data files stored on a user&apos;s PC when
            accessing a website, which may be employed by our Website to assist
            users in accessing specific functions. Temporary cookies are used
            and expire once users leave our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy-related inquiries or data requests, please contact
            Greenway Mobility through the contact details provided on our
            website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Change in Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The company reserves the right to update this Privacy Policy at any
            time, with or without advance notice.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            This privacy policy shall be governed by the laws of India and the
            courts in Rajkot, Gujarat, India, shall have exclusive jurisdiction
            over any disputes.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
