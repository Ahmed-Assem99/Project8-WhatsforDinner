var recipeName = document.getElementById("recipeName");
var recipeDesc = document.getElementById("recipeDesc");
var recipeLabel1 = document.getElementById("recipeLabel1");
var recipeLabel2 = document.getElementById("recipeLabel2");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servingQty = document.getElementById("servingQty");

var ratingAvg = document.getElementById("ratingAvg");
var ratingQty = document.getElementById("ratingQty");
var recipeImg = document.getElementById("recipeImg");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructions");
var calories = document.getElementById("calories");
var protein = document.getElementById("protein");
var carbs = document.getElementById("carbs");
var fat = document.getElementById("fat");
var fiber = document.getElementById("fiber");
var sodium = document.getElementById("sodium");
var chefTips= document.getElementById("chefTips")
var warningBox = document.getElementById("warningBox");


var recipesArr = [
  {
    recipeLabel1: "Easy",
    recipeLabel2: "Mediterranean",
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    ratingAvg: 4.4,
    ratingQty: 198,
    recipeImg: "./images/cesar.avif",
    prepTime: "15",
    cookTime: 0,
    servingQty: "2",
    ingredients: [
      "1 head romaine lettuce",
      "Caesar dressing",
      "Croutons",
      "Parmesan cheese, shaved",
      "Anchovies (optional)",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    calories:320,
    protein:12,
    carbs:18,
    fat:22,
    fiber:3,
    sodium:680,
    chefTips:[
        " Use cold, crisp lettuce for best texture",
        "Make homemade croutons for better flavor",
        "Add grilled chicken for a complete meal",
        "Don't dress salad until ready to serve"
    ]
  },
   {
    recipeLabel1: "Easy",
    recipeLabel2: "Italian",
    name: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with a drizzle of balsamic",
    ratingAvg: 4.5,
    ratingQty: 156,
    recipeImg: "./images/caprese.avif",
    prepTime: "10",
    cookTime: 0,
    servingQty: "2",
    ingredients: [
      "3 ripe tomatoes, sliced",
      "Fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Extra virgin olive oil",
      "Balsamic glaze",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Slice tomatoes and mozzarella into even rounds.",
      "Arrange alternating slices of tomato and mozzarella on a plate.",
      "Tuck fresh basil leaves between the slices.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and freshly cracked black pepper.",
      "Serve immediately at room temperature.",
    ],
    calories: 280,
    protein: 14,
    carbs: 9,
    fat: 21,
    fiber: 2,
    sodium: 420,
    chefTips: [
      "Use the ripest tomatoes you can find for best flavor",
      "Let mozzarella come to room temperature before serving",
      "Fresh basil makes a big difference over dried",
      "Good quality olive oil is worth it here",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Italian",
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with pancetta, egg, and parmesan",
    ratingAvg: 4.7,
    ratingQty: 312,
    recipeImg: "./images/carbonara.avif",
    prepTime: "10",
    cookTime: 20,
    servingQty: "4",
    ingredients: [
      "400g spaghetti",
      "200g pancetta, diced",
      "4 large eggs",
      "1 cup parmesan cheese, grated",
      "Black pepper",
      "Salt",
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti until al dente.",
      "While pasta cooks, fry pancetta in a pan until crispy.",
      "Whisk eggs with parmesan cheese and a generous amount of black pepper.",
      "Drain pasta, reserving some pasta water, and add pasta to the pancetta pan off heat.",
      "Quickly stir in the egg mixture, adding pasta water to create a creamy sauce.",
      "Serve immediately topped with extra parmesan and black pepper.",
    ],
    calories: 590,
    protein: 28,
    carbs: 62,
    fat: 24,
    fiber: 3,
    sodium: 780,
    chefTips: [
      "Remove pan from heat before adding eggs to avoid scrambling",
      "Use pasta water gradually to control sauce consistency",
      "Freshly grated parmesan melts better than pre-grated",
      "Work quickly once eggs are added for the creamiest texture",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Indian",
    name: "Chicken Curry",
    description: "Rich and aromatic curry simmered in spiced tomato sauce",
    ratingAvg: 4.6,
    ratingQty: 267,
    recipeImg: "./images/curry.avif",
    prepTime: "20",
    cookTime: 35,
    servingQty: "4",
    ingredients: [
      "500g chicken thighs, cubed",
      "2 onions, diced",
      "3 tomatoes, chopped",
      "Garlic and ginger paste",
      "Curry powder and garam masala",
      "Coconut milk",
    ],
    instructions: [
      "Saute onions until golden, then add garlic and ginger paste.",
      "Stir in curry powder and garam masala, cooking until fragrant.",
      "Add chopped tomatoes and cook down into a thick sauce.",
      "Add chicken pieces and simmer until cooked through.",
      "Stir in coconut milk and simmer until sauce thickens.",
      "Serve hot with rice or naan bread.",
    ],
    calories: 480,
    protein: 32,
    carbs: 18,
    fat: 30,
    fiber: 4,
    sodium: 640,
    chefTips: [
      "Toast whole spices first for deeper flavor",
      "Let the curry rest 10 minutes before serving to develop flavor",
      "Adjust spice level with fresh chili to taste",
      "Curry tastes even better the next day",
    ],
  },
  {
    recipeLabel1: "Hard",
    recipeLabel2: "Italian",
    name: "Classic Lasagna",
    description: "Layered pasta with rich meat sauce and melted cheese",
    ratingAvg: 4.8,
    ratingQty: 389,
    recipeImg: "./images/lasagna.avif",
    prepTime: "30",
    cookTime: 60,
    servingQty: "6",
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "Marinara sauce",
      "Ricotta cheese",
      "Mozzarella cheese, shredded",
      "Parmesan cheese",
    ],
    instructions: [
      "Cook ground beef until browned, then mix with marinara sauce.",
      "Boil lasagna sheets until just tender.",
      "Layer meat sauce, lasagna sheets, and ricotta in a baking dish.",
      "Repeat layers, finishing with a generous layer of mozzarella on top.",
      "Cover with foil and bake at 190°C for 40 minutes.",
      "Remove foil and bake 15 more minutes until golden and bubbly.",
    ],
    calories: 620,
    protein: 36,
    carbs: 48,
    fat: 32,
    fiber: 4,
    sodium: 890,
    chefTips: [
      "Let lasagna rest 10-15 minutes before cutting for clean slices",
      "Don't overcook the sheets since they'll finish cooking in the oven",
      "Use a mix of ricotta and cottage cheese for extra creaminess",
      "Make it a day ahead - flavors deepen overnight",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Mediterranean",
    name: "Chicken Masala",
    description: "Tender chicken in a creamy, spiced tomato sauce",
    ratingAvg: 4.5,
    ratingQty: 234,
    recipeImg: "./images/masala.avif",
    prepTime: "20",
    cookTime: 30,
    servingQty: "4",
    ingredients: [
      "500g chicken breast, cubed",
      "Yogurt for marinade",
      "Tomato puree",
      "Heavy cream",
      "Garam masala and paprika",
      "Fresh cilantro",
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for at least 30 minutes.",
      "Sear marinated chicken in a hot pan until browned.",
      "Remove chicken and saute onions and garlic in the same pan.",
      "Add tomato puree and spices, simmering into a thick sauce.",
      "Return chicken to the pan and stir in heavy cream.",
      "Simmer until sauce thickens and garnish with fresh cilantro.",
    ],
    calories: 520,
    protein: 34,
    carbs: 14,
    fat: 36,
    fiber: 2,
    sodium: 710,
    chefTips: [
      "Marinate chicken overnight for maximum flavor",
      "Don't skip searing the chicken - it builds flavor depth",
      "Balance the cream with a squeeze of lemon at the end",
      "Fresh garam masala makes a noticeable difference",
    ],
  },
  {
    recipeLabel1: "Hard",
    recipeLabel2: "Mediterranean",
    name: "Moussaka",
    description: "Layered eggplant and spiced meat casserole with bechamel",
    ratingAvg: 4.6,
    ratingQty: 178,
    recipeImg: "./images/moussaka.avif",
    prepTime: "35",
    cookTime: 75,
    servingQty: "6",
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb or beef",
      "Tomato sauce",
      "Bechamel sauce",
      "Cinnamon and nutmeg",
      "Parmesan cheese",
    ],
    instructions: [
      "Salt eggplant slices and let sit 20 minutes, then pat dry and fry until golden.",
      "Cook ground meat with onions, tomato sauce, and warm spices like cinnamon.",
      "Prepare a smooth bechamel sauce on the stovetop.",
      "Layer eggplant and meat sauce alternately in a baking dish.",
      "Top with bechamel sauce and a sprinkle of parmesan.",
      "Bake at 180°C for about 45 minutes until golden on top.",
    ],
    calories: 540,
    protein: 26,
    carbs: 28,
    fat: 36,
    fiber: 6,
    sodium: 650,
    chefTips: [
      "Salting eggplant removes bitterness and excess moisture",
      "Let moussaka rest 15 minutes before slicing",
      "A pinch of cinnamon in the meat sauce is traditional and essential",
      "Can be assembled ahead and baked just before serving",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Thai",
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, egg, and tamarind sauce",
    ratingAvg: 4.7,
    ratingQty: 298,
    recipeImg: "./images/pad.avif",
    prepTime: "20",
    cookTime: 15,
    servingQty: "3",
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "Tamarind paste and fish sauce",
      "Bean sprouts",
      "Crushed peanuts and lime",
    ],
    instructions: [
      "Soak rice noodles in warm water until softened.",
      "Heat oil in a wok and scramble eggs, then push to the side.",
      "Add shrimp and cook until pink.",
      "Add drained noodles along with tamarind paste and fish sauce.",
      "Toss everything together, adding bean sprouts near the end.",
      "Serve topped with crushed peanuts, lime wedges, and chili flakes.",
    ],
    calories: 430,
    protein: 24,
    carbs: 52,
    fat: 14,
    fiber: 3,
    sodium: 820,
    chefTips: [
      "Soak noodles just until pliable - they'll finish cooking in the wok",
      "Have all ingredients prepped before you start, since stir-frying is fast",
      "Balance sweet, sour, and salty flavors to taste",
      "Use a very hot wok for the best texture",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "Italian",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
    ratingAvg: 4.6,
    ratingQty: 405,
    recipeImg: "./images/pizza.avif",
    prepTime: "20",
    cookTime: 15,
    servingQty: "4",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "Olive oil",
      "Salt",
    ],
    instructions: [
      "Preheat oven to the highest setting with a pizza stone if available.",
      "Roll out pizza dough into a thin circle.",
      "Spread a thin layer of tomato sauce over the dough.",
      "Add torn pieces of fresh mozzarella evenly across the top.",
      "Bake until crust is golden and cheese is bubbling, about 10-12 minutes.",
      "Top with fresh basil leaves and a drizzle of olive oil before serving.",
    ],
    calories: 560,
    protein: 22,
    carbs: 68,
    fat: 20,
    fiber: 3,
    sodium: 780,
    chefTips: [
      "A very hot oven is key for a crisp crust",
      "Don't overload with sauce or toppings - keep it light",
      "Add basil after baking so it stays fresh and vibrant",
      "Let dough come to room temperature before stretching",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "American",
    name: "Roasted Pork Tenderloin",
    description: "Juicy roasted pork with a savory herb crust",
    ratingAvg: 4.5,
    ratingQty: 187,
    recipeImg: "./images/pork.avif",
    prepTime: "15",
    cookTime: 30,
    servingQty: "4",
    ingredients: [
      "600g pork tenderloin",
      "Garlic, minced",
      "Fresh rosemary and thyme",
      "Dijon mustard",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Preheat oven to 200°C.",
      "Rub pork tenderloin with olive oil, garlic, and herbs.",
      "Sear pork on all sides in a hot oven-safe pan.",
      "Brush with Dijon mustard and transfer pan to the oven.",
      "Roast until internal temperature reaches 63°C, about 15-20 minutes.",
      "Rest for 5 minutes before slicing and serving.",
    ],
    calories: 380,
    protein: 42,
    carbs: 4,
    fat: 20,
    fiber: 0,
    sodium: 520,
    chefTips: [
      "Use a meat thermometer to avoid overcooking",
      "Resting the meat keeps it juicy when sliced",
      "Searing first locks in flavor before roasting",
      "Pair with roasted vegetables for a complete meal",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "Mediterranean",
    name: "Quinoa Salad",
    description: "Light and healthy salad with quinoa, vegetables, and lemon dressing",
    ratingAvg: 4.4,
    ratingQty: 142,
    recipeImg: "./images/quinoa.avif",
    prepTime: "15",
    cookTime: 15,
    servingQty: "3",
    ingredients: [
      "1 cup quinoa",
      "Cucumber, diced",
      "Cherry tomatoes, halved",
      "Feta cheese",
      "Lemon juice and olive oil",
      "Fresh parsley",
    ],
    instructions: [
      "Rinse quinoa and cook according to package instructions, then cool.",
      "Dice cucumber and halve cherry tomatoes.",
      "Combine cooled quinoa with vegetables in a large bowl.",
      "Crumble feta cheese over the top.",
      "Whisk lemon juice with olive oil and drizzle over the salad.",
      "Toss gently and garnish with fresh parsley before serving.",
    ],
    calories: 310,
    protein: 11,
    carbs: 38,
    fat: 14,
    fiber: 6,
    sodium: 420,
    chefTips: [
      "Rinse quinoa well before cooking to remove bitterness",
      "Let quinoa cool completely before mixing for the best texture",
      "Add dressing just before serving to keep vegetables crisp",
      "Great made ahead - flavors improve after a few hours",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "American",
    name: "Grilled Salmon",
    description: "Perfectly grilled salmon with a lemon herb glaze",
    ratingAvg: 4.7,
    ratingQty: 256,
    recipeImg: "./images/salmon.avif",
    prepTime: "10",
    cookTime: 15,
    servingQty: "2",
    ingredients: [
      "2 salmon fillets",
      "Lemon juice and zest",
      "Fresh dill",
      "Garlic, minced",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Preheat grill or pan to medium-high heat.",
      "Season salmon fillets with salt, pepper, and minced garlic.",
      "Brush with olive oil and place skin-side down on the grill.",
      "Cook for 4-5 minutes per side until fish flakes easily.",
      "Whisk lemon juice, zest, and fresh dill for a quick glaze.",
      "Drizzle glaze over salmon before serving.",
    ],
    calories: 360,
    protein: 34,
    carbs: 2,
    fat: 22,
    fiber: 0,
    sodium: 380,
    chefTips: [
      "Don't flip salmon too early - let it release naturally from the grill",
      "Skin-side down first helps keep the fillet intact",
      "Fresh dill adds brightness that dried can't match",
      "Salmon is done when it flakes easily with a fork",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "Asian",
    name: "Garlic Butter Shrimp",
    description: "Quick and flavorful shrimp sauteed in garlic butter sauce",
    ratingAvg: 4.6,
    ratingQty: 213,
    recipeImg: "./images/shrimp.avif",
    prepTime: "10",
    cookTime: 10,
    servingQty: "3",
    ingredients: [
      "500g shrimp, peeled and deveined",
      "4 cloves garlic, minced",
      "Butter",
      "Lemon juice",
      "Fresh parsley",
      "Red pepper flakes",
    ],
    instructions: [
      "Pat shrimp dry and season with salt and pepper.",
      "Melt butter in a pan over medium-high heat.",
      "Add garlic and saute until fragrant, about 30 seconds.",
      "Add shrimp and cook for 2-3 minutes per side until pink.",
      "Stir in lemon juice and red pepper flakes.",
      "Garnish with fresh parsley and serve immediately.",
    ],
    calories: 260,
    protein: 28,
    carbs: 3,
    fat: 15,
    fiber: 0,
    sodium: 540,
    chefTips: [
      "Don't overcook shrimp - they turn rubbery quickly",
      "Pat shrimp dry for better searing",
      "Serve over rice or pasta to soak up the garlic butter sauce",
      "Add a splash of white wine for extra depth",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "American",
    name: "Vegetable Soup",
    description: "Hearty and comforting vegetable soup in a savory broth",
    ratingAvg: 4.3,
    ratingQty: 165,
    recipeImg: "./images/soup.avif",
    prepTime: "15",
    cookTime: 35,
    servingQty: "4",
    ingredients: [
      "Carrots, celery, and onion",
      "Vegetable broth",
      "Diced tomatoes",
      "Potatoes, cubed",
      "Garlic",
      "Fresh thyme and bay leaf",
    ],
    instructions: [
      "Saute onion, carrots, and celery until softened.",
      "Add garlic and cook until fragrant.",
      "Pour in vegetable broth and diced tomatoes.",
      "Add cubed potatoes, thyme, and bay leaf.",
      "Simmer until vegetables are tender, about 25 minutes.",
      "Season with salt and pepper and serve hot.",
    ],
    calories: 180,
    protein: 5,
    carbs: 32,
    fat: 4,
    fiber: 6,
    sodium: 690,
    chefTips: [
      "Let the soup simmer low and slow for deeper flavor",
      "Remove bay leaf before serving",
      "Add pasta or rice to make it heartier",
      "Tastes even better the next day",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "Asian",
    name: "Vegetable Stir-Fry",
    description: "Colorful mixed vegetables tossed in a savory soy-ginger sauce",
    ratingAvg: 4.4,
    ratingQty: 189,
    recipeImg: "./images/stir-fry.avif",
    prepTime: "15",
    cookTime: 10,
    servingQty: "3",
    ingredients: [
      "Broccoli, bell peppers, carrots",
      "Soy sauce",
      "Fresh ginger and garlic",
      "Sesame oil",
      "Cornstarch",
      "Green onions",
    ],
    instructions: [
      "Chop all vegetables into bite-sized, even pieces.",
      "Heat oil in a wok over high heat.",
      "Add garlic and ginger, stirring quickly to avoid burning.",
      "Add vegetables in order of cook time, starting with the firmest.",
      "Whisk soy sauce with a little cornstarch and add to the wok.",
      "Toss until sauce thickens and vegetables are crisp-tender, then top with green onions.",
    ],
    calories: 220,
    protein: 7,
    carbs: 26,
    fat: 10,
    fiber: 5,
    sodium: 710,
    chefTips: [
      "Cut vegetables uniformly for even cooking",
      "Keep the heat high and don't overcrowd the wok",
      "Add sauce at the end so vegetables stay crisp",
      "Prep all ingredients before turning on the stove",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Mexican",
    name: "Chicken Tacos",
    description: "Seasoned chicken tacos with fresh toppings and lime",
    ratingAvg: 4.6,
    ratingQty: 278,
    recipeImg: "./images/tacos.avif",
    prepTime: "15",
    cookTime: 15,
    servingQty: "4",
    ingredients: [
      "500g chicken breast, sliced",
      "Taco seasoning",
      "Corn tortillas",
      "Diced onion and cilantro",
      "Lime wedges",
      "Salsa",
    ],
    instructions: [
      "Season sliced chicken with taco seasoning.",
      "Heat oil in a pan and cook chicken until browned and cooked through.",
      "Warm tortillas on a dry skillet or open flame.",
      "Fill tortillas with cooked chicken.",
      "Top with diced onion, fresh cilantro, and salsa.",
      "Serve with lime wedges on the side.",
    ],
    calories: 410,
    protein: 30,
    carbs: 34,
    fat: 16,
    fiber: 4,
    sodium: 680,
    chefTips: [
      "Warm tortillas directly over a flame for a smoky flavor",
      "Don't overcrowd the pan when cooking chicken",
      "Let chicken rest a few minutes before slicing",
      "Fresh lime juice makes a big difference",
    ],
  },
  {
    recipeLabel1: "Medium",
    recipeLabel2: "Asian",
    name: "Teriyaki Chicken",
    description: "Glazed chicken in a sweet and savory teriyaki sauce",
    ratingAvg: 4.5,
    ratingQty: 246,
    recipeImg: "./images/teriyaki.avif",
    prepTime: "15",
    cookTime: 20,
    servingQty: "4",
    ingredients: [
      "500g chicken thighs",
      "Soy sauce",
      "Brown sugar",
      "Garlic and ginger",
      "Rice vinegar",
      "Sesame seeds",
    ],
    instructions: [
      "Whisk together soy sauce, brown sugar, garlic, ginger, and rice vinegar.",
      "Sear chicken thighs in a hot pan until golden on both sides.",
      "Pour teriyaki sauce over chicken and reduce heat.",
      "Simmer, basting chicken occasionally, until sauce thickens and coats the chicken.",
      "Slice chicken and drizzle with remaining sauce.",
      "Garnish with sesame seeds and serve with steamed rice.",
    ],
    calories: 440,
    protein: 32,
    carbs: 24,
    fat: 22,
    fiber: 1,
    sodium: 890,
    chefTips: [
      "Let the sauce reduce slowly for a proper glaze consistency",
      "Baste chicken frequently for even flavor coating",
      "Rest chicken briefly before slicing to keep it juicy",
      "Toast sesame seeds for extra aroma before garnishing",
    ],
  },
  {
    recipeLabel1: "Easy",
    recipeLabel2: "American",
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    ratingAvg: 4.6,
    ratingQty: 421,
    recipeImg: "./images/burger.avif",
    prepTime: "15",
    cookTime: 20,
    servingQty: "4",
    ingredients: [
      "2 burger buns",
      "2 beef patties",
      "Cheddar cheese",
      "Lettuce",
      "Tomato",
      "Onion",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    calories:650,
    protein:38,
    carbs:42,
    fat:35,
    fiber:2,
    sodium:920,
    chefTips:[
        "Don't press down on burgers while cooking - keeps them juicy",
        "Make indent in center to prevent burger from puffing up",
        "Let patties rest for 2-3 minutes before serving",
        "Toast buns for better texture and flavor"
    ]
  },
];

function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipesArr.length);

  recipeName.innerHTML = recipesArr[randomIndex].name;
  recipeDesc.innerHTML = recipesArr[randomIndex].description;
  prepTime.innerHTML = recipesArr[randomIndex].prepTime;
  cookTime.innerHTML = recipesArr[randomIndex].cookTime;
  if (recipesArr[randomIndex].cookTime >= 45) {
    warningBox.style.display = "flex";
} else {
    warningBox.style.display = "none";
}
  servingQty.innerHTML = recipesArr[randomIndex].servingQty;

  recipeLabel1.innerHTML = recipesArr[randomIndex].recipeLabel1;
  recipeLabel2.innerHTML = recipesArr[randomIndex].recipeLabel2;

  ratingAvg.innerHTML = recipesArr[randomIndex].ratingAvg;
  ratingQty.innerHTML = recipesArr[randomIndex].ratingQty;
  recipeImg.src = recipesArr[randomIndex].recipeImg;

  ingredientsList.innerHTML = "";

  for (var i = 0; i < recipesArr[randomIndex].ingredients.length; i++) {
    ingredientsList.innerHTML += `
    <li class="step-item mb-2">
      <span class="text-white fw-bold me-2">${i + 1}</span>
      ${recipesArr[randomIndex].ingredients[i]}
    </li>
  `;
  }

  instructionsList.innerHTML = "";

  for (var i = 0; i < recipesArr[randomIndex].instructions.length; i++) {
    instructionsList.innerHTML += `
                            <div class="step-item d-flex align-items-center mb-3">
                      <span
                        class="step-number text-center text-white fw-bold me-2"
                        >${i + 1}</span
                      >
                      <div>
${recipesArr[randomIndex].instructions[i]}
                      </div>
                    </div>
        `;
  }
calories.innerHTML = recipesArr[randomIndex].calories;
protein.innerHTML = recipesArr[randomIndex].protein;
carbs.innerHTML = recipesArr[randomIndex].carbs;
fat.innerHTML = recipesArr[randomIndex].fat;
fiber.innerHTML = recipesArr[randomIndex].fiber;
sodium.innerHTML = recipesArr[randomIndex].sodium;

chefTips.innerHTML="";

for(var i =0 ; i<recipesArr[randomIndex].chefTips.length;i++){
    chefTips.innerHTML+=`
                          <li class="step-item mb-2">
                        <span class="rounded-circle mx-2"
                          ><i
                            class="fa-solid fa-check fa-2xs"
                            style="color: rgb(255, 255, 255)"
                          ></i
                        ></span>
                        ${recipesArr[randomIndex].chefTips[i]}
                      </li>
    `
}
}
