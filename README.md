# Magic Island

![Project Mock-up](assets/images/mock-up.png)
The aim of this project is to show all the beauty a tourist will find if traveling to Mallorca.
I kept the project simple providing information about beaches, places to eat, and things to do.
The project can be upgraded easily, and also would feasible have partner section to book rooms, cars, get discount vouchers, etc..

[Live demo on GitHub pages](https://henriqueperoni.github.io/CI-MS2-Magic-Island/)

## Table of Contents:

- [UX](#ux)
  - [User Stories](#user-stories)
  - [Strategy](#1-strategy)
  - [Scope](#2-scope)
  - [Structure](#3-structure)
  - [Skeleton](#4-skeleton)
  - [Surface](#5-surface)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features to consider implementing in the future](#features-to-consider-implementing-in-the-future)
- [Technologies Used](#technologies-used)
  - [Languages](#1-languages)
  - [Integrations](#2-integrations)
  - [Workspace, Version Control, and Repository Storage](#3-workspace-version-control-and-repository-storage)
- [Resources](#resources)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Media](#media)
  - [Code](#code)
- [Acknowledgments](#acknowledgments)

## UX

### User Stories

- I already know that Mallorca is a summer destination.
- I want to know the best things to do in Mallorca.
- I want to know if there are more than only beaches in there.
- I want to get in touch with a specialist if a have doubts.

These goals are accomplished in the following way:

- Animation that shows Mallorca has a rich culinary and exciting activities.
- Things to Do section with several destinations on the Island.
- Map to better locate.
- Contact form to clarify doubts.

### 1. Strategy

Project Goals:

- Provide information on holiday destinations.
- Inspire people that are thinking to go on holiday with images and tips.
- Increase the number of tourists in Mallorca.

Customer Goals:

- Get inspired for their next holiday destination.
- Find accurate information on different subjects
- Have a way to make contact and clarify doubts.

### 2. Scope

The Magic Island website is contained within a single webpage, users do not have to navigate away to use
all the elements included in the website. Elements of the homepage are interactive including buttons that
show all the things that are possible to do in Mallorca. The website also has a Google Maps API to
provide direction. There is also some JavaScript and GSAP animations to make the experience more
user friendly. The website has a contact form to clarify doubts and links to get in touch by social media.

### 3. Structure

The main focus of the structure is to allow users to quickly understand what the website is about.
With a navigation bar that has an icon that represents the sun, a hero image of a beach, and a small
description on the main page is easy for a user to understand the site proposal. Scrolling down to
the About section a text nicely fades in on the screen with some general information, then going to 
the Things to Do section, interective buttons and a map fade in on the screen with more specific 
informations. The website has a form that the users can send a message in the case they have any doubt. 
To finish, scrolling down to the footer an animation starts representing a sunset, in the footer also 
can be found the icons to social medias.

### 4. Skeleton

- [Wireframes](assets/docs/wireframe.pdf)
- Fixed Burguer menu with navigation links for small screens.
- Home, About, Things to Do, and Contact pages.
- Footer with social media icons.

### 5. Surface

**Colors**:

Following the 60%/30%/10% rule, I decided to have two main colors which represent 60% of the website,
as the website is about a summer destination the two colors represent the sun(#db8d3f ) and the sea(#254c54 ).
Also, 2 colors, representing 30%, and one color for the last 10%. To keep the colors in harmony with
the images I picked the colors from some parts of the images. For example, the #254c54 was taken from the 
ocean of the hero image, #db8d3f from the village walls in the about section, and #9e2f21 from a food image.
![Palette](assets/images/palette.png)

**Typography**:

- "Josefin Sans" font (with fall-back font of Sans-Serif) for main hadings and navigation bar.

- "Montserrat" font (with fall-back font of Sans-Serif) for general text. A classic font, which gives elegancy to the website and at the same time it's not too formal.

**Images**:
As mentioned in the colors section, the images, and colors and were carefully chosen to have good harmony between them.

## Features

### Existing Features

- Designed with HTML5, CSS3, JavaScript, jQuery and GSAP.
- Animation before load website showing what to expect.
- Skip button for users who are coming back to the website and do not want to see the animations again.
- About and Things to Do sections nicely fade in with scroll.
- Things to Do section with buttons showing different things to do, and also showing the locations on the Google Maps API.
- Pop up Modal when submitting the form with thank you message.
- Scroll to top button - this feature enables the user to quickly move back to the top of the page. The button only shows up after the first scroll.
- Footer animation representing a sunset.
- Footer with social media links.

### Features to consider implementing in the future

- A partner section with a direct way to book rooms, cars.
- Sign in for a newsletter with the possibility to get discount vouchers in restaurants and attractions.

## Technologies Used

### 1. Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### 2. Integrations

- [Google Fonts](https://fonts.google.com/) - Typography.
- [FontAwesome](https://fontawesome.com/) - Used for icons.
- [GSAP](https://greensock.com/gsap/) - Animations Library.
- [Google Maps JavaScript API](https://cloud.google.com/maps-platform/) - Interative Maps API.
- [EmailJS API](https://www.emailjs.com/) - Send Emails directly with JavaScript.
- [jQuery](https://jquery.com/) - JavaScript library.

### 3. Workspace, version control, and repository storage

- [Gitpod](https://www.gitpod.io/) - IDE (Integrated Development Environment) used to write the code.
- [GitHub](https://github.com/) - Repository hosting service to host the deployed website and track previous versions of code.
- [Git](https://git-scm.com/) - Version control tool to record changes and updates to my files.

## Resources

- [W3.CSS](https://www.w3schools.com/w3css/defaulT.asp) - General resource.
- [Stack Overflow](https://pt.stackoverflow.com/) - General resource.
- [Youtube](https://www.youtube.com/) - General resource.
- [CSS Matic](https://www.cssmatic.com) - Box Shadow Genetator.
- [CSS Gradient](https://cssgradient.io/) - Gradient Generator
- [CommonMark](https://commonmark.org/) - For Markdown language reference.
- [Coolors](https://coolors.co/) - Find matching color palette for site.
- [TinyPNG](https://tinypng.com/) - Efficient compression of images for site.
- [Balsamiq](https://balsamiq.com/wireframes/) - Wireframing design tool.
- [Autoprefixer](https://autoprefixer.github.io/) - Parses CSS and adds vendor prefixes.
- [Google Mobile-Friendly](https://search.google.com/test/mobile-friendly) - Test Mobile-friendly check on site.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) - Google Chrome Extesion Overflow Revealer.
- Code Institute SLACK Community - General Resource

## Code Validation

- [W3C](https://validator.w3.org/) - HTML Markup Validation.
- [Closing Tag Checker for HTML5](https://www.aliciaramirez.com/closing-tags-checker/) - Validates all tags are opening and closing correctly.
- [W3C](https://jigsaw.w3.org/css-validator/) - CSS Validation.
- [JSHINT](https://jshint.com/) - JavaScript code warning & error check.

## Testing

Testing documentation can be found [here](assets/docs/testing.md).

## Project barriers and solutions
- Had an issue with the images of the intro animation for medium and small screens. As the images were vertically positioned on large screens it was not fitting on small screens.
  I tried to use transform: rotate() property but it did not work for all images. I decided to edit the images in an editor and use the edit images with a media query for small
  and medium screens.
- After create the burger navigation bar for medium and small screens I had a big challenge trying to figure out how to close it by clicking on any of the nav items.
  After sharing this issue in the Code Institute Slack Comunity I was advised to use a for loop, and then I figure out a way to apply it.
- Make the skip button works properly. Made the animation image disappear was easy, but the animation that changes the opacity from 0 to 1 of the navigation bar and the
  welcome message was the problem. I tried a conditional statement to the animation only happens if the skip button was not clicked,
  what did not work. With the assistance of a Code Institute tutor, and going through the GSAP documentation we found a way to does not execute
  this animation and show the navbar and the welcome message when the skip button is clicked.
- Unsolved issue: I wanted to add a smooth behavior when the markers of the map are changed. I tried to find a solution in the Google Maps API documentation, but could not find something to fix it. The map works perfectly, it would be just a better user experience.

## Deployment

This project has been deployed on GitHub Pages with the following process:

1. All code was written on Gitpod, an online IDE.
2. The code was then pushed to GitHub where it is stored in my [Repository](https://github.com/Henriqueperoni/CI-MS2-Magic-Island).
3. Under the settings section of the GitHub repository, scroll down to the GitHub Pages section.
4. Under 'Source' drop-down, the 'Master branch' was selected.
5. Once selected, this publishes the project to GitHub Pages and displays the site URL.
6. There is no difference between the deployed version and the development version.
7. The code can be run locally through clone or download.
8. You can do this by opening the repository, clicking on the green 'Code' button, and selecting either 'clone or download'.
9. The Clone option provides a URL, which you can use on your desktop IDE.
10. The Download ZIP option provides a link to download a ZIP file that can be unzipped on your local machine.

## Credits

### Media
- Most of the images were from [Unsplash](https://unsplash.com/), but also some was taken from [Pinterest](https://www.pinterest.ie/)
### Code
- Navigation bar adapted from [Dev Ed](https://www.youtube.com/watch?v=gXkqy0b4M5g).
- Contact form modal pop up adapted from [Origamid](https://www.youtube.com/watch?v=fu-enUG2VEE).
- Smooth scrolling (using Jquery) from [W3SCHOOLS](https://www.w3schools.com/howto/howto_css_smooth_scroll.asp).
- Arrow from Scroll to Top button from [Free Frontend](https://freefrontend.com/css-arrows/).
## Acknowledgments
- Thanks to all Code Institute staff, but a special thanks to Igor Basuga who did not let me give up an idea I had given up.
- Thanks to CI Slack Community for all the assistance.
- Thanks to my mentor Excellence Ilesanmi for his time, patience, and excellent advices.
- Thanks for all the web development community on Internet.