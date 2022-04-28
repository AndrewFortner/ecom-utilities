import requests
import json
request = 'https://api.spoonacular.com/recipes/random?apiKey=b0bc923f9ec2401e85497ea320d7e614'
r = requests.get(request)
params = {
    'limitLicense': 'subscribe',
    'number': '1'
}
data = r.json()
print(json.dumps(data, indent=4))
# servings = data['recipes'][0]['servings']
# price = data['recipes'][0]['pricePerServing']*servings
# print("Total price: $" + str(price/100))
# print("Price per serving: $" + str(price/servings/100))