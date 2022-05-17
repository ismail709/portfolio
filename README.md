
## About the project

### This is a portfolio made with Next.js as a frontend framework and Sanity as a CMS to manage the content on the website.
### The content you can manage on the website:
- Projects: it consists of a title and some screenshots ( the first one is displayed on the project card )
- Articles: a title and a body
- Labs: like articles but you can add an icon to show the language used in the code

## development phase

to start dev server:
```
npm run dev
```

to start sanity studio
```
npm run sanity
```

## Deployment Steps (Vercel)

1. Clone the project.

2. Go to portfolio/lib/config.js and change the config to what is suitable for your needs.

3. Go to portfolio/portfolio-studio and deploy the studio using the commands:
```
sanity deploy
```

4. Push everything to your github account ( it's not neccessary to push the studio ).

5. Go to Vercel and connect to your github account.

6. Create a new project and choose the portfolio repo.

7. Add Environment Variables if needed and click Deploy.

8. Add the project's url from Vercel to your CORS settings in Sanity.
