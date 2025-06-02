# React + Vite

Added Authentication {auth} from Firebase to our app by adding build project from firebase console.it is easy to follow the docs and implement each step.
 *First signUp functionality then proceesed by signIn when the button clicked and based on that authontication is completed and in firebase console authentication page of our project we can see the user details.
 #Then we will get an authentication function from firebase in which it knows any action triggered signIn or signOut.we will get output then based on that we can navigate the user to main page .
 *now created a redux store to manage user state to add or remove userdata from data when sigin and signout. with addUser and removeUser reducers
 *Added Header in layout component added outlet and managed header,then after sigin in onAuthchange() function is cleaned from useEffect i.e unsubcribed it .