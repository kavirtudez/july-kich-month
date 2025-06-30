document.addEventListener('DOMContentLoaded', function() {
    // Flag data: All countries with their country codes
    const flags = [
        { country: 'Afghanistan', code: 'af' },
        { country: 'Albania', code: 'al' },
        { country: 'Algeria', code: 'dz' },
        { country: 'Andorra', code: 'ad' },
        { country: 'Angola', code: 'ao' },
        { country: 'Antigua and Barbuda', code: 'ag' },
        { country: 'Argentina', code: 'ar' },
        { country: 'Armenia', code: 'am' },
        { country: 'Australia', code: 'au' },
        { country: 'Austria', code: 'at' },
        { country: 'Azerbaijan', code: 'az' },
        { country: 'Bahamas', code: 'bs' },
        { country: 'Bahrain', code: 'bh' },
        { country: 'Bangladesh', code: 'bd' },
        { country: 'Barbados', code: 'bb' },
        { country: 'Belarus', code: 'by' },
        { country: 'Belgium', code: 'be' },
        { country: 'Belize', code: 'bz' },
        { country: 'Benin', code: 'bj' },
        { country: 'Bhutan', code: 'bt' },
        { country: 'Bolivia', code: 'bo' },
        { country: 'Bosnia and Herzegovina', code: 'ba' },
        { country: 'Botswana', code: 'bw' },
        { country: 'Brazil', code: 'br' },
        { country: 'Brunei', code: 'bn' },
        { country: 'Bulgaria', code: 'bg' },
        { country: 'Burkina Faso', code: 'bf' },
        { country: 'Burundi', code: 'bi' },
        { country: 'Cambodia', code: 'kh' },
        { country: 'Cameroon', code: 'cm' },
        { country: 'Canada', code: 'ca' },
        { country: 'Cape Verde', code: 'cv' },
        { country: 'Central African Republic', code: 'cf' },
        { country: 'Chad', code: 'td' },
        { country: 'Chile', code: 'cl' },
        { country: 'China', code: 'cn' },
        { country: 'Colombia', code: 'co' },
        { country: 'Comoros', code: 'km' },
        { country: 'Congo', code: 'cg' },
        { country: 'Costa Rica', code: 'cr' },
        { country: 'Croatia', code: 'hr' },
        { country: 'Cuba', code: 'cu' },
        { country: 'Cyprus', code: 'cy' },
        { country: 'Czech Republic', code: 'cz' },
        { country: 'Denmark', code: 'dk' },
        { country: 'Djibouti', code: 'dj' },
        { country: 'Dominica', code: 'dm' },
        { country: 'Dominican Republic', code: 'do' },
        { country: 'East Timor', code: 'tl' },
        { country: 'Ecuador', code: 'ec' },
        { country: 'Egypt', code: 'eg' },
        { country: 'El Salvador', code: 'sv' },
        { country: 'Equatorial Guinea', code: 'gq' },
        { country: 'Eritrea', code: 'er' },
        { country: 'Estonia', code: 'ee' },
        { country: 'Eswatini', code: 'sz' },
        { country: 'Ethiopia', code: 'et' },
        { country: 'Fiji', code: 'fj' },
        { country: 'Finland', code: 'fi' },
        { country: 'France', code: 'fr' },
        { country: 'Gabon', code: 'ga' },
        { country: 'Gambia', code: 'gm' },
        { country: 'Georgia', code: 'ge' },
        { country: 'Germany', code: 'de' },
        { country: 'Ghana', code: 'gh' },
        { country: 'Greece', code: 'gr' },
        { country: 'Grenada', code: 'gd' },
        { country: 'Guatemala', code: 'gt' },
        { country: 'Guinea', code: 'gn' },
        { country: 'Guinea-Bissau', code: 'gw' },
        { country: 'Guyana', code: 'gy' },
        { country: 'Haiti', code: 'ht' },
        { country: 'Honduras', code: 'hn' },
        { country: 'Hungary', code: 'hu' },
        { country: 'Iceland', code: 'is' },
        { country: 'India', code: 'in' },
        { country: 'Indonesia', code: 'id' },
        { country: 'Iran', code: 'ir' },
        { country: 'Iraq', code: 'iq' },
        { country: 'Ireland', code: 'ie' },
        { country: 'Israel', code: 'il' },
        { country: 'Italy', code: 'it' },
        { country: 'Jamaica', code: 'jm' },
        { country: 'Japan', code: 'jp' },
        { country: 'Jordan', code: 'jo' },
        { country: 'Kazakhstan', code: 'kz' },
        { country: 'Kenya', code: 'ke' },
        { country: 'Kiribati', code: 'ki' },
        { country: 'Kuwait', code: 'kw' },
        { country: 'Kyrgyzstan', code: 'kg' },
        { country: 'Laos', code: 'la' },
        { country: 'Latvia', code: 'lv' },
        { country: 'Lebanon', code: 'lb' },
        { country: 'Lesotho', code: 'ls' },
        { country: 'Liberia', code: 'lr' },
        { country: 'Libya', code: 'ly' },
        { country: 'Liechtenstein', code: 'li' },
        { country: 'Lithuania', code: 'lt' },
        { country: 'Luxembourg', code: 'lu' },
        { country: 'Madagascar', code: 'mg' },
        { country: 'Malawi', code: 'mw' },
        { country: 'Malaysia', code: 'my' },
        { country: 'Maldives', code: 'mv' },
        { country: 'Mali', code: 'ml' },
        { country: 'Malta', code: 'mt' },
        { country: 'Marshall Islands', code: 'mh' },
        { country: 'Mauritania', code: 'mr' },
        { country: 'Mauritius', code: 'mu' },
        { country: 'Mexico', code: 'mx' },
        { country: 'Micronesia', code: 'fm' },
        { country: 'Moldova', code: 'md' },
        { country: 'Monaco', code: 'mc' },
        { country: 'Mongolia', code: 'mn' },
        { country: 'Montenegro', code: 'me' },
        { country: 'Morocco', code: 'ma' },
        { country: 'Mozambique', code: 'mz' },
        { country: 'Myanmar', code: 'mm' },
        { country: 'Namibia', code: 'na' },
        { country: 'Nauru', code: 'nr' },
        { country: 'Nepal', code: 'np' },
        { country: 'Netherlands', code: 'nl' },
        { country: 'New Zealand', code: 'nz' },
        { country: 'Nicaragua', code: 'ni' },
        { country: 'Niger', code: 'ne' },
        { country: 'Nigeria', code: 'ng' },
        { country: 'North Korea', code: 'kp' },
        { country: 'North Macedonia', code: 'mk' },
        { country: 'Norway', code: 'no' },
        { country: 'Oman', code: 'om' },
        { country: 'Pakistan', code: 'pk' },
        { country: 'Palau', code: 'pw' },
        { country: 'Panama', code: 'pa' },
        { country: 'Papua New Guinea', code: 'pg' },
        { country: 'Paraguay', code: 'py' },
        { country: 'Peru', code: 'pe' },
        { country: 'Philippines', code: 'ph' },
        { country: 'Poland', code: 'pl' },
        { country: 'Portugal', code: 'pt' },
        { country: 'Qatar', code: 'qa' },
        { country: 'Romania', code: 'ro' },
        { country: 'Russia', code: 'ru' },
        { country: 'Rwanda', code: 'rw' },
        { country: 'Saint Kitts and Nevis', code: 'kn' },
        { country: 'Saint Lucia', code: 'lc' },
        { country: 'Saint Vincent and the Grenadines', code: 'vc' },
        { country: 'Samoa', code: 'ws' },
        { country: 'San Marino', code: 'sm' },
        { country: 'Sao Tome and Principe', code: 'st' },
        { country: 'Saudi Arabia', code: 'sa' },
        { country: 'Senegal', code: 'sn' },
        { country: 'Serbia', code: 'rs' },
        { country: 'Seychelles', code: 'sc' },
        { country: 'Sierra Leone', code: 'sl' },
        { country: 'Singapore', code: 'sg' },
        { country: 'Slovakia', code: 'sk' },
        { country: 'Slovenia', code: 'si' },
        { country: 'Solomon Islands', code: 'sb' },
        { country: 'Somalia', code: 'so' },
        { country: 'South Africa', code: 'za' },
        { country: 'South Korea', code: 'kr' },
        { country: 'South Sudan', code: 'ss' },
        { country: 'Spain', code: 'es' },
        { country: 'Sri Lanka', code: 'lk' },
        { country: 'Sudan', code: 'sd' },
        { country: 'Suriname', code: 'sr' },
        { country: 'Sweden', code: 'se' },
        { country: 'Switzerland', code: 'ch' },
        { country: 'Syria', code: 'sy' },
        { country: 'Taiwan', code: 'tw' },
        { country: 'Tajikistan', code: 'tj' },
        { country: 'Tanzania', code: 'tz' },
        { country: 'Thailand', code: 'th' },
        { country: 'Togo', code: 'tg' },
        { country: 'Tonga', code: 'to' },
        { country: 'Trinidad and Tobago', code: 'tt' },
        { country: 'Tunisia', code: 'tn' },
        { country: 'Turkey', code: 'tr' },
        { country: 'Turkmenistan', code: 'tm' },
        { country: 'Tuvalu', code: 'tv' },
        { country: 'Uganda', code: 'ug' },
        { country: 'Ukraine', code: 'ua' },
        { country: 'United Arab Emirates', code: 'ae' },
        { country: 'United Kingdom', code: 'gb' },
        { country: 'United States', code: 'us' },
        { country: 'Uruguay', code: 'uy' },
        { country: 'Uzbekistan', code: 'uz' },
        { country: 'Vanuatu', code: 'vu' },
        { country: 'Vatican City', code: 'va' },
        { country: 'Venezuela', code: 've' },
        { country: 'Vietnam', code: 'vn' },
        { country: 'Yemen', code: 'ye' },
        { country: 'Zambia', code: 'zm' },
        { country: 'Zimbabwe', code: 'zw' }
    ];

    const flagImage = document.getElementById('flag-image');
    const optionsContainer = document.getElementById('options');
    const resultDisplay = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const nextButton = document.getElementById('next-btn');

    let currentFlag;
    let options = [];
    let score = 0;
    let usedFlags = [];
    let celebrationShown = false; // Track if celebration has been shown

    // Create elements for the celebration
    const celebrationDiv = document.createElement('div');
    celebrationDiv.className = 'celebration';
    celebrationDiv.innerHTML = `
        <div class="celebration-message">Well, that's 21 points! Happy 21st, Kichy :)</div>
        <div class="celebration-dinos">
            <img src="dinosaur2.gif" alt="Dinosaur Left" class="dino-left">
            <img src="dinosaur.gif" alt="Dinosaur Right" class="dino-right">
        </div>
        <button class="continue-btn">Continue Playing</button>
    `;
    celebrationDiv.style.display = 'none';
    document.body.appendChild(celebrationDiv);

    const continueButton = celebrationDiv.querySelector('.continue-btn');
    continueButton.addEventListener('click', () => {
        celebrationDiv.style.display = 'none';
        initGame();
    });

    // Start the game
    initGame();

    function initGame() {
        // Reset displays
        resultDisplay.textContent = '';
        resultDisplay.className = '';
        nextButton.style.display = 'none';

        // Get a new flag
        getNewFlag();
        
        // Update the score display
        updateScore();
    }

    function getNewFlag() {
        // Filter out the flags we've already used
        const availableFlags = flags.filter(flag => !usedFlags.includes(flag));
        
        // If we've used all flags, reset the used flags
        if (availableFlags.length === 0) {
            usedFlags = [];
            currentFlag = flags[Math.floor(Math.random() * flags.length)];
        } else {
            // Select a random flag from the available flags
            currentFlag = availableFlags[Math.floor(Math.random() * availableFlags.length)];
        }
        
        // Add the current flag to the used flags
        usedFlags.push(currentFlag);
        
        // Display the flag image
        flagImage.src = `https://flagcdn.com/w320/${currentFlag.code}.png`;
        
        // Generate options
        generateOptions();
    }

    function generateOptions() {
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create an array with the correct answer
        options = [currentFlag.country];
        
        // Add 3 random incorrect options
        while (options.length < 4) {
            const randomFlag = flags[Math.floor(Math.random() * flags.length)];
            if (!options.includes(randomFlag.country) && randomFlag.country !== currentFlag.country) {
                options.push(randomFlag.country);
            }
        }
        
        // Shuffle the options
        options = shuffleArray(options);
        
        // Create buttons for each option
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        // Disable all option buttons
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentFlag.country) {
                button.style.backgroundColor = '#4CAF50'; // Green for correct answer
            }
            if (button.textContent === selectedOption && selectedOption !== currentFlag.country) {
                button.style.backgroundColor = '#F44336'; // Red for selected wrong answer
            }
        });
        
        // Check if the answer is correct
        if (selectedOption === currentFlag.country) {
            resultDisplay.textContent = 'Correct!';
            resultDisplay.className = 'correct';
            score++;
            updateScore();
            
            // Check if score reached 21
            if (score === 21 && !celebrationShown) {
                celebrationShown = true;
                setTimeout(() => {
                    celebrationDiv.style.display = 'flex';
                    triggerConfetti();
                }, 1000);
                return; // Don't show next button yet
            }
        } else {
            resultDisplay.textContent = `Wrong! It's ${currentFlag.country}`;
            resultDisplay.className = 'wrong';
        }
        
        // Show the next button
        nextButton.style.display = 'block';
    }

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Next button click handler
    nextButton.addEventListener('click', initGame);

    // Helper function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Function to trigger confetti
    function triggerConfetti() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const colors = ['#fdef6c', '#f8d55d', '#7B020B', '#ad030f'];
                const count = 200;
                
                // Create confetti
                for (let i = 0; i < count; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
                    confetti.style.opacity = Math.random();
                    confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                    
                    document.body.appendChild(confetti);
                    
                    // Remove confetti after animation
                    setTimeout(() => {
                        document.body.removeChild(confetti);
                    }, 5000);
                }
            }, i * 300);
        }
    }
}); 