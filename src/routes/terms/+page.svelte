<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { BOOKINGS_URL, company } from '$lib/links';
</script>

<Seo
	title="Terms of Use - Hustle Hive"
	description="The terms that apply when you use the Hustle Hive CIC website."
/>

<LegalPage title="Terms of Use" updated="28 September 2026">
	<p>
		These terms apply to your use of this website, hustlehive.co.uk. By using the website you agree to them. If you
		don't agree, please don't use the site.
	</p>

	<h2>About us</h2>
	<p>
		This website is run by {company.name}, a community interest company registered in England and Wales (company no.
		{company.number}). Registered office: {company.registeredOffice}. Business address: {company.businessAddress}.
	</p>

	<h2>Using this website</h2>
	<ul>
		<li>You may use this website for personal, non-commercial purposes.</li>
		<li>Please don't misuse the site, for example by trying to gain unauthorised access or sending spam through our forms.</li>
		<li>We may change, suspend or withdraw any part of the website without notice.</li>
	</ul>

	<h2>Information on this website</h2>
	<p>
		We try to keep the information on this website accurate and up to date, but programme details, dates and prices can
		change. Please contact us to confirm anything important before relying on it.
	</p>

	<h2>Bookings and applications</h2>
	<p>
		Holiday clubs and workshops are booked through <a href={BOOKINGS_URL} target="_blank" rel="noopener noreferrer">hustlehivebookings.com</a>,
		which has its own terms. Alternative Provision placements are agreed directly with the commissioning school or local
		authority. Sending an application, referral or enquiry through this website doesn't guarantee a place on a programme.
	</p>

	<h2>Links to other websites</h2>
	<p>
		This website links to other websites that we don't control. We aren't responsible for their content or how they
		handle your information.
	</p>

	<h2>Our content</h2>
	<p>
		The text, images, logos and other content on this website belong to Hustle Hive or the people who have given us
		permission to use them. Please don't copy or reuse them without our permission.
	</p>

	<h2>Our liability</h2>
	<p>
		We provide this website free of charge and "as is". As far as the law allows, we aren't liable for any loss or damage
		arising from your use of it. Nothing in these terms limits any liability that can't be limited under the law of
		England and Wales, such as liability for death or personal injury caused by negligence.
	</p>

	<h2>Privacy</h2>
	<p>Our <a href="/privacy">Privacy Policy</a> explains how we use personal information sent through this website.</p>

	<h2>Law</h2>
	<p>These terms are governed by the law of England and Wales, and the courts of England and Wales have jurisdiction.</p>

	<h2>Contact</h2>
	<p>
		Questions about these terms? Email <a href="mailto:kieron@hustlehive.co.uk">kieron@hustlehive.co.uk</a> or use our
		<a href="/contact#message">contact form</a>.
	</p>
</LegalPage>
