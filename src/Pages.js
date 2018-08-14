import React from 'react'
import { Link } from 'react-router-dom'
import { staticUrl } from './functions'

export class About extends React.Component {
  componentDidMount() {
    document.title = 'About | Shyr Wines'
  }

  render() {
    return (
      <div className='mx-auto px-3' style={{maxWidth: '700px'}}>
        <h1 className='text-center'>About Shyr Wines</h1>
        <div>
          <p className='about mb-0'>Founded in 2014 by <span>S</span>anjay, <span>H</span>ema, <span>Y</span>ash, and <span>R</span>adha, Shyr Wines is a family-owned business located in Saratoga, California. We are an online retail wine store offering some of the world's finest wines at competitive prices. For all price ranges, we make sure to carry only the best, constantly updating our inventory with more great wines. Let us recommend perfect wines to complement any occasion or food pairing - Shyr Wines caters to individual customers and corporations, and pours wine for local city events too.</p>
          <p className='about'>If you would like to see a specific wine varietal and/or vintage that is not on our website, please send us an email at <a href='mailto:info@shyrwines.com'>info@shyrwines.com</a> and we will respond as soon as possible. We look forward to serving you and giving you the ultimate wine buying experience!</p>

          <div className='float-sm-right text-center'>
            <div>Cheers,</div>
            <img alt='Logo' width='200px' src={staticUrl('images/logo.svg')} />
          </div>
        </div>
      </div>
    )
  }
}

export class Contact extends React.Component {
  componentDidMount() {
    document.title = 'Contact Us | Shyr Wines'
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Contact Us</h1>
        <div>
          <div>Please send us an email at</div>
          <a href='mailto:info@shyrwines.com'>info@shyrwines.com</a>
          <div>for any questions, comments, or concerns!</div>
        </div>
      </div>
    )
  }
}

export class NotFound extends React.Component {
  componentDidMount() {
    document.title = 'Page Not Found | Shyr Wines'
  }

  render() {
    return (
      <div className='text-center'>
        <h1>Whoops!</h1>
        <div>This page does not exist.</div>
      </div>
    )
  }
}

export class PrivacyPolicy extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy | Shyr Wines'
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Privacy Policy</h1>

        <h3>Section 1 - What Do We Do With Your Information?</h3>
        <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, email address, phonen number, and shipping address.</p>
        <p>When you browse our store, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>

        <h3>Section 2 - Consent</h3>
        <h5>How do you get my consent?</h5>
        <p>When you provide us with personal information to complete a transaction, place an order, and / or arrange for a delivery, we imply that you consent to our collecting it and using it for that specific reason only.</p>
        <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
        <h5>How do I withdraw my consent?</h5>
        <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at <a href="mailto:info@shyrwines.com">info@shyrwines.com</a>.</p>

        <h3>Section 3 - Disclosure</h3>
        <p>We may disclose your personal information if we are required by law to do so or if you violate our <Link to='/terms-of-service'>Terms of Service</Link>.</p>

        <h3>Section 4 - Shyr Wines</h3>
        <p>Our store is hosted on DreamHost. They provide us with the online platform that allows us to sell our products and services to you.</p>

        <h3>Section 5 - Security</h3>
        <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
        <p>Your information is encrypted using secure socket layer technology (SSL) and stored with a AES-128 encryption.  However, no method of transmission over the Internet or electronic storage is 100% secure. So while we use commercially acceptable means to protect your personal information and implement additional generally accepted industry standards, we cannot guarantee its absolute security. Shyr Wines is not responsible for any breach of security or inadvertent disclosure of personal information.</p>

        <h3>Section 6 - Cookies</h3>
        <p> Here is a list of cookies that we use. We've listed them here so you that you can choose if you want to opt-out of cookies or not.</p>
        <p>cart, unique token, persistent for 2 weeks, Stores information about the contents of your cart.</p>

        <h3>Section 7 - Age of Consent</h3>
        <p> By using this site, you represent that you are at least the age of 21, or that you are the age of 21. No information should be submitted to Shyr Wines by children under the age of 21. Shyr Wines does not monitor the age of its users or collect personally identifiable information from anyone under the age of 21.</p>

        <h3>Section 8 - Changes to this Privacy Policy</h3>
        <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
        <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>

        <h3>Questions and Contact Information</h3>
        <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information, contact <a href="mailto:info@shyrwines.com">info@shyrwines.com</a>.</p>

      </div>
    )
  }
}

