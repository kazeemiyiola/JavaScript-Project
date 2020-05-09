
// VIEW FOOTBAL TABLE
//NEW COLUMN ADDED TO THE BUNDSELIGA DISPLAYED TABLE
//TEST CASE VALIDATE NEW COLUMN
// CONDITION, CHECK CURRENT DOMAIN
//IF DOMAIN IS DE, CONTINUE EXECUTION
// ELSE END

let countryCode;

switch (countryCode) {
    case 'FR':
        console.log("https://fr.yahoo.com/");
        break;
    case 'DE':
            console.log("https://de.yahoo.com/");
            break;
    case 'UK':
            console.log("https://uk.yahoo.com/");
            break;
    case 'US':
            console.log("https://us.yahoo.com/");
            break;
    case "":
            console.log("https:...//us.yahoo.com/");
            break;
    case undefined:
            console.log("https://us.yahoo.com/");
            break;
    default:
        break;
}

