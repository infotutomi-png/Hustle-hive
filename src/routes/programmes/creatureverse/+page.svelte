<script lang="ts">
	import ProgrammePage from '$lib/components/ProgrammePage.svelte';
</script>

<ProgrammePage
	title="Creatureverse: Rift Battles"
	seoTitle="Creatureverse: Rift Battles - Design, 3D Print and Battle Your Own Creature - Hustle Hive"
	seoDescription="A hands-on creative programme in Darlington: young people design their own creature, 3D print and paint it, make its trading card and collector box, then battle in our own Rift Battles arena and tournament. Work towards an AQA Unit Award."
	ogImage="/og/creatureverse.jpg"
	ogImageAlt="Creatureverse 3D-printed creatures, collector boxes and trading cards"
	tagline="Imagine it. Design it. Create it. Battle it."
	badge="Dates to be confirmed"
	intro={[
		'What if you could design your very own creature, turn it into a real 3D collectible, create its trading card and then take it into battle?',
		"Creatureverse: Rift Battles brings together drawing, 3D design and printing, collectible trading cards and our own battle game. Inspired by collectible card games, it takes young people beyond collecting cards: they become the creators.",
		'Along the way, learners build real creative and digital skills, and work towards an AQA Unit Award Scheme (UAS) award.'
	]}
	image="/images/creatureverse-collectibles.webp"
	imageAlt="Creatureverse creatures at every stage: a hand-drawn sketch, a 3D model on a laptop, painted 3D-printed figures, boxed collectibles and trading cards"
	imageWidth={1200}
	imageHeight={800}
	contactSubject="creatureverse"
	contactMessage="Hello, I'd like to register interest in Creatureverse: Rift Battles."
	stepsHeading="From imagination to reality"
	steps={[
		{ title: 'Imagine and design', text: "sketch an original creature and develop its personality and characteristics" },
		{ title: 'Create a 3D model', text: 'turn the design into a digital model, using AI design tools' },
		{ title: '3D print it', text: 'watch your creature come to life on our 3D printers' },
		{ title: 'Paint and personalise', text: 'add colour, detail and your own finishing touches' },
		{ title: 'Design the trading card', text: 'artwork, battle stats and a special ability' },
		{ title: 'Create collector packaging', text: 'branding and product design that make it a genuine collectible' },
		{ title: 'Enter the Rift', text: 'battle with your finished cards, building up to a final tournament with trophies and prizes' }
	]}
	learnHeading="What young people gain"
	learn={[
		{ title: 'Creativity and design', text: 'drawing, character design and product design' },
		{ title: 'Digital skills', text: '3D modelling, 3D printing, graphic design and using AI tools' },
		{ title: 'Strategic thinking', text: "battles reward how you play, not just who has the rarest card" },
		{ title: 'Confidence and teamwork', text: 'communicating, working together and solving problems' },
		{ title: 'An AQA Unit Award', text: 'nationally recognised evidence of what they achieved' },
		{ title: 'Something to keep', text: 'their own creature, trading card and collector box' }
	]}
	model={{
		src: '/models/emberclaw-lava-lizard.glb',
		alt: 'Emberclaw the Lava Lizard, a 3D Creatureverse creature with fiery orange spikes and lava-cracked scales',
		heading: 'Meet Emberclaw the Lava Lizard',
		text: [
			'Every Creatureverse creature starts as an idea on paper. This is Emberclaw, an example creature designed and modelled in 3D, just like the ones young people create on the programme.',
			'Spin it round to see it from every angle. On many phones you can also place it in the room in front of you.'
		]
	}}
	featuresHeading="Powered by our own Creatureverse system"
	featuresIntro="We've built our own creature generator, digital collection and battle arena, so every creature has its own identity and every battle counts."
	featuresHighlight="Rift Origins: 120 unique creatures to discover, including rare holographic editions"
	features={[
		{
			icon: 'sparkles',
			title: 'Creature Generator',
			text: 'Every child gets their own creature identity: a unique name, elemental type, collector number, rarity, battle stats and a special ability.'
		},
		{
			icon: 'cards',
			title: 'The Collection',
			text: "Our digital registry records every creature made on the programme, and the finished cards and figures earn a place in the Creatureverse Hall of Fame."
		},
		{
			icon: 'bolt',
			title: 'Rift Battles Arena',
			text: 'Players battle with their physical cards while the arena tracks health, attack, defence, elemental advantages and special abilities. Timing your Rift Power is everything.'
		},
		{
			icon: 'trophy',
			title: 'The Tournament',
			text: 'Knockout battles build to a final, with every match tracked until one creature is crowned Rift Battles Champion.'
		}
	]}
	extraHeading="More than just a game"
	extra={[
		'Behind the collecting, creating and battling is a carefully designed learning experience that builds creativity, problem-solving, digital literacy, strategic thinking, communication and confidence.',
		"For young people who find traditional classroom learning challenging, it offers a different way to engage, learn and achieve. Small groups give a supportive space to explore their interests, make friends and see a project through from start to finish."
	]}
	details={[
		{ title: 'Group size', text: 'a cohort of 10 learners' },
		{ title: 'When', text: 'dates are arranged once the cohort has formed.' },
		{ title: 'Where', text: 'our workshop at Unit 6 Paramo House, Denmark Street, Darlington.' },
		{ title: 'Booking', text: 'parents or carers book places and complete the consent details.' }
	]}
	sponsorId="creatureverse"
/>
