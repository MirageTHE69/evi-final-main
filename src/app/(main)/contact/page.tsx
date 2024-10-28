import React from "react";
import Navbar from "@/components/nav"; // Assuming you have this component
import Footer from "@/components/footer"; // Assuming you have this component

const ContactUsPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Contact Us Policy Content */}
      <div className="max-w-7xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-bold text-[#1B4572] mb-8">
          Contact Us Policy
        </h1>

        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed">
            At E-Vi Mobility - A Greenway Mobility Brand, ensuring seamless
            communication with our customers is a priority. Here are the details
            for reaching our support team:
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Preferred Methods of Contact:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <strong>Email:</strong> info@greenwaymobility.com <br />
            <strong>Phone Number:</strong> +91 8200822628 <br />
            <strong>Contact Form:</strong>{" "}
            <a
              href="https://evimobility.com/contact"
              className="text-blue-600 hover:underline"
            >
              https://evimobility.com/contact
            </a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Business Hours:</h2>
          <p className="text-gray-600 leading-relaxed">
            Our support team operates during the following hours: <br />
            Monday–Friday: 10:00 AM to 7:00 PM (IST)
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Expected Response Time:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We commit to responding to all inquiries within our business hours
            promptly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Virtual Mailing Address:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            info@greenwaymobility.com
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Registered Address:</h2>
          <p className="text-gray-600 leading-relaxed">
            Greenway Mobility Pvt Ltd G-1059, <br />
            GIDC Lodhika, <br />
            Kishan Gate Road, <br />
            Metoda-360021 <br />
            City–Rajkot
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Communication Address:
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Greenway Mobility Private Limited, <br />
            Survey No, 421/p, <br />
            Next to Artist-on Apparels Complex, <br />
            Sarkhej-Bavla Rd, near Groth Continental Changodar, <br />
            Ahmedabad - 382213
          </p>
        </section>

        <section className="mb-12">
          <p className="text-gray-600 leading-relaxed">
            Thank you for your cooperation and adherence to our communication
            guidelines.
          </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPolicy;
