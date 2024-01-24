import React from "react";
import { JobImg } from "../assets";

const Privacy = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Microsoft Corporation and its contributors are available at
            http://www.microsoft.com and at http://www.microsoft.com for more
            information about the contributors and contributors to the Microsoft
            Corporation and its contributors to the Microsoft Corporation and
            its contributors to the Microsoft Corporation
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className=" px-12 pr-12 pl-12 text-justify">
        <div>
          <h1 className="text-xl  font-bold">
          How We Handle Your Information Account Information
          </h1>
          When you register for an account, we collect your personal
          information, including your name, email address, and/or mobile number,
          and a password. We refer to this information as "Customer Account
          Information" for this Policy. Account Information is required to
          identify you as a valid user and permit you to access your account(s).
          By voluntarily providing us with such Account Information, you
          represent that you are the owner of such personal data or otherwise
          have the requisite consent to provide it. We store all of your
          information on our server for verification and ensure that your
          information is secured with us.
          <h1 className="text-xl mt-7 font-bold">
            Third-Party Tracking Technologies
          </h1>
          Job-FindBd.com uses Google Analytics tracking technology to track
          visits to our website. It allows us to analyze the usage of our
          website and is merely for our internal use.
          <h1 className="text-xl mt-7 mb-3 font-bold">
            Cookies and Other Tracking Technologies
          </h1>
          Some of our Web pages utilize "cookies" and other tracking
          technologies. A "cookie" is a small text file that may be used, for
          example, to collect information about Web website activity. Some
          cookies and other technologies may serve to recall Personal
          Information previously indicated by a Web user. Most browsers allow
          you to control cookies, including whether or not to accept them and
          how to remove them. You may set most browsers to notify you if you
          receive a cookie, or you may choose to block cookies with your
          browser, but please note that if you choose to erase or block your
          cookies, you will need to re-enter your original user ID and password
          to gain access to certain parts of the Web website. Using cookies and
          other tracking technologies allows us to improve our website and your
          web experience. Your IP address might be used to track your location
          to provide you with various location-based services and for our data
          analysis purposes. We may also analyze information not containing
          personal information for trends and statistics. We use many tools
          (encryption, passwords, and physical security) to protect your
          personal information against unauthorized access and disclosure, but
          remember that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Data, We cannot guarantee its
          absolute security.
          <h1 className="text-xl mt-7 mb-3 font-bold"> Disclaimer </h1>
          Job-FindBd does not store any account-related information or any
          credit/debit card details. Job-FindBd shall not be liable for any loss
          or damage sustained by Users as a result of any disclosure
          (inadvertent or otherwise) of any information concerning the User's
          account, credit cards or debit cards in the course of any online
          transactions or payments made for any products and/or services offered
          through the Platform. In case any Personal Information is shared by
          you with Job-FindBd, which is not requested by Job-FindBd during
          registration (whether mandatorily or optionally), Job-FindBd will not
          be liable for any information security breach or disclosure in
          relation to such information. Opting out of Email Notification
          Services We allow users to opt out of having Email Notification Alerts
          sent to them anytime. Job-FindBd.com offers several mobile
          applications. Job-FindBd collects and uses information about you as
          described here.
          <h1 className="text-xl mt-7 mb-3 font-bold"> Children</h1>
          Job-FindBd.com is not intended for, nor do we knowingly collect
          information from, children under 18 years old. Job-FindBd.com
          regularly revises and updates its privacy policy and publishes changes
          to the policy on our website.
          <h1 className="text-xl mt-7 mb-3 font-bold"> Contact Information</h1>
          You may contact us online for questions or concerns about our privacy
          practices or our Privacy Shield participation. You may also write to
          us at:
        </div>
      </div>
    </div>
  );
};

export default Privacy;
