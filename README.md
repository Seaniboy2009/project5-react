# As advertised project

## 1.Purpose of the project:
- The purpose of this project is to create a react application with a endpoint API.
- The applications main purpose is for creating blogs/posts for voting on a product, you can upload the products advert image and then its actual image, users can then vote if its alike the advert or not alike.

## 2.User stories:
- as a user i can navigate all aspects of the web app
- as a user i can create an account
- as a user i can create a post
- as a user i can update a post
- as a user i can delete a post
- as a user i can view other posts
- as a user i can view my posts
- as a user i can like a post
- as a user i can unlike a post
- as a user i can expore all posts
- as a user i can search posts
- as a user i can follow others
- as a user i can comment on a post
- as a user i can read others comments
- as a user i can vote/unvote on a post

## 3.Features:
- User features
    - Full navigation for all site functions
    - Ability to create an account
    - Ability to sign in and out
    - Ability to create/update/delete a post
    - Can view all posts on the app
    - Can search posts for keywords
    - Can follow and unfollow a post
    - Can vote on a post if its alike or not alike, can also unvote
    - Can comment on a post
    - Can view other users profiles
    - Can follow other users
- React features
    - Use of context for the current user this allows the current user to be passed down to each child in the dom, this is used in the navbar as well as the posts to get the owner and name

    - User context return

    ![Header](https://res.cloudinary.com/dgj9rjuka/image/upload/v1681207801/user_context_gfehrg.png)

    - User context being used

    ![Header](https://res.cloudinary.com/dgj9rjuka/image/upload/v1681207800/user_context_used_tpsojp.png)

    - Current user being used to eather display logged in or logged out links.

    ![Header](https://res.cloudinary.com/dgj9rjuka/image/upload/v1681207943/user_context_nav_vcipiw.png)

    - use of the useState for getting and setting the state, such as postDetail.js for storing the post and setting the posts from the axios get request

    ![Header](https://res.cloudinary.com/dgj9rjuka/image/upload/v1681207801/usestate_post_detail_shreum.png)

## 4.Future features:
- Have a top liked or top voted
- Have a most voted post show for all users
- ability to sign in with google account
## 5.Typography and color scheme:
- Main colors are blue/purple with green highlights
## 6.Wireframes:
## 7.Technology:
- Frameworks
    - React is the main framework [React](https://react.dev/)
    - Bootstrap for the HTML and CSS and some components [React Bootstrap](https://react-bootstrap.github.io/)
- API
    - The API is hosted https://project-5-api.herokuapp.com and was built using Django rest
## 8.Testing:
- Agile
    - Agile development of implementing small code blocks and then refactoring the code for better readability
    - Agile lifecycle for removing not needed functions and adding extra, updating the React app and the backend with any changes

- Code validation
    - CSS validation [CSS](https://jigsaw.w3.org/css-validator/validator)
    - HTML validation [HTML](https://validator.w3.org/)
    - Javascript validation using [Javascript](https://validatejavascript.com/)
    - Spellchecker [Online Spellchecker](https://www.online-spellcheck.com/)

- Development
    - Testing application on local enviroment npm start Runs the app in the development mode [http://localhost:3000](http://localhost:3000)
    - Deployment to heroku and testing on the live enviroment [project5-react](https://project5-react.herokuapp.com/)

- Automation testing
    - 
## 9.Deployment:
- Heroku
    - Deployment from heroku involved signing up to the site, click create app.
    - once done i then clicked on the deploy tab linked to my github, selected the main branch then deployed, i set this to automatic deploys so when ever i made a change it would do it. New app > settings > config var > build packs > deploy
   
- Gitpod
   - Deployment from gitpod to github was adding the files for commit by typing git add then . (git add .) this would then add all of the updated/changed files for push to github this can be checked by using git status. a commit message is then needed for this to be pushed to github (git commit -m "Message in here") once that has been done you can then do a git push to send all the files to github

## 10.Credits: