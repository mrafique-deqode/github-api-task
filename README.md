# Task Details

Your team is working on an app that will help recruiters review candidates github
information. You are assigned to work on one feature of the app - to display a list of
repos belonging to a particular GitHub handle, through APIs.
Using: NodeJs, Any frontend framework/library, Any database.
Review GitHub’s API documentation (https://docs.github.com/en/rest/overview).
NodeJS will get data from these APIs and insert it in the database, based on the
below requirement.
NOTE: Direct request from UI to Github is not allowed.
Create an app and push it to GitHub. The app should show two views on UI.
Requirements:
1. View 1: The user must be able to search for any GitHub repos handle,
through the text field on UI. The search must trigger a call to the backend then
to GitHub’s API. The repos associated with that handle must be displayed on
the UI. You must display the repo name, owner name, description, stars
count, and hyperlink to the repo URL.
2. View 2: The user must be able to search for any user with the exact name. If
not found, show proper error on UI else, insert the information in the back-end
database, and use that information for subsequent APIs request. The
application should only make one call to github and return from the database
on subsequent requests for the same user. You must show the user’s name,
image (on click of that image will navigate to their github), followers and
following count, the number of repos and member since date.

# Github API
An application for fetching details of any Github handle.
In this project we have used following dependencies.

- [x] node v17.3.0
- [x] express
- [x] react v16.13.0
- [x] cors
- [x] axios
- [x] eslint-config-prettier
- [x] sequelize
- [x] jest
- [x] body-parser
- [x] pg
- [x] pg-hstore
- [x] mysql2
- [x] bootstrap

## Author

- [@mrafique-deqode](https://www.github.com/mrafique-deqode)


## Installation
To start the application run the below command

```bash
docker-compose up
```

## Endpoints
### Get user repositories

```http

GET /api/github/view1?handle={mrafique-deqode}

```

| Parameter | Type | Description |
| :-------- | :------- | :------------------------------- |
| `user` | `string` | **Required**. Github user handle |

![Screenshot for the above endpoint](https://user-images.githubusercontent.com/92288952/148415076-d48634b0-b956-4c86-a1f5-710e3a425b68.png)

### Get user details

```http

GET /api/github/view2?handle={mrafique-deqode}

```

| Parameter | Type | Description |
| :-------- | :------- | :------------------------------------------ |
| `user` | `string` | **Required**. Github username to fetch repo |


## Improvements

- Added pagination.
- Added docker
- More features can be added