"use strict";
let response = 
[
    {
        "attributes": {
            "color": null,
            "labelVisible": false,
            "name": "Premium"
        },
        "id": "Premium",
        "type": "package"
    },
    {
        "attributes": {
            "color": null,
            "labelVisible": false,
            "name": "Registered"
        },
        "id": "Registered",
        "type": "package"
    },
    {
        "attributes": {
            "name": "Ultra HD"
        },
        "id": "ultra-hd",
        "type": "feature"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "MONTH",
            "postponedDays": 30,
            "price": 7900,
            "currencyDecimalPoints": 2,
            "type": "ONGOING"
        },
        "id": "1",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "YEAR",
            "price": 80000,
            "currencyDecimalPoints": 2,
            "type": "INSTALMENTS",
            "numberOfInstalments": 12
        },
        "id": "8",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "YEAR",
            "price": 10000,
            "currencyDecimalPoints": 2
        },
        "id": "9",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "richTextContent": {
                "blocks": [

                ],
                "entityMap": {

                }
            },
            "richTextHtml": "<h1>Text</h1>"
        },
        "id": "d646335d-db49-40ef-b515-7167b9e79edf",
        "type": "articleBodyRichText"
    }
];
const type = ({type}) => type === "pricePlan";
console.log(response.filter(type)
                    .map(each => each.attributes.currency = 'USD'));

console.log(response.filter(type)
                    .map(each => each.attributes.price)
                    .reduce((acc, cur) => acc + cur));

console.log(response.map(each => each.type));
                   


// Collect items with type "pricePlan" and transform such objects to have atrributes currency as "USD"
// Find out total price of all price plans
// Collect all types available in an array