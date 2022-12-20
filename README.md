# Show and Tell Blog

Show and Tell is a single page blog application using Ruby on Rails and Active Record as backend to support a React frontend.

## Usage
The vision for this project was creating a space to show and tell whatever is of interest in the form of writing and photography.  There are five links of a Login, Signup, Posts, Publish, and Logout.

The posts include associations of a category and user post comments.  Full CRUD is on the post model.  Implementation of password protection and authentication, validations and error handling.

This project is still in development.  In the future, there will be more specific types of categories or the option to create your own.  There will also be the option to favorite and like posts.  Google API maps to showcase location of post.

## Installation
Clone this repository by using git@github.com/sendit28/scf-capstone
```console
$ git clone git@github.com:sendi28/scf-capstone.git
```
### Backend Setup

`bundle install` to install the gems.

You can start your server with:

```console
$ rails s
```

This will run your server on port
[http://localhost:3000](http://localhost:3000).

Ruby Version 2.7.4
```console
rvm install 2.7.4 --default
```
install latest versions of bundler and rails:
```console
gem install bundler
gem install rails
```
Node version 16.x.x
```console
nvm install 16
nvm use 16
nvm alias default 16
```
####Database
Install Postgresql

```console
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```
Postgres service:
Windows
```console
sudo service postgresql start
```
Mac
```console
brew services start postgresql
```

### Deployment
Render


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### License
The project is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

### Author
https://github.com/sendit28



