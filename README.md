My Drumless songs
1. Project description:
✏
 Access to the drummless songs and tablatures of the tracks I can play.

A Backend team has asked me to develop the Frontend of an application of my drumless songs with access to the music and the tablatures. We don't have a Rest Api so we will use Json to achieve the goal.

2. The backend team requests me:
Develop a dynamic interface in vanilla Javascript. With good development and layout practices.
It uses the Faker Api server.
Add images to your songs.
3. Full-stack developer:
Esther De Luque https://github.com/Uxoa
4. Project Demo
For live version of the project, run the code with Live Server in Visual Studio Code.

5. Initial Designs (Screenshots)
mydrumless.png

6. Stacks
HTML & CSS3.
javaScript
Json.
nodeJS
NPM
JSON server
7. How to install the project
Required:
Node.js
Composer installed
To install project:
For live version of the project, run the code with Live Server in Visual Studio Code.
In the GitHub repository https://github.com/EstherAma/MISLIBROS, go to the CODE tab and copy the HTTPS link.
In Visual Studio Code terminal, clone the contents of this project with thegit clonecommand followed by the HTTPSlink copied to the repository.
Download Node JS at https://nodejs.org/es/download/. The version used in this project has been: V18.12.1 (includes npm 8.19.2).
It is important to install LTS, which are the stable versions.
To find out which version is installed, open Visual Studio Code and run node -v command.
This will tell us which version is installed.
From here we begin to create the folder:
Open the Visual Studio Code, to install the neccesary dependencies, and in the terminal run and install:
Install dependencies: npm installcommand.
Start the server: json-server(npm install -g json-server command).
To run the server follow these steps:
With the ls command, we see which folder we are in.
We change to the /json folder, in case we are not in this folder, with the command cd json/
I check that I am in the correct folder: misLibros.json
From here, I launch my server, using the command:json-server --watch misLibros.json
8. Methodology:
Solo Programming.
9. Next Steps:

Add a form data to write dynamically the canciones.json