# mahabharath server
Documentation: https://documenter.getpostman.com/view/13233153/UUy39mFy#e8ad726b-98de-47a0-982e-f6b9264892e9

## Development
Dependencies:
  * Docker
  * docker-compose

Starting with docker-compose:
  ```
  cd server
  docker-compose -f docker-compose.dev.yml
  ```

## Deployment
Environment Variables:
  * `PORT`: Port to serve the Api (Heroku will provide this automatically)
  * `TOKEN_KEY`: JWT Secret key, this must be a secret and never shared with anyone
  * `DB_URL`: Use this variable if you are using something like MongoDB Atlas, most suitable for production
  * `DB_USER`: MongoDB User
  * `DB_USER_PWD`: MongoDB User password
  * `DB_HOST`: Host and port to connect to the Mongo Database    

    Attention!!: If you define a `DB_URL`, automatically `DB_USER`, `DB_USER_PWD` and `DB_HOST` will be ignored.

Deployment on Heroku: Follow the [official documentation](https://devcenter.heroku.com/articles/container-registry-and-runtime)
  * `cd server`
  * `heroku container:login`
  * `heroku create` | If you already have an app set, skip this. will return: `$APP_NAME`
  * `heroku stack:set container -a $APP_NAME`
  * `heroku container:push $REPLACE_USER-mahabharath-server -a $APP_NAME`
  * `heroku container:release $REPLACE_USER-mahabharath-server -a $APP_NAME`
  * `heroku open -a $APP_NAME` | Attention, the application will have errors, this happens because you don't have the ENV Variables set, this can be done in the web application, after this is done, you can restart the dyno