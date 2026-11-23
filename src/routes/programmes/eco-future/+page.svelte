<script lang="ts">
	import ProgrammePage from '$lib/components/ProgrammePage.svelte';
</script>

<ProgrammePage
	title="ECO//FUTURE"
	seoTitle="ECO//FUTURE: Sustainable Home Design and Engineering - Hustle Hive"
	seoDescription="Ten weekly sessions in Darlington: home-educated young people design a sustainable home from a client brief, draw it to scale, 3D print a component and build a scale model."
	ogImage="/og/eco-future.jpg"
	ogImageAlt="Scale model homes with a solar panel and rainwater butt beside a floor plan"
	tagline="Sustainable home design and engineering, from client brief to scale model."
	badge="Dates to be confirmed"
	intro={[
		'How would you design a home that makes the most of sunlight, collects rainwater and stays comfortable through the seasons? In ECO//FUTURE, young people take on a client brief and explore those questions by designing and building a home of their own.',
		'A family of four needs a home that is comfortable, affordable and designed to reduce its environmental impact. Learners are given a plot, a model budget and a list of the rooms the family needs. They decide how the home will be laid out, where its sustainable features will go and how to explain those choices to the client.'
	]}
	image="/images/eco-future-models.webp"
	imageAlt="Scale model homes made from card and foam board, one with a solar panel and a rainwater butt, beside a hand-drawn floor plan"
	imageWidth={1200}
	imageHeight={800}
	contactSubject="eco-future"
	contactMessage="Hello, I'd like to register interest in ECO//FUTURE."
	stepsHeading="The programme journey"
	steps={[
		{ title: 'Meet the client', text: 'read the brief, identify what the family needs and sketch early ideas' },
		{ title: 'Investigate sustainable design', text: 'explore how sunlight and shade affect solar panel placement, estimate rainwater collection and test insulation options' },
		{ title: 'Draw to scale', text: 'convert full-size measurements and create a labelled floor plan' },
		{ title: 'Design for 3D printing', text: 'use guided digital design to create one component for the home, such as a rainwater tank or planter, which our staff print' },
		{ title: 'Build the home', text: 'measure, cut and assemble a foam-board scale model, then add the sustainable features and the 3D-printed component' },
		{ title: 'Present to the client', text: 'show the finished model, explain at least three design decisions and identify one improvement' }
	]}
	learnHeading="Skills learners practise"
	learn={[
		{ title: 'Design and engineering', text: 'responding to a real client brief' },
		{ title: 'Measuring and scale', text: 'turning full-size measurements into a scale floor plan' },
		{ title: 'Digital modelling', text: 'designing a component for 3D printing' },
		{ title: 'Practical model making', text: 'measuring, cutting and assembling a foam-board model' },
		{ title: 'Problem-solving', text: 'balancing comfort, cost and environmental impact' },
		{ title: 'Presenting ideas', text: 'explaining design decisions to the client' }
	]}
	featuresHeading="Sustainable design, investigated by learners"
	featuresIntro="Learners don't just add eco features for show. They investigate each one and use what they find to shape their design."
	featuresHighlight="The brief: a family of four, a plot, a model budget and a list of rooms they need"
	features={[
		{ icon: 'sun', title: 'Solar panels', text: 'Explore how sunlight and shade affect a roof, then decide where solar panels will work best.' },
		{ icon: 'drop', title: 'Rainwater', text: 'Estimate how much rainwater the roof could collect, and plan how the home will use it.' },
		{ icon: 'home', title: 'Insulation and comfort', text: 'Test insulation options to keep the home comfortable through the seasons.' },
		{ icon: 'box', title: 'A 3D-printed part', text: 'Design one component, such as a rainwater tank or planter, which our staff 3D print for the model.' }
	]}
	extraHeading="The final showcase"
	extra={[
		'Each learner displays their scale home, floor plan and design work. They explain where they placed their solar panels, how much rainwater they estimate the roof could collect, and how their design responds to the client brief.',
		'The programme is designed to give learners the opportunity to work towards an AQA Unit Award Scheme certificate, subject to unit validation and achieving the required outcomes.'
	]}
	details={[
		{ title: 'Who it\'s for', text: 'home-educated young people, in a small group of ten.' },
		{ title: 'Sessions', text: 'ten weekly sessions of two hours, twenty hours of practical learning in all.' },
		{ title: 'Cost', text: 'free for families once the cohort is fully funded by sponsors, with materials and equipment included.' },
		{ title: 'Where', text: 'our workshop at Unit 6 Paramo House, Denmark Street, Darlington.' }
	]}
	sponsorId="eco-future"
/>
