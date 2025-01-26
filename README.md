# Gitstare

This is a simple web application that allows you to stare your friends GitHub events.

## Features

- Stare your friends github events and activity
- View your GitHub events
- View your friends' GitHub events

## Technologies

- Angular
- GitHub API
- TailwindCSS

## How to run

1. Clone the repository
2. Run `npm install`
3. Run `ng serve`
4. Navigate to `http://localhost:4200/`

## How to contribute

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request

## How deploy

GitHub

You just need a github repository to host on github and make sure that you pushed the latest code.
Install github pages tool for angular by using, npm install -g angular-cli-ghpages .
Here deploying code in github pages is quite easy, Just need to make sure one thing, when you build your code, use--base-href tag. Build command here will be ng build --prod --base-href https://<username>.github.io/<reponame>/ .
Run angular-cli-ghpages -d dist/<project-name>/ --no-silent to deploy your project. -d tag take the location for build stored, in dist file.
This command will create a new branch gh-pages in your repository and automatically push the dist build in that branch.
Just navigate to https://<username>.github.io/<reponame>/

Thanks for reading
