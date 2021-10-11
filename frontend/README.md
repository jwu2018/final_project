# Mental Health and Suicide Data Final Project

Group Members: Alan Healy, Alex Kinley, Niko Pelletier, Jyalu Wu

## Project Description
Mental health is a broad and complicated subject. We wanted to present people with statistics and information about mental health and suicide in a way that is engaging and helps people relate to those numbers on a more personal level. Though the statistics themselves are important, it can be easy to forget numbers and thus an interactive overview of statistics on mental health and suicide may not be as impactful. Therefore, we want the site visitors to also have the ability to be more introspective. Site visitors have the opportunity to answer questions about their life and experiences, then see information about how they compare to the broader population, as well as how that might be relevant to mental health or sucide. 

As well as the more personal interactive form, the site also has an interactive overview of various statistics relating to mental health and suicide we aggregated from high quality sources. The site will anonymously record peoples’ responses to questions and provide some comparison of population level trends versus what people on the site responded with.

On the site, visualizations and survey questions are divided into five main sections:

1. Prevalence of Suicide
2. Factors That Contribute to Suicide and/or Mental Illness
3. How Mental Illnesses Are Treated
4. Suicide Prevention Methods
5. How Society and Different Organizations Like Colleges Can Address Mental Health in the Community



## How to run locally
This project is broken up into two parts currently, the frontend and the backup. This project uses `yarn` instead of `npm` so make sure you install it with:
```
@@ -75,3 +90,26 @@ yarn install // only the first time to install the dependancies
yarn start // starts the react dev server
```
If you update the backend, you will have to stop the server and rerun it. This is only neccessary when you change server.js, the actual frontend pages get served on their own.

## Technologies We Used
### Frontend
- React
- Typescript
- Data visualizations
  - D3.js
  - Nivo, which is built on top of D3

### Backend
- Node w/ Express server
- MongoDB for data storage
- Yarn

## Challenges Faced
- Most of the team had never used React, Typescript, Yarn, or Nivo before. It took some time to get used to the new technologies but once we got over the learning curve, they were pretty straightforward to use.
- This project was a race against time. All of us were very busy during finals week and our collective time management skills could have been a lot better. Even so, we are pretty satisfied with the results.

## Group Member Contributions
### Alan Healy
- Built the “society/colleges” questions and visualizations
- Set up the static server

### Alex Kinley
- Built the “prevalence” questions and visualizations
- Built the “factors” questions and visualizations
- Set up the boilerplate for the website
- Helped other group members with react, typescript, and nivo
- Set up most of the website functionality
- Acted as team leader for the project

### Niko Pelletier
- Built the “treatments” questions and visualizations

### Jyalu Wu
- Built the “prevention methods” questions and visualizations
- Created wireframes for the website
- Built the “welcome” and “thank you” pages
- Set up the MongoDB
