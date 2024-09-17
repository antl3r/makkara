const ominousQuotes: string[] = [
	"“I have loved the stars too fondly to be fearful of the night.” – Sarah Williams",
	"“The darkness does not destroy the light; it defines it.” – Brené Brown",
	"“In the silence of the night I have often wished for just a few words of love from one man, rather than the applause of thousands of people.” – Judy Garland",
	"“The scariest monsters are the ones that lurk within our souls.” – Edgar Allan Poe",
	"“I became insane, with long intervals of horrible sanity.” – Edgar Allan Poe",
	"“Hell is empty and all the devils are here.” – William Shakespeare",
	"“The past is never dead. It's not even past.” – William Faulkner",
	"“Men have called me mad; but the question is not yet settled, whether madness is or is not the loftiest intelligence.” – Edgar Allan Poe",
	"“The world breaks everyone, and afterward, some are strong at the broken places.” – Ernest Hemingway",
	"“In the fell clutch of circumstance, I have not winced nor cried aloud.” – William Ernest Henley",
	"“The worst enemy to creativity is self-doubt.” – Sylvia Plath",
	"“We are all in the gutter, but some of us are looking at the stars.” – Oscar Wilde",
	"“I am terrified by this dark thing that sleeps in me.” – Sylvia Plath",
	"“Beware; for I am fearless, and therefore powerful.” – Mary Shelley",
];

export function makeHello(name: string) {
	return `${ominousQuotes[math.random(0, ominousQuotes.size() - 1)]} (${name})`;
}
