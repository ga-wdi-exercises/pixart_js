Ruby On Rails

Ruby on Rails, or simply Rails, is a web application framework written in Ruby under MIT License.
Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.


rails install:  gem install rails -v 4.2.2 | the -v ensures the specified version gets installed

rails new/path: creates rails application with prefixed folders to make our lives easier

rails _4.2.2_ new hello_app:   create application

rails server:

MVC -

MVC follows the archeticural pattern of seperation between and domain and business logic

request response cycle


There is three parts to build a Rails app. The Route, Controller, and View




Cloud 9 - Online terminal for multiple languages and frameworks such as Rails

bundle install - installs all gems

gem version range -

uglifer gem -




rails new app folder info:

File Directory & Purpose
app/                                   	Core application (app) code, including models, views, controllers, and helpers
app/assets                             	Applications assets such as cascading style sheets (CSS), JavaScript files, and images
bin/	                                  Binary executable files
config/	Application configuration
db/	Database files
doc/	Documentation for the application
lib/	Library modules
lib/assets	Library assets such as cascading style sheets (CSS), JavaScript files, and images
log/	Application log files
public/	Data accessible to the public (e.g., via web browsers), such as error pages
bin/rails	A program for generating code, opening console sessions, or starting a local server
test/	Application tests
tmp/	Temporary files
vendor/	Third-party code such as plugins and gems
vendor/assets	Third-party assets such as cascading style sheets (CSS), JavaScript files, and images
README.rdoc	A brief description of the application
Rakefile	Utility tasks available via the rake command
Gemfile	Gem requirements for this app
Gemfile.lock	A list of gems used to ensure that all copies of the app use the same gem versions
config.ru	A configuration file for Rack middleware
.gitignore	Patterns for files that should be ignored by Git
