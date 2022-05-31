import React from 'react'
import JsonData from './products'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.category_level1}</td>
					<td>{info.category_level2}</td>
					<td>{info.category_level3}</td>
				</tr>
			)
		}
	)

	return(
		<div>
Category Level-1
<select>
	<option>---Select---</option>
	<option value='Appliances & Electronics'>Appliances & Electronics</option>
<option value='Bakery, Cakes & Dairy'>Bakery, Cakes & Dairy</option>
<option value='Beauty & Hygiene'>Beauty & Hygiene</option>
<option value='Beverages'>Beverages</option>
<option value='Cleaning & Household'>Cleaning & Household</option>
<option value='Computers & Mobiles'>Computers & Mobiles</option>
<option value='Eggs, Meat & Seafood'>Eggs, Meat & Seafood</option>
<option value='Fruits & Vegetables'>Fruits & Vegetables</option>
<option value='Gourmet & World Food'>Gourmet & World Food</option>
<option value='Grocery & Staples'>Grocery & Staples</option>
<option value='Kitchen, Garden & Pets'>Kitchen, Garden & Pets</option>
<option value='Snacks & Branded Foods'>Snacks & Branded Foods</option>
</select>

&nbsp;&nbsp;&nbsp;&nbsp;
Category Level-2
<select>
	<option>---Select---</option>
	<option value='Home Appliances'>Home Appliances</option>
<option value='Dairy'>Dairy</option>
<option value='Breads & Buns'>Breads & Buns</option>
<option value='Health & Medicine'>Health & Medicine</option>
<option value='Makeup'>Makeup</option>
<option value='Bath & Hand Wash'>Bath & Hand Wash</option>
<option value='Fruit Juices & Drinks'>Fruit Juices & Drinks</option>
<option value='Energy & Soft Drinks'>Energy & Soft Drinks</option>
<option value='Energy & Health Drinks'>Energy & Health Drinks</option>
<option value='Tea & Coffee'>Tea & Coffee</option>
<option value='Fresheners & Repellents'>Fresheners & Repellents</option>
<option value='Detergents & Dishwash'>Detergents & Dishwash</option>
<option value='All Purpose Cleaners'>All Purpose Cleaners</option>
<option value='Party & Festive Needs'>Party & Festive Needs</option>
<option value='Mops, Brushes & Scrubs'>Mops, Brushes & Scrubs</option>
<option value='Computer Accessories'>Computer Accessories</option>
<option value='Eggs'>Eggs</option>
<option value='Fresh Fruits'>Fresh Fruits</option>
<option value='Exotic Fruits & Veggies'>Exotic Fruits & Veggies</option>
<option value='Cuts & Sprouts'>Cuts & Sprouts</option>
<option value='Fresh Vegetables'>Fresh Vegetables</option>
<option value='Chocolates & Biscuits'>Chocolates & Biscuits</option>
<option value='Cooking & Baking Needs'>Cooking & Baking Needs</option>
<option value='Snacks, Dry Fruits, Nuts'>Snacks, Dry Fruits, Nuts</option>
<option value='Rice & Rice Products'>Rice & Rice Products</option>
<option value='Organic Staples'>Organic Staples</option>
<option value='Edible Oils & Ghee'>Edible Oils & Ghee</option>
<option value='Salt, Sugar & Jaggery'>Salt, Sugar & Jaggery</option>
<option value='Appliances & Electricals'>Appliances & Electricals</option>
<option value='Ready to Cook & Eat'>Ready to Cook & Eat</option>
<option value='Spreads, Sauces & Ketchup'>Spreads, Sauces & Ketchup</option>

</select>

&nbsp;&nbsp;&nbsp;&nbsp;
Category Level-3
<select>
	<option>---Select---</option>
	<option value='Accessories'>Accessories</option>
<option value='Paneer & Curd'>Paneer & Curd</option>
<option value='Milk, White & Sandwich'>Milk, White & Sandwich</option>
<option value='Milk'>Milk</option>
<option value='Supplements & Proteins'>Supplements & Proteins</option>
<option value='Makeup Accessories'>Makeup Accessories</option>
<option value='Hand Wash & Sanitizers'>Hand Wash & Sanitizers</option>
<option value='Syrups & Concentrates'>Syrups & Concentrates</option>
<option value='Juices'>Juices</option>
<option value='Cold Drinks'>Cold Drinks</option>
<option value='Energy Drinks'>Energy Drinks</option>
<option value='Coffee'>Coffee</option>
<option value='Insect Repellent'>Insect Repellent</option>
<option value='Air Freshener'>Air Freshener</option>
<option value='Detergent Powder, Liquid'>Detergent Powder, Liquid</option>
<option value='Floor & Other Cleaners'>Floor & Other Cleaners</option>
<option value='Dishwash Liquids & Pastes'>Dishwash Liquids & Pastes</option>
<option value='Dishwash Bars & Powders'>Dishwash Bars & Powders</option>
<option value='Disposable Cups & Plates'>Disposable Cups & Plates</option>
<option value='Brooms & Dust Pans'>Brooms & Dust Pans</option>
<option value='Networking Devices'>Networking Devices</option>
<option value='Farm Eggs'>Farm Eggs</option>
<option value='Country Eggs'>Country Eggs</option>
<option value='Banana, Sapota & Papaya'>Banana, Sapota & Papaya</option>
<option value='Seasonal Fruits'>Seasonal Fruits</option>
<option value='Exotic Fruits'>Exotic Fruits</option>
<option value='Exotic Vegetables'>Exotic Vegetables</option>
<option value='Vegetables Chopped And Peeled'>Vegetables Chopped And Peeled</option>
<option value='Coccinia, Cucumber & Capsicum'>Coccinia, Cucumber & Capsicum</option>
<option value='Beans, Brinjals & Okra'>Beans, Brinjals & Okra</option>
<option value='International Chocolates'>International Chocolates</option>

</select>

<br/><br/>
			<table class="table table-striped" align="center" border="1">
				<thead>
					<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Category Level - 1 </th>
					<th>Category Level - 2 </th>
					<th>Category Level - 3 </th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
