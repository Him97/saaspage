
# Notes App
______________________________________________________________________________________

## Summary
Welcome to my first React project!
In this project a notes app will be created - add notes, change notes, delete notes and more.
### General Requirements
Like in any project here at ITC, you will have to follow the ## Milestones and complete them one after another.
We will check your github repository, so please commit and push your code frequently.
After you are done with a certain Milestone, commit with a message that indicates your progress, e.g. “Milestone 3 done”, we will be able to know where you are and how to guide you.

Before you start
- Read the ## Milestones, get a general overview of the project.
- Plan your app, you can even grab a piece of paper to draw your app on and decide on which components you want to apply which functionality.

Extras
- You can use 3rd party libraries if you want, but be careful, they might look easy and time saving, but they can also complicate your process, as you’ll need to learn something new (each library has its own learning curve)
- You can use a UI library if you want (like React Bootstrap, Material UI, Chakra UI), make sure to look for a React version of this library before you use it.
- In this project you don’t get a figma for design, use your imagination, but spend more time on coding the functionalities than in making it pretty (we learn programming, not design)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1Ejdd1Zb)
## Milestone 1
Features:
- Create a basic form with an input (multiline textarea) and a button which allows the user to add notes;
- Every note added should have the note’s text and the note’s created date;
- Display the notes in a grid-like format.
<div align="center"><img src="/notes/src/img/Picture1.gif"></div>

## Milestone 2
Features:
- Display the date in human readable format: Aug 31th 12:30 PM (JavaScript Date object can be used, date library *Moment* is used in this project)
- Add a delete button that when clicked,  prompts the user with a message `“Are you sure you want to delete your note?” (JavaScript's default global` `confirm()` function is used). If the user hits confirm, delete the note from the list 

## Milestone 3
Features:
- Add an optional note title: 
    - in the form add an input for note title
    - In the note, display the title above the text
- The user can add a note without a title (then no title will be displayed in the note), but the note’s text is mandatory.
<div align="center"><img src="/notes/src/img/Picture2.gif"></div>

## Milestone 3.1
Features:
- Add the ability to resize your textarea dynamically when the user types text (add/remove rows)
- Research online how to do it
- Remove the manual resize handler in the bottom right corner of the textarea 
- A library can be used
<div align="center"><img src="/notes/src/img/Picture3.gif"></div>

## Milestone 4
Features:
- Add a popup modal to show a note
- When a note is clicked, the modal should show the note information
- React Bootstrap Modals are used in this project (other options: Material UI, Chakra UI, react-modal)
<div align="center"><img src="/notes/src/img/Picture4.gif"></div>

## Milestone 5
Features:
- In the modal, add the ability to edit the note (title and body)
- Use your original form component in the modal to edit the note, so the form component will be used for your main form and in the modal (re-usable). If needed, update your form component to be usable as a new note form and as an update note form. (It will need to include both functionalities, but you will need to differentiate between them)
- After the note is edited, add an updated date to the note object
- Display the update date in the note in addition to the created date and the note text:
<div align="center"><img src="/notes/src/img/Picture5.gif"></div>

## Milestone 6
Features:
- Deploy the app to Netlify
- Read Netlify documentation on how to deploy.
## Milestone 7
Features
- Save the notes to users storage (localStorage)
- The notes should persist between reloads of the page
- You can use localStorage or localforge instead, which uses indexedDB behind the scenes
## Milestone 8
Features
- Change the delete functionality to archive notes
- Notes that have been archived should move to an archived section
- Add the ability to move notes back to the list
## Milestone 9
Features:
- Add note as a reminder - when creating a note, add a time to be reminded on
- If a note should be reminded, show an alert to the user with the notes content