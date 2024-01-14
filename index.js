import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const yourAPIKey = "1";

app.use(express.static("public"));
app.use(cors());

app.get("/", async (req, res) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          apiKey: yourAPIKey,
        },
      });
      const result = response.data;
      console.log(result);
// These 2 arrays are used to separate the measurements and ingredients properties from the JSON
// and make life easier when making the for loop and if statements in the index.ejs file.
      let strMeasure = [
        result.drinks[0].strMeasure1,
        result.drinks[0].strMeasure2,
        result.drinks[0].strMeasure3,
        result.drinks[0].strMeasure4,
        result.drinks[0].strMeasure5,
        result.drinks[0].strMeasure6,
        result.drinks[0].strMeasure7,
        result.drinks[0].strMeasure8,
        result.drinks[0].strMeasure9,
        result.drinks[0].strMeasure10,
        result.drinks[0].strMeasure11,
        result.drinks[0].strMeasure12,
        result.drinks[0].strMeasure13,
        result.drinks[0].strMeasure14,
        result.drinks[0].strMeasure15];

      let strIngredient = [
        result.drinks[0].strIngredient1,
        result.drinks[0].strIngredient2,
        result.drinks[0].strIngredient3,
        result.drinks[0].strIngredient4,
        result.drinks[0].strIngredient5,
        result.drinks[0].strIngredient6,
        result.drinks[0].strIngredient7,
        result.drinks[0].strIngredient8,
        result.drinks[0].strIngredient9,
        result.drinks[0].strIngredient10,
        result.drinks[0].strIngredient11,
        result.drinks[0].strIngredient12,
        result.drinks[0].strIngredient13,
        result.drinks[0].strIngredient14,
        result.drinks[0].strIngredient15];

      res.render("index.ejs", {
        data: result,
        measurements: strMeasure,
        ingredients: strIngredient
      });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});