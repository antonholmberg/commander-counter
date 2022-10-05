# Anton Magic Commander Counter
## Context
There is already an app out there called life total. It keeps track of players health and allows for dice rolling to see who should go first, as well as support for multiple players. While this app has served us well, it fails to deliver on the following things:

- The iOS version drains battery like crazy.
- There is no counter for commander damage, making it harder to keep track of that stuff.
- It has no counter for how many times a commander has been summoned.
- It supports a maximum of 4 players.

Therefore I have set out to develop my own solution that covers all the stuff the original life total app offers and remedies the shortcomings of the life total app.
## Strategy
To speed up delivery and to make the application more accessible, I have decided to develop the app as a web app. This will enable both iOS and Android users to use the app. One could also install the app to their home screen as a Progressive Web App (PWA).

The application will initially be hosted under my own domain antonholmberg.se using netlify as the host.
## Features
I have decided to split the features into MVP and stretch features.
### MVP
- Selecting how many players should be part of the game (2-6).
- Displaying the current life total of each player as well as having an increase and decrease button.
- Randomizing who should go first.
### Stretch
- Having the commander of each player as their background image, could be done using the MTG API. 
- Displaying the current commander damage dealt to each player as well as increasing and decreasing it.
- Displaying how many times a commander has been summoned.
