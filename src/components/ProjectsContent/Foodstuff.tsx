const Foodstuff = () => {
  return (
    <>
      <img
        src="https://raw.githubusercontent.com/Kasia-Sikora/ShoppingListDemo-UI/master/src/assets/screenshots/foodstuff1.png"
        alt="Foodstuff" />

      <p>Backend code is available at this link: <br /><a href="https://github.com/Kasia-Sikora/ShoppingListDemo" target="_blank" rel="noreferrer">GitHub: FoodStuff Backend</a></p>
      <p>Frontend code is available at this link: <br /><a href="https://github.com/Kasia-Sikora/ShoppingListDemo-UI" target="_blank" rel="noreferrer">GitHub: FoodStuff Frontend</a></p>

      <h4>Description:</h4>
      <p>The foodstuff project was created to learn Spring and Angular.<br />
        The main assumptions were to create a set of personal recipes, from which you can then easily and quickly
        generate a shopping list. The project is still being developed and improved.</p>

      <h4>My goals:</h4>
      <ul>
        <li>Getting familiar with Spring Framework:
          <ul>
            <li>Spring Boot</li>
            <li>JPA</li>
            <li>Hibernate</li>
            <li>Security - JWT</li>
            <li>Testing with Junit</li>
          </ul>
        </li>
        <li>Deepening knowledge about PostgreSQL</li>
        <li>Server support:
          <ul>
            <li>Nginx</li>
            <li>Wildfly</li>
          </ul>
        </li>
        <li>Testing:
          <ul>
            <li>Junit</li>
            <li>Travis</li>
            <li>Codecov</li>
          </ul>
        </li>
      </ul>

      <h4>Main functionalities:</h4>
      <ul>
        <li>Registration and user login with e-mail confirmation</li>
        <li>Searching for products from the database and adding new products</li>
        <li>Add, delete and edit recipes</li>
        <li>Generating shopping lists</li>
      </ul>

      <h4>Plans:</h4>
      <ul>
        <li>Generating a shopping list based on a given number of servings</li>
        <li>Share the list with other users</li>
        <li>Ability to send the list by email</li>
      </ul>
    </>
  )
}

export default Foodstuff
