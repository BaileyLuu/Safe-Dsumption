<h1>Safe Dsumption</h1>
<p>If you download the project and want the website to go live, please make sure that it is in this format 127.0.0.1:5500/Home.html?# </p>
### Inspiration
When summer is coming, people are so excited to go to the beaches to play with friends and lie down on blanket for sunbathing. Although sunbathing helps increasing the vitamins D level, which most adults do not have enough, but sunbathing causes problems because repeated UV light exposure that results in sunburn. According to Mayor Clinic,  sunburn increases the risk of other skin damage, such as dark spots, rough spots, and dry or wrinkled skin. It also raises the risk of skin cancers such as melanoma. According to Office of Surgeon General, more than 400,000 cases of skin cancer, about 6,000 of which are melanomas, are estimated to be related to indoor tanning in the U.S. each year. 

### What it does
People can search for specific locations and the website will display the weather (Celsius/Fahrenheit degree). People can check the UV Index for specific city and state and the website will display the instruction how to protect themselves from sunburn. People can also take Fitzpatrick Skin Type quiz to determine their skin types. Skin types are divided into six parts which are categorized as following: 

- Skin type I: Always burn, never tan
- Skin type II: Burn easily, rarely tan
- Skin type III: Occasionally burn, slowly tan
- Skin type IV: Rarely burn, rapidly tan
- Skin type V & VI: Very rarely burn, always dark

The quiz is used to evaluate the risks of skin cancer and vitamin D deficiency. It will help you to decide if you should get sunlight for vitamin or you should avoid sunlight. 
The project was named as "Safe Dsumption" because I want to raise awareness the damages of sunbathing. People need to consume vitamins D but they need to do it safety. 

### How we built it
I used HTML, CSS and JavaScript to build the project. In addition, I also used Google Maps JavaScripts API to show the beaches in United States. People can search specific city and states, look for the nearby beaches and check the UV Index to make sure it is safe for them to go there. Lastly, I used OpenWeatherMap API for the first time to show the real-time weather. I used UV Index widget from EPA which stands for United States Environmental Protection Agency. 

### Challenges we ran into
1. Originally, I wanted to use OpenUV Index API for Globally Real-time UV Index. However, I wasn't able to get the API to work. 
2. I was not able to host and deploy the website. I tried to use firebase and netlify to host the website but I could not. 

### Accomplishments that we're proud of
It's been a long time since I haven't code in HTML/CSS. Therefore, it took me a lot of time to design the website.  I am proud that although I could not implement OpenUV Index API, I was able to find another way to replace it and serve the purpose. I would say determining UV Index is the most important part in this project. The website works! 

### What we learned
- Learned how to implement OpenWeatherMap API for the first time. 
- Learned how to fetch Json data from OpenWeatherMap link
- Learned how to change images with jQuery (change weather icons every time the user enter location)
- Learned how to make a multiple-choice form for people to know their skin types
- Learned how to be flexible. If this way does not work, try the other way.

### What's next for Safe Dsumption
- Host and deploy the website using either Firebase Hosting or Netlify
- Implement OpenUV Index API for the global UV Index
- Use Firebase Realtime Database Google Maps for people to search realtime heatstroke cases and anyone who is nearby the person who experiences heatstroke can help. 
- Show the time countdown as the user goes out into the sun, to alert them if they sunbathing overtime

### References
- [https://www.epa.gov/sunsafety/uv-index-1]
- [https://www.gbhealthwatch.com/Did-you-know-Fitzpatrick-Skin-Type.php]
- [https://www.hhs.gov/surgeongeneral/reports-and-publications/skin-cancer/fact-sheet/index.html]
- [https://www.mayoclinic.org/diseases-conditions/sunburn/symptoms-causes/syc-20355922]

### Other links
- [https://devpost.com/software/safe-dsumption]
- [https://youtu.be/9M6NVYOs4VU]
