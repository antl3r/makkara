const ominousQuotes: string[] = [
	"“Knowing your own darkness is the best method for dealing with the darknesses of other people.”",
	"“Until you make the unconscious conscious, it will direct your life and you will call it fate.”",
	"“The privilege of a lifetime is to become who you truly are.”",
	"“Everything that irritates us about others can lead us to an understanding of ourselves.”",
	"“People will do anything, no matter how absurd, to avoid facing their own souls.”",
	"“One does not become enlightened by imagining figures of light, but by making the darkness conscious.”",
	"“The most terrifying thing is to accept oneself completely.”",
	"“Who looks outside, dreams; who looks inside, awakes.”",
	"“Loneliness does not come from having no people around, but from being unable to communicate the things that seem important to oneself, or from holding certain views which others find inadmissible.”",
	"“There is no coming to consciousness without pain.”",
	"“A man who has not passed through the inferno of his passions has never overcome them.”",
	"“Shame is a soul-eating emotion.”",
	"“I am not what happened to me, I am what I choose to become.”",
	"“In all chaos, there is a cosmos; in all disorder, a secret order.”",
	"“Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.”",
];

export function makeHello(name: string) {
	return `${ominousQuotes[math.random(0, ominousQuotes.size() - 1)]} (${name})`;
}