export class TermsOfService extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service | Shyr Wines'
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Terms of Service</h1>

        <h3>Overview</h3>
        <p>This website is operated by Shyr Wines. Throughout the site, the terms "we", "us" and "our" refer to Shyr Wines. Shyr Wines offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>
        <p>By visiting our site and / or purchasing something from us, you engage in our service and agree to be bound by the following terms and conditions ("Terms of Service", "<Link to='/privacy-policy'>Privacy Policy</Link>"), including those additional terms and conditions and policies referenced herein and / or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and / or contributors of content.</p>
        <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
        <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and / or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>
        <p>Our store is hosted on DreamHost. They provide us with the online platform that allows us to sell our products and services to you.</p>

        <h3>Section 1 - Online Store Terms</h3>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of 21, or that you are the age of 21. No information should be submitted to Shyr Wines by children under the age of 21.</p>
        <p>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of our service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
        <p>You must not transmit any worms or viruses or any code of a destructive nature.</p>
        <p>A breach or violation of any of the Terms will result in an immediate termination of your services.</p>

        <h3>Section 2 - General Conditions</h3>
        <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
        <p>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.</p>
        <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of our service, use of our service, or access to our service or any contact on the website through which the service is provided, without express written permission by us.</p>
        <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>

        <h3>Section 3 - Accuracy, Completeness and Timeliness of Information</h3>
        <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
        <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>

        <h3>Section 4 - Modifications to the Service and Prices</h3>
        <p>Prices for our products are subject to change without notice.</p>
        <p>We reserve the right at any time to modify or discontinue our service (or any part or content thereof) without notice at any time.</p>
        <p>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of our service.</p>

        <h3>Section 5 - Products or Services</h3>
        <p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and all sales are final.</p>
        <p>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
        <p>We reserve the right, but are not obligated, to limit the sales of our products or services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.</p>
        <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in our service will be corrected.</p>

        <h3>Section 6 - Accuracy of Billing and Account Information</h3>
        <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customers and / or orders that use the same shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and / or shipping address / phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.</p>
        <p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.</p>

        <h3>Section 7 - Optional Tools</h3>
        <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
        <p>You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
        <p>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
        <p>We may also, in the future, offer new services and / or features through the website (including, the release of new tools and resources). Such new features and / or services shall also be subject to these Terms of Service.</p>

        <h3>Section 8 - Third-party Links</h3>
        <p>Certain content, products and services available via our service may include materials from third-parties.</p>
        <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
        <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>

        <h3>Section 9 - User Comments, Feedback and Other Submissions</h3>
        <p>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.</p>
        <p>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.</p>
        <p>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of our service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>

        <h3>Section 10 - Personal Information</h3>
        <p>Your submission of personal information through the store is governed by our <Link to='/privacy-policy'>Privacy Policy</Link>.</p>

        <h3>Section 11 - Errors, Inaccuracies and Omissions</h3>
        <p>Occasionally there may be information on our site or in our service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in our service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
        <p>We undertake no obligation to update, amend or clarify information in our service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in our service or on any related website, should be taken to indicate that all information in our service or on any related website has been modified or updated.</p>

        <h3>Section 12 - Prohibited Uses</h3>
        <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of our service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of our service or any related website, other websites, or the Internet. We reserve the right to terminate your use of our service or any related website for violating any of the prohibited uses.</p>

        <h3>Section 13 - Disclaimer of Warranties; Limitation of Liability</h3>
        <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
        <p>We do not warrant that the results that may be obtained from the use of our service will be accurate or reliable.</p>
        <p>You agree that from time to time we may remove our service for indefinite periods of time or cancel our service at any time, without notice to you.</p>
        <p>You expressly agree that your use of, or inability to use, our service is at your sole risk. our service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
        <p>In no case shall Shyr Wines, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>

        <h3>Section 14 - Indemnification</h3>
        <p>You agree to indemnify, defend and hold harmless Shyr Wines and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>

        <h3>Section 15 - Severability</h3>
        <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>

        <h3>Section 16 - Termination</h3>
        <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.</p>
        <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our services, or when you cease using our site.</p>
        <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and / or accordingly may deny you access to our services (or any part thereof).</p>

        <h3>Section 17 - Entire Agreement</h3>
        <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
        <p>These Terms of Service and any policies or operating rules posted by us on this site or in respect to our service constitutes the entire agreement and understanding between you and us and govern your use of our service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).</p>
        <p>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>

        <h3>Section 18 - Governing Law</h3>
        <p>These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Saratoga, California 95070, United States of America.</p>

        <h3>Section 19 - Changes to Terms of Service</h3>
        <p>You can review the most current version of the Terms of Service at any time at this page.</p>
        <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or our service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>

        <h3>Section 20 - Contact Information</h3>
        <p>Questions about the Terms of Service should be sent to us at <a href="mailto:info@shyrwines.com">info@shyrwines.com</a>.</p>
      </div>
    )
  }
}
