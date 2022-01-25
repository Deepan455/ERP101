The data input format for Product along with its items

{
"product":{
        "product_name": "Cello silky 235",
        "inventory": 200.0,
        "unit": "pcs",
        "desc": "ddd",
        "isVariation": false
    },
"items":[
{
    "quantity": 5.0,
    "product": 2,
    "item": 1
},
{
    "quantity": 5.0,
    "product": 2,
    "item": 2
}
]
}


The data input format for Order along with Products

{
    "order": {
        "order_name": "NewOrder",
        "description": "dkanfk",
        "order_date": "2022-01-10",
        "ordered": false,
        "state": "OD",
        "ordered_by": 1
    },
    "products": [
        {
            "quantity": 3.0,
            "product": 1
        },
        {
            "quantity": 3.0,
            "product": 15
        }
    ]
}