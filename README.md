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
This project is broken up into two parts currently, the frontend and the backend. This project uses `yarn` instead of `npm` so make sure you install it with:
```
@@ -75,3 +90,26 @@ yarn install // only the first time to install the dependancies
yarn start // starts the react dev server
```
If you update the backend, you will have to stop the server and rerun it. This is only necessary when you change server.js, the actual frontend pages get served on their own.

## Technologies We Used
### Frontend
- React
- Typescript
- Data visualizations
  - Nivo, which is built on top of D3.js
- Visual Design
  - Wireframe.cc
  - Figma
  - Skeleton CSS framework

We used React as our web framework to organize and build the website.
We used Nivo to build strong data visualizations for each of our guiding questions.
We used Figma and Wireframe.cc to plan the layout and visuals of our website.
Then we implemented those visuals using the Skeleton CSS framework.
We used TypeScript in parts of our site to explore the technology.

### Backend
- Node w/ Express server
- MongoDB for data storage
- Yarn
- Hosted on Digital Ocean

We used Node.js with an express server to statically serve our front-end. We use MongoDB to store aggregate answers
to survey questions. We used yarn as our package manager in place of npm. We hosted the site on Digital Ocean.

## Challenges Faced
- Most of the team had never used React, Typescript, Yarn, or Nivo before. It took some time to get used to the new technologies but once we got over the learning curve, they were pretty straightforward to use.
- This project was a race against time. All of us were very busy during finals week and our time management was affected as a result. Even so, we are pretty satisfied with the results.
- Since data visualization is the core of our project, we spent a lot of time gathering relevant data from a variety of sources. Finding data that was useful and well-formatted was difficult at times.

## Group Member Contributions
### Alan Healy
- Gathered data for the guiding question "How Can Society and Different Organizations Like Colleges Address Mental Health in the Community?"
- Built the questions and visualizations for the "Society and Colleges" guiding question.
- Took notes during meetings
- Set up the static server
- Contributed to project proposal and README

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
