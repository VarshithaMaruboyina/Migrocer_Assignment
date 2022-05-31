import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Information from './products';

class App extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.category_level1.toLowerCase().includes(this.state.search.toLowerCase()) || data.category_level2.toLowerCase().includes(this.state.search.toLowerCase()) || data.category_level3.toLowerCase().includes(this.state.search.toLowerCase())  ){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.id}</span>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.category_level1}</span>
            <span style={styleInfo}>{data.category_level2}</span>
            <span style={styleInfo}>{data.category_level3}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
        <center>
          
      {/* <input type="text" placeholder="Category Level-1" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />

      <br/> */}

Category Level-1 &nbsp;&nbsp;&nbsp;
<select onChange={(e)=>this.searchSpace(e)}>
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

Category Level-2&nbsp;&nbsp;&nbsp;&nbsp;
<select onChange={(e)=>this.searchSpace(e)}>
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
Category Level-3&nbsp;&nbsp;&nbsp;&nbsp;
<select onChange={(e)=>this.searchSpace(e)}>
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

      </center>
      {items}
      </div>
    )
  }
}

export default App;