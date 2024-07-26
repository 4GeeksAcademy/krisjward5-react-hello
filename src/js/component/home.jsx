import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	return (

		<div className="text-center website-container">
			<div className="text-center flex-container navigation">
				<Navbar
					navTitle="Magic, The Gathering"
					navLinks= {[
						{
							navurl: "#heroSection",
							navlabel: "Hero Section", 
						},
						{
							navurl: "#cardSection",
							navlabel: "Cards",
						},
						{
							navurl: "#footerSection",
							navlabel: "Footer",
						},
					 ]}
				/>
			</div>
			<div className="flex-container daHero" id="heroSection">
				<Hero
					heroTitle="Delver"
					heroMainText="This deck is for baby brains. You play delver, you protect delver. All of the sudden you play the big fish. Wow how can you lose. You're out of cards???? easy. Cast Expresive Iteration. If you lose playing this deck you need to reconsider playing magic the gathering."
					heroButton="Stock Delver"
					heroButtonLink="https://www.mtggoldfish.com/archetype/legacy-grixis-tempo#paper"
				/>
			</div>
			<div className="text-center daCardz flex-container" id="cardSection">
				<Card
					imageUrl="https://cdn.cardsrealm.com/images/cartas/pmh2-modern-horizons-2-promos/EN/crop-med/murktide-regent-52p.jpeg?8150"
					imageAltText="Text"
					cardTitle="Murktide Regent"
					cardBodyText="Delve (Each card you exile from your graveyard while casting this spell pays for {1}.) Flying Murktide Regent enters the battlefield with a +1/+1 counter on it for each instant and sorcery card exiled with it. Whenever an instant or sorcery card leaves your graveyard, put a +1/+1 counter on Murktide Regent."
					callToActionText="Learn More"
					callToActionUrl="https://scryfall.com/card/mh2/52/murktide-regent"
				/>
				<Card
					imageUrl="https://assets.echomtg.com/magic/cards/cropped/158275.hq.jpg"
					imageAltText="Text"
					cardTitle="Expressive Iteration"
					cardBodyText="Look at the top three cards of your library. Put one of them into your hand, put one of them on the bottom of your library, and exile one of them. You may play the exiled card this turn."
					callToActionText="Learn More"
					callToActionUrl="https://scryfall.com/card/otc/224/expressive-iteration"
				/>
				<Card
					imageUrl="https://cdn.cardsrealm.com/images/cartas/crop/isd-innistrad/delver-of-secrets--insectile-aberration-51-med.jpeg?7961"
					imageAltText="Text"
					cardTitle="Delver of Secrets"
					cardBodyText="At the beginning of your upkeep, look at the top card of your library. You may reveal that card. If an instant or sorcery card is revealed this way, transform Delver of Secrets."
					callToActionText="Learn More"
					callToActionUrl="https://scryfall.com/card/mid/47/delver-of-secrets-insectile-aberration"
				/>
				<Card
					imageUrl="https://cdn11.bigcommerce.com/s-641uhzxs7j/images/stencil/1280x1280/products/320185/382976/AMH235ns__70465.1643242650.jpg?c=1"
					imageAltText="Text"
					cardTitle="Dragon's Rage Channeler"
					cardBodyText="Whenever you cast a noncreature spell, surveil 1. (Look at the top card of your library. You may put that card into your graveyard.)

Delirium — As long as there are four or more card types among cards in your graveyard, Dragon’s Rage Channeler gets +2/+2, has flying, and attacks each combat if able."
					callToActionText="Learn More"
					callToActionUrl="https://scryfall.com/card/mh2/121/dragons-rage-channeler"
				/>
			</div>
			<div className="bg-dark text-light mt-3" id="footerSection">
				<Footer></Footer>
			</div>
		</div>
	);
};

export default Home;
