# DevUp

DevUp for Lonely Devs

A dating application for software engineers


Front-end: REACT with Redux, react router dom for compenent render based on uri.
Containers folder contains all the parent containers for the app.

App has a sticky header on top, is seperated into 3 columns.
Main app contains 3 columns aswell, the left most column contains the 3 tabs for matches, likes, and explore. THe center column contains the main contents.
the last column contains nothing, potentially a chat bar in the future.


Backend: A PostgreSQL database with a table for users, and a table for matches, see /server/models for various query set ups. 
