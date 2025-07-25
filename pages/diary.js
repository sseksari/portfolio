import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues
const Map = dynamic(() => import('../components/Map'), { ssr: false });

// Replace with your Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const poems = [
    {
        title: "Happiness...",
        content: `I was talking to my 10 year old self lately<br />
Catching up on if she was happy<br />
She told me we got a candy yesterday<br />
And day before dad came to pick her up from school<br />
The week before we got a sticker from our teacher<br />
And our friend called us her best friend<br />
I blushed, and laughed, and giggled<br />
And then she asked me<br />
"21 yr old shrishti, are we happy"<br />
And I felt blank<br />
Nothing to say, hard to think<br />
Just blank…<br />
And then she told me<br />
Maybe it can be a person smiling at us<br />
Or the weather outside<br />
Maybe a conversation with our old friend<br />
Or a nice dinner party<br />
Maybe it was our family and their stories<br />
Or a comedy movie<br />
our favourite song<br />
Or our all time favourite chocolate?<br />
And I smiled,<br />
at nothing and at everything<br />
All at the same time<br />
Happiness was right here, everywhere<br />
I just needed to change my lens, clean it, and wear my brand new shades<br />
So next time when you can't think of why you are happy<br />
Close your eyes and remember your 10 year old self!`
    },
    {
        title: "Balloons",
        content: `The sky is painted blue, the warm wind swirling away like It's mid-June<br />
The air smells musty, yet refreshing and new<br />
I look into the naked sky<br />
The Faint pictures of faded clouds and hot air balloons floating by<br /><br />
I turned my head around to grab the camera<br />
A perfect picture to remember this by…<br />
The balloons slid away somewhere<br />
The sky was empty as it could be<br />
It was just a matter of seconds<br />
And the sky was again so lonely<br /><br />
Our moments are like balloons<br />
Slipping from our grasp<br />
Melting away into oblivion<br />
With a hope that we meet them soon<br />
You miss the beat and you go off tune<br />
You end up loosing on these balloons<br /><br />
Each balloon, a new experience<br />
A new beginning yet an old end<br />
The climax you see is that you're just left with a big fat bunch of these memories<br />
Some you experience, some you miss<br />
Some you fill with roses and heart eyes<br />
Some are like thorns filled with regrets and broken sighs<br /><br />
Well in the end the choice lands with you,<br />
Not choosing is a choice too<br />
So what kind of a bunch are you building to take back with you?`
    },
    {
        title: "Grow",
        content: `accepting change forces you to break through your comfort zone<br />
it makes you build your own sweet home<br />
switching from the fragile to the agile mode<br />
we oscillate between feelings of stress and hope<br /><br />
we can't stay still where we began<br />
even a stagnant pond kills its fish before its hardly born<br />
a gushing river changes and changes and changes<br />
giving life to so many strangers<br />
don't kill your future self by being afraid of transitions<br />
because these only make life beautiful and full of lessons<br /><br />
spend time with yourself, focus on your growth<br />
physical, mental, something completely out of scope<br />
make mistakes, make amends, make new friends<br />
explore hobbies and interests<br />
do things you never imagined<br />
drive your passion on new roads<br />
it'll take you faster towards your goals<br />
but always remember to accept the change and break through your comfort zone`
    }
];

export default function Diary() {
    const [activeSection, setActiveSection] = useState('travel');
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
    const [activeRecipe, setActiveRecipe] = useState(null);
    const [expandedCard, setExpandedCard] = useState(null);

    const handleFlip = () => {
        setPageNumber(prev => {
            if (prev === 1) return 2;
            if (prev === 2) return 3;
            return 1;
        });
    };

    const handleRecipeClick = (index) => {
        setActiveRecipe(index);
    };

    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const handlePoemNavigation = (direction) => {
        setCurrentPoemIndex(prevIndex => {
            if (direction === 'prev') {
                return prevIndex === 0 ? poems.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === poems.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <div className="diary-container">
            <div className="diary-header">
                <h1>Shrishti's Digital Diary</h1>
                <p className="diary-subtitle">A snapshot of who I am beyond work !</p>
            </div>

            <div className="diary-nav">
                <button 
                    className={`nav-item ${activeSection === 'travel' ? 'active' : ''}`}
                    onClick={() => setActiveSection('travel')}
                >
                    ✈️ Travel
                </button>
                <button 
                    className={`nav-item ${activeSection === 'poetry' ? 'active' : ''}`}
                    onClick={() => setActiveSection('poetry')}
                >
                    ✍️ Poetry
                </button>
                <button 
                    className={`nav-item ${activeSection === 'cooking' ? 'active' : ''}`}
                    onClick={() => setActiveSection('cooking')}
                >
                    🍳 Cooking
                </button>
            </div>

            <div className="diary-content">
                {/* Travel Section */}
                {activeSection === 'travel' && (
                    <div className="diary-section travel-section">
                        <h2>Travel Adventures</h2>
                        
                        {/* Top Cards */}
                        <div className="travel-cards-container">
                            {/* National Parks Card */}
                            <div 
                                className={`travel-card ${expandedCard === 'parks' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('parks')}
                            >
                                <div className="card-background parks-bg"></div>
                                <div className="card-content">
                                    <h3>My Favorite National Parks</h3>
                                    {expandedCard === 'parks' && (
                                        <div className="expanded-content">
                                            <ul>
                                                <li>Most greenery - Yosemite National Park, USA</li>
                                                <li>Most unique hikes - Zion National Park, USA</li>
                                                <li>Most Outworldly - Death Valley National Park, USA</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Cities Card */}
                            <div 
                                className={`travel-card ${expandedCard === 'cities' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('cities')}
                            >
                                <div className="card-background cities-bg"></div>
                                <div className="card-content">
                                    <h3>My Favorite Cities</h3>
                                    {expandedCard === 'cities' && (
                                        <div className="expanded-content">
                                            <ul>
                                                <li>Most Vibrant - New York City, USA</li>
                                                <li>Most Cultural - Prague, Czech Republic</li>
                                                <li>Most Scenic - Queenstown, New Zealand</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Countries Card */}
                            <div 
                                className={`travel-card ${expandedCard === 'countries' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('countries')}
                            >
                                <div className="card-background countries-bg"></div>
                                <div className="card-content">
                                    <h3>My Favorite Countries</h3>
                                    {expandedCard === 'countries' && (
                                        <div className="expanded-content">
                                            <ul>
                                                <li>Most Diverse - USA</li>
                                                <li>Most Cultural - Japan</li>
                                                <li>Most Scenic - New Zealand</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="map-section">
                            <Map />
                        </div>
                    </div>
                )}

                {/* Poetry Section */}
                {activeSection === 'poetry' && (
                    <div className="diary-section poetry-section">
                        <h2>My Poetry Collection</h2>
                        <div className="poetry-subtitle">"..where thoughts embrace"</div>
                        <div className="poetry-grid">
                            <div className="poem-card">
                                <div className="poem-page">
                                    <h3>{poems[currentPoemIndex].title}</h3>
                                    <div className="poem-content">
                                        <p dangerouslySetInnerHTML={{ __html: poems[currentPoemIndex].content }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poem-navigation">
                            <button 
                                className="poem-nav-button"
                                onClick={() => handlePoemNavigation('prev')}
                            >
                                ←
                            </button>
                            <span className="poem-page-number">
                                {currentPoemIndex + 1} / {poems.length}
                            </span>
                            <button 
                                className="poem-nav-button"
                                onClick={() => handlePoemNavigation('next')}
                            >
                                →
                            </button>
                        </div>
                    </div>
                )}

                {/* Cooking Section */}
                {activeSection === 'cooking' && (
                    <div className="diary-section cooking-section">
                        <h2>My Favorite Recipes</h2>
                        <div className="recipes-grid">
                            <div 
                                className={`recipe-card ${activeRecipe === 0 ? 'active' : ''}`}
                                onClick={() => handleRecipeClick(0)}
                            >
                                <div className="recipe-image">
                                    <Image
                                        src="/illustrations/smoothie-illustration.jpg"
                                        alt="Wellness Smoothie Illustration"
                                        width={400}
                                        height={300}
                                        className="recipe-img"
                                    />
                                </div>
                                <div className="recipe-content">
                                    <h3>Wellness Smoothie</h3>
                                    <p>A nutrient-packed smoothie perfect for a healthy start to your day</p>
                                    {activeRecipe === 0 && (
                                        <div className="recipe-details">
                                            <h4>Ingredients:</h4>
                                            <ul>
                                                <li>1 avocado</li>
                                                <li>Handful of spinach</li>
                                                <li>1 banana</li>
                                                <li>5 mixed nuts (walnuts & almonds)</li>
                                                <li>1 cup mixed berries</li>
                                                <li>1 cup milk/water</li>
                                                <li>1 scoop protein powder (optional)</li>
                                                <li>1 tbsp chia seeds</li>
                                            </ul>
                                            <h4>Instructions:</h4>
                                            <ol>
                                                <li>Blend all ingredients until smooth and creamy</li>
                                                <li>Adjust consistency by adding more liquid if needed</li>
                                                <li>Pour into a glass and enjoy!</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div 
                                className={`recipe-card ${activeRecipe === 1 ? 'active' : ''}`}
                                onClick={() => handleRecipeClick(1)}
                            >
                                <div className="recipe-image">
                                    <Image
                                        src="/illustrations/tofu-bowl-illustration.jpg"
                                        alt="Tofu Bowl"
                                        width={300}
                                        height={200}
                                        className="recipe-img"
                                    />
                                </div>
                                <div className="recipe-content">
                                    <h3>Tofu Quinoa Bowl</h3>
                                    {activeRecipe === 1 && (
                                        <div className="recipe-details">
                                            <h4>Ingredients:</h4>
                                            <ul>
                                                <li>1 cup quinoa</li>
                                                <li>1 block firm tofu</li>
                                                <li>1 eggplant</li>
                                                <li>1 cup broccoli</li>
                                                <li>2 tbsp gochujang (Korean chili paste)</li>
                                                <li>1 tbsp soy sauce</li>
                                                <li>1 tbsp sesame oil</li>
                                                <li>2 cloves garlic, minced</li>
                                                <li>1 tbsp ginger, grated</li>
                                                <li>2 green onions, chopped</li>
                                                <li>Salt and pepper to taste</li>
                                            </ul>
                                            <h4>Instructions:</h4>
                                            <ol>
                                                <li>Cook quinoa according to package instructions</li>
                                                <li>Drain water from tofu and cut into cubes</li>
                                                <li>Cut eggplant into cubes and sauté with salt and pepper</li>
                                                <li>Sauté broccoli with salt and pepper</li>
                                                <li>Sauté tofu until golden brown with salt and pepper</li>
                                                <li>Mix in sautéed vegetables</li>
                                                <li>Prepare gochujang sauce by combining all sauce ingredients</li>
                                                <li>Add sauce to the tofu and vegetable mixture</li>
                                                <li>Combine the tofu mixture with cooked quinoa</li>
                                                <li>Top with chopped green onions</li>
                                            </ol>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 