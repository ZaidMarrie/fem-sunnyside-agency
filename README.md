# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

## Desktop View

![Screenshot 2021-07-11 at 12-23-39 Frontend Mentor Sunnyside agency landing page](https://user-images.githubusercontent.com/84665360/125191525-32ecd480-e243-11eb-9813-9b3269a3fb87.png)

## Mobile View

![Screenshot 2021-07-11 at 12-24-18 Frontend Mentor Sunnyside agency landing page](https://user-images.githubusercontent.com/84665360/125191558-60398280-e243-11eb-9e42-57a33c545647.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/completely-responsive-mobile-first-site-for-sunnysideagency-challenge-ZvVMljXMA)
- Live Site URL: (https://zaidmarrie.github.io/sunnyside-agency_landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Basic Javascript

### What I learned

I learnt how to get flexbox to behave as I expected to by using this challenge to experiment the flexbox container and item properties. Background images is something I haven't used much and I faced some difficulties with it and how it behaves, so I got some help by watching a youtube video about it and successfully learnt how to use background images effectively including the properties associated with it. I also learnt how to create a hamburger menu which toggles the navigation menu when clicked.

I added some snippets of code, see below:

```css
.proud-of-this-css {
  background-image: url(images/123.jpg);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
```

```js
function toggle () {

let menu = document.getElementById("navbar");

  if (menu.style.display === "block") {
    menu.style.display = "none"
    }
    else {
      menu.style.display = "block"
      }
}

document.getElementById("menuIcon").addEventListener("click", toggle());
```

### Useful resources

- [Slack](https://app.slack.com/client/TCYEB44S2/CCYHFT85B) - This helped me for when a section of my site was overlapping another.
- [Youtube](https://youtu.be/3T_Jy1CqH9k) - This is a good tutorial for learning about background-images.

## Author

- Frontend Mentor - [@ZaidMarrie](https://www.frontendmentor.io/profile/ZaidMarrie)

## Acknowledgments

I would like to thank some members from the slack community who are part of the FrontEnd Mentor workspace for assisting me where I got stuck and helping me see what I did wrong. I also am grateful for all their feedback. Regards.
