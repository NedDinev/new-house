function newHome(input) {
  let flowerType = input[0];
  let flowerQuantity = Number(input[1]);
  let budget = Number(input[2]);

  const roses = 5;
  const dahlias = 3.8;
  const tulips = 2.8;
  const narcissus = 3;
  const gladiolus = 2.5;

  let finalPrice;

  switch (flowerType) {
    case "Roses":
      finalPrice = roses * flowerQuantity;
      if (flowerQuantity > 80) {
        finalPrice -= finalPrice * 0.1;
      }
      break;
    case "Dahlias":
      finalPrice = dahlias * flowerQuantity;
      if (flowerQuantity > 90) {
        finalPrice -= finalPrice * 0.15;
      }
      break;
    case "Tulips":
      finalPrice = tulips * flowerQuantity;
      if (flowerQuantity > 80) {
        finalPrice -= finalPrice * 0.15;
      }
      break;
    case "Narcissus":
      finalPrice = narcissus * flowerQuantity;
      if (flowerQuantity < 120) {
        finalPrice += finalPrice * 0.15;
      }
      break;
    case "Gladiolus":
      finalPrice = gladiolus * flowerQuantity;
      if (flowerQuantity < 80) {
        finalPrice += finalPrice * 0.2;
      }
      break;

    default:
      break;
  }

  if (finalPrice <= budget) {
    console.log(
      `Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${(
        budget - finalPrice
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(finalPrice - budget).toFixed(
        2
      )} leva more.`
    );
  }
}

newHome(["Tulips", "88", "260"]);
