# Note-Taker-Server

The Note Taking Server is done by developing a back-end service using Express.js. The back-end service will be responsible for managing note data, including saving and retrieving notes, using a JSON file for data persistence.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Installation
  
to install:
1. Express.js. It is a flexible, minimalist web application framework for Node.js, used to build web applications, APIs, and handle HTTP requests in a streamlined and simplified way.

  ```md
  npm i express
  ```

## Technologies Used

This application is built using the following technologies:

- **JavaScript**: Programming language for adding interactivity and dynamic content.
- **NodeJS**: an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.
- **Express**:  flexible, minimalist web application framework for Node.js, used to build web applications, APIs, and handle HTTP requests in a streamlined and simplified way.


## Usage

The user should clone the repository and run 'npm i' to install all dependencies.  

## Features

The application is capable of generating a SVG file for logo design.  It takes user input from the command line and dynamically create the logo based on the questions. It supports a number of shapes including rectangle, square, triangle, circle, ellipse, line, star and the color input can be of color words or hex color code.
there are a number of effects added to the SVG generation including blink, and gradient on the logo shape
Also, for logo text, the effect are skew and rotate, to make the logo generation more multifaceted.

Examples of logo.svg
1.  Basic logo.svg

![Basic Logo](examples/Triangle.svg)

2. Blinking logo.svg

![Basic Logo](examples/Blink.svg)

3. Gradient Logo.svg

![Basic Logo](examples/Gradient.svg)

## Tests

Testing done on:

1. testing on logo text of more than 3 characters
2. testing on logo text of within 3 characters
3. testing on logo valid color word
4. testing on logo invalid color word
5. testing on logo valid hex code (6 digits)
6. testing on logo invalid hex code (6 digits).
7. testing on logo valid hex code (3 digits)
8. testing on logo invalid hex code (3 digits)
9. testing on generating Rectangle.
10. testing on generating Square.
11. testing on generating Circle.
12. testing on generating Ellipse.
13. testing on generating Triangle.
14. testing on generating Star.
15. testing on generating Line.
16. testing on generating Logo matched to questions asked.
17. testing on text effect like skew or rotate
18. testing on shape effect like blink or gradient.



## Resources

Link to Heroku:



Link to GitHub repo:

https://github.com/percivalho/Note-Taker-Server.git




## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits


## Credits and Copyright 
&copy; Copyright 2023 - Present. Percival Ho