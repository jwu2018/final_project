# Final Project
*Due before the start of class, October 11th (final day of the term)*

For your final project, you'll implement a web application that exhibits understanding of the course materials. 
This project should provide an opportunity to both be creative and to pursue individual research and learning goals.

## General description
Your project should consist of a complete Web application, exhibiting facets of the three main sections of the course material:

- Static Web page content and design. You should have a project that is accessible, easily navigable, and features significant content.
- Dynamic behavior implemented with JavaScript (TypeScript is also allowed if your group wants to explore it).
- Server-side programming *using Node.js*. Typically this will take the form of some sort of persistent data (database), authentication, and possibly server-side computation. 
- A video (less than five minutes) where each group member explains some aspect of the project. An easy way to produce this video is for you all the groups members to join a Zoom call that is recorded; each member can share their screen when they discuss the project or one member can "drive" the interface while other members narrate (this second option will probably work better.) The video should be posted on YouTube or some other accessible video hosting service. Make sure your video is less than five minutes, but long enough to successfully  explain your project and show it in action. There is no minimum video length.

## Project ideation
Excellent projects typically serve someone/some group; for this assignment you need to define your users and stakeholders. I encourage you to identify projects that will have impact, either artistically, politically, or in terms of productivity. 

## Logistics
### Team size
Students are will work in teams of 3-5 students for the project; teams of two can be approved with the permission of the instructor. Working in teams should help enable you to build a good project in a limited amount of time.  Use the `#project-logistics` channel in Discord to pitch ideas for final projects and/or find fellow team members as needed.

Teams must be in place by end of day on Saturday, September 25th. If you have not identified a team at this point, you will be assigned a team. You will be given some class time on Monday to work on your proposal, but please plan on reserving additional time as needed.

### Deliverables

__Proposal:__ 
Provide an outline of your project direction and the names of associated team members. 
The outline should have enough detail so that staff can determine if it meets the minimum expectations, or if it goes too far to be reasonable by the deadline. Please include a general description of a project, and list of key technologies/libraries you plan on using (e.g. React, Three.js, Svelte, TypeScript etc.). Name the file proposal.md and submit a pull request.
Submit a PR to turn it in by Monday, September 27th at11:59 PM. Only one pull request is required per team.

There are no other scheduled checkpoints for your project. 

#### Turning in Your Outline / Project
Submit a second PR on the final project repo to turn in your app and code. Again, only one pull request per team.

Deploy your app, in the form of a webpage, to Glitch/Heroku/Digital Ocean or some other service; it is critical that the application functions correctly wherever you post it.

The README for your second pull request doesn’t need to be a formal report, but it should contain:

1. A brief description of what you created, and a link to the project itself (two paragraphs of text)
2. Any additional instructions that might be needed to fully use your project (login information etc.)
3. An outline of the technologies you used and how you used them.
4. What challenges you faced in completing the project.
5. What each group member was responsible for designing / developing.
6. A link to your project video.

Think of 1,3, and 4 in particular in a similar vein to the design / tech achievements for A1—A4… make a case for why what you did was challenging and why your implementation deserves a grade of 100%.

## FAQs

- **Can I use XYZ framework?** You can use any web-based frameworks or tools available, but for your server programming you need to use Node.js. Your client-side scripting language should be either JavaScript or TypeScript.


# Mental Health and Suicide Data Final Project

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
npm install -g yarn
```

(Yarn is just an npm replacement that improves the package management, and makes installing new packages faster. You can read more about it [on their website](https://yarnpkg.com/getting-started/usage))

To run the frontend:
```
cd frontend
yarn install // only the first time to install the dependancies
yarn start // starts the react dev server
```

To run the backend
```
cd backend
yarn install // only the first time to install the dependancies
yarn start // starts the react dev server
```
If you update the backend, you will have to stop the server and rerun it. This is only neccessary when you change server.js, the actual frontend pages get served on their own.

## Technologies We Used
### Frontend
- React
- Typescript
- Data visualizations
  - D3.js
  - Nivo
  - R

### Backend
- Node w/ Express server
    - Javascript server
- MongoDB for data storage
- Yarn

## Challenges Faced

## Group Member Contributions
### Alan Healy
### Alex Kinley
### Niko Pelletier
### Jyalu Wu