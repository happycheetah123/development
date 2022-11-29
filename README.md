# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal and value of the application is for users to be able to select from a dashboard of NFL players to add to their fantasy football wishlist. Qualities such as allpro and price affect the value of each player. Users can narrow down their player search by position i.e. "All", "QB", "RB", or "WR". Further, users can turn "All-Pro" on or off. Lastly, users can sort by price. 

### Usability Principles Considered
My application is able to handle any combination of filters, and all filters and sorting methods work together without breaking the page. Users can click the "Reset" button to revert back to the original state without refreshing the page. Users are able to add and remove items from the aggregator section, and the total price updates accordingly.The layout gives users directly informed on the types of players they're choosing from, and which players end up in the cart. The application uses a simple and consistent layout making a strong use of flexboxes for an easy-to-use interface.
### Organization of Components
The application is made up of two components: PlayerItem and NavBar. The NavBar is the header section at the top of the app that contains each of the filter/sort buttons. The NavBar component uses three props: selectPosition, selectAllpro, and sortPrice. These props are passed through and set off event keys to change the filters within the app. The PlayerItem component uses three props: addToTotal, removeFromCart, and isInCart. AddToTotal and removeFromCart are set off when buttons are clicked and either add to or remove from the aggregator. "isInCart" is used for conditional rendering.
### How Data is Passed Down Through Components
Data is passed down through components by the use of props. For example, the PlayerItem component has a prop for inInCart, and depending on its value it will show a different button in the application. Other props such as "addToTotal" trigger event keys when their respective button is clicked, which corresponds to functions in the app.

### How the User Triggers State Changes
The users trigger state changes any time the position, allpro, sort, cart, total, and/or price variables are changed. Changing any of the filters causes a state change. For example, clicking a specific position i.e. "WR" will change the state of the data by filtering it down to only wide receivers. 
