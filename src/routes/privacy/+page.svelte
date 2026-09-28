<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { BOOKINGS_URL, LEARNING_URL, company } from '$lib/links';
</script>

<Seo
	title="Privacy Policy - Hustle Hive"
	description="How Hustle Hive CIC collects, uses and protects personal information sent through this website."
/>

<LegalPage title="Privacy Policy" updated="28 September 2026">
	<p>
		This policy explains how {company.name} ("Hustle Hive", "we", "us") uses the personal information you give us
		through this website. We are a community interest company registered in England and Wales
		(company no. {company.number}). Our registered office is {company.registeredOffice}.
	</p>
	<p>
		For the purposes of UK data protection law (the UK GDPR and the Data Protection Act 2018), {company.name} is the
		data controller for the information described here.
	</p>

	<h2>What we collect</h2>
	<p>We only collect the information you choose to send us:</p>
	<ul>
		<li>
			<strong>Contact form:</strong> your name, email address, the subject you choose and your message.
		</li>
		<li>
			<strong>Makers to Market application form:</strong> your name, email address, phone number (optional), age,
			location and area of interest.
		</li>
		<li>
			<strong>Holiday club mailing list:</strong> your first name and email address, and a record that you ticked the
			box agreeing to receive our emails (with the date and time).
		</li>
		<li><strong>Emails and phone calls:</strong> anything you tell us when you contact us directly.</li>
	</ul>

	<h2>How we use it</h2>
	<ul>
		<li>To reply to your enquiry.</li>
		<li>To assess your Makers to Market application, contact you about it and, if you join, run the programme.</li>
		<li>To keep a record of our conversations with you.</li>
		<li>If you join our mailing list, to email you about holiday clubs and workshops.</li>
	</ul>
	<p>
		We use your information because we have a legitimate interest in responding to people who contact us, and, for
		applications, because you have asked us to consider you for a programme. We will not sell your information or use
		it for marketing without your permission.
	</p>

	<h2 id="mailing-list">Holiday club mailing list</h2>
	<p>
		If you sign up on our homepage, we'll email you about upcoming holiday clubs and workshops. We only do this because
		you've given us your consent by ticking the box, and we only use your first name and email address for these
		emails.
	</p>
	<p>
		You can unsubscribe at any time by replying to any of our emails or by emailing
		<a href="mailto:kieron@hustlehive.co.uk">kieron@hustlehive.co.uk</a>. We'll then remove you from the list. We keep
		your details on the list until you unsubscribe.
	</p>

	<h2>Young people</h2>
	<p>
		Some of our programmes are for young people. If you are under 16, please ask a parent or carer before sending us
		your details.
	</p>

	<h2>Who we share it with</h2>
	<p>We don't share your information with anyone except the services we use to run this website:</p>
	<ul>
		<li><strong>Cloudflare</strong> hosts this website and helps keep it secure.</li>
		<li><strong>Postmark</strong> delivers the messages and sign-ups sent through our forms to our inbox.</li>
		<li><strong>Google</strong> provides the email inbox those messages are delivered to.</li>
	</ul>
	<p>
		Some of these providers may process data outside the UK. Where they do, they use legal safeguards approved under UK
		data protection law. We will also share information if the law requires us to.
	</p>

	<h2>How long we keep it</h2>
	<p>
		We keep your information only for as long as we need it for the reasons above, and we regularly review and delete
		enquiries and applications we no longer need.
	</p>

	<h2>Cookies and third-party content</h2>
	<p>
		This website doesn't use advertising or analytics cookies. Cloudflare may set strictly necessary cookies to protect
		the site. When you visit, your browser also loads fonts from Google Fonts and Fontshare, which means those services
		receive your IP address. The map on our Contact page is provided by Google Maps; when it loads, Google receives your
		IP address and may set its own cookies, as described in Google's privacy policy.
	</p>

	<h2>Bookings and Hustle Hive Learning</h2>
	<p>
		Holiday club and workshop bookings are made on <a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer">hustlehivebookings.com</a>,
		and school referrals through <a href={LEARNING_URL} target="_blank" rel="noopener noreferrer">hustlehivelearning.co.uk</a>.
		Information you give on those sites is covered by their own privacy notices.
	</p>

	<h2>Your rights</h2>
	<p>You have the right to:</p>
	<ul>
		<li>ask for a copy of the information we hold about you;</li>
		<li>ask us to correct or delete it;</li>
		<li>object to or ask us to restrict how we use it; and</li>
		<li>ask us to transfer it to you or someone else.</li>
	</ul>
	<p>
		To make a request, email <a href="mailto:kieron@hustlehive.co.uk">kieron@hustlehive.co.uk</a> or
		<a href="mailto:gavin@hustlehive.co.uk">gavin@hustlehive.co.uk</a>, or write to us at {company.registeredOffice}.
	</p>
	<p>
		If you're unhappy with how we've handled your information, please tell us first so we can put it right. You can also
		complain to the Information Commissioner's Office (ICO) at
		<a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
	</p>

	<h2>Changes to this policy</h2>
	<p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
</LegalPage>
