const find = require('appium-flutter-finder')

// describe('Place Food order', () => {
//     it('should login with valid credentials', async () => {
//     //   Add specs here //
//     const boardingScreenBtn = find.byValueKey('boardingscreen_btn');
//     const authLogin =  find.byValueKey("auth_screen_login");
//     const authRegister =  find.byValueKey("auth_screen_register");
//     const email =  find.byValueKey("login_email");
//     const password =  find.byValueKey("login_pass");
//     const loginBtn =  find.byValueKey("login_btn");
//     const foodOrderTile =  find.byValueKey('foodOrder_key');
//     const vendorList = find.byValueKey('vendorList_key');
//     const requiredItem = find.byText('Nekratshi Grills');
//     const foodItem = find.byText('Test Product');
//     const addToCart = find.byText('Add to Cart');
//     const cartIcon = find.byValueKey('cartIcon_key');
//     const checkout = find.byValueKey('checkout');
//     const placeOrder = find.byValueKey('placeOrder');
//     const proceedPayment = find.byText('proceedPayment_key');
//     const backToOrderDetails = find.byValueKey('backToOrderDetails');
//     const cancelOrder = find.byValueKey('cancelOrder');

//     // await driver.elementClick(find.byText('Allow'));
//     await driver.elementClick(boardingScreenBtn);
//     await driver.elementClick(boardingScreenBtn);
//     await driver.elementClick(boardingScreenBtn);
//     await driver.elementClick(authLogin);
//     await driver.execute('flutter:waitFor', email);
//     await driver.elementSendKeys(email, 'developer');
//     await driver.execute('flutter:waitFor', password);
//     await driver.elementSendKeys(password, 'bento1234');
//     await driver.elementClick(loginBtn);

//     await driver.pause(20000) // wait for 20 seconds

//     await driver.elementClick(foodOrderTile);
//     await driver.pause(10000) 
//     await driver.execute('flutter:scrollUntilVisible', find.byValueKey('vendorList'), {item:find.byText('Nekratshi Grills'), dxScroll: 0, dyScroll: -400,waitTimeoutMilliseconds: 10000});
//     await driver.elementClick(requiredItem)
//     await driver.pause(5000) 
//     await driver.elementClick(foodItem)
    
//     await driver.elementClick(addToCart)

//     await driver.elementClick(cartIcon)
    
//     await driver.elementClick(checkout)

//     await driver.elementClick(placeOrder)
//     await driver.pause(5000) 
//     // await driver.elementClick(proceedPayment)
//     // await driver.pause(5000) 
//     // await driver.elementClick(backToOrderDetails)

//     // await driver.pause(10000) 
//     // await driver.elementClick(cancelOrder)

//     // await driver.pause(30000) 

//     })
// })

describe('Place Parcel order', () => {
    it('should login with valid credentials', async () => {
    //   Add specs here //
    const boardingScreenBtn =  find.byValueKey("boardingscreen_btn");
    const authLogin =  find.byValueKey("auth_screen_login");
    const email =  find.byValueKey("login_email");
    const password =  find.byValueKey("login_pass");
    const loginBtn =  find.byValueKey("login_btn");
    const parcelTile =  find.byValueKey("parcel_key");
    const pickupLoc =  find.byValueKey("pickup_key");
    const setLoc =  find.byValueKey("setLoc_key");
    const continueToDrop =  find.byValueKey("continue_key");
    const pickupPhone =  find.byValueKey("pickupPhone_key");
    const dropLoc =  find.byValueKey("drop_key");
    const dropPhone = find.byValueKey("dropPhone_key");
    const parcelDesc =  find.byValueKey("parcelDesc_key");
    const sendParcel =  find.byValueKey("sendParcel_key");
    const getPickupLocation =  find.byValueKey("getPickLoc");
    const getDropLocation =  find.byValueKey("getDropLoc");
    const dropdownFinder =  find.byValueKey('DropdownButton');
    const dropdownItem = find.byText('Cash');
    const placeParcelOrder = find.byValueKey('placeParcel');
    const viewOrderProgress = find.byValueKey('viewOrderProgress');
    const cancelOrder = find.byValueKey('cancelOrder');

    // await driver.elementClick(find.byText('Allow'));
    await driver.elementClick(boardingScreenBtn);
    await driver.elementClick(boardingScreenBtn);
    await driver.elementClick(boardingScreenBtn);
    await driver.elementClick(authLogin);
    await driver.execute('flutter:waitFor', email);
    await driver.elementSendKeys(email, 'developer');
    await driver.execute('flutter:waitFor', password);
    await driver.elementSendKeys(password, 'bento1234');
    await driver.elementClick(loginBtn);

    await driver.pause(20000) // wait for 20 seconds

    await driver.elementClick(parcelTile);
    await driver.pause(5000) 
    await driver.elementClick(pickupLoc)
    await driver.pause(5000) 
    await driver.elementClick(getPickupLocation)
    await driver.pause(5000) 
    await driver.elementClick(setLoc)
    
    await driver.pause(5000) 
    await driver.elementClick(continueToDrop)
    
  
    await driver.pause(5000) 
    await driver.elementClick(pickupPhone)
    await driver.execute('flutter:waitFor', pickupPhone);
    await driver.elementSendKeys(pickupPhone, '1234567890');
    
    await driver.elementClick(dropLoc)

    await driver.pause(5000) 
    await driver.elementClick(getDropLocation)
    
    await driver.pause(5000) 
    await driver.elementClick(setLoc)
    await driver.pause(5000) 
    await driver.execute('flutter:waitFor', dropPhone);
    await driver.elementSendKeys(dropPhone, '0987654321');
    
    await driver.execute('flutter:waitFor', parcelDesc);
    await driver.elementSendKeys(parcelDesc, 'Appium Automation Testing');
    await driver.pause(5000) 
    await driver.elementClick(sendParcel)
    
    await driver.elementClick(dropdownFinder)
    await driver.elementClick(dropdownItem)
    await driver.elementClick(placeParcelOrder)
    await driver.pause(15000) 
    await driver.elementClick(viewOrderProgress)

    await driver.pause(20000) 
  
    await driver.elementClick(cancelOrder)

    
  


    await driver.pause(30000) 

    })
})

