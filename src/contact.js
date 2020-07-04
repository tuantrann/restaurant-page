function contactDisplay(){
    const content = document.querySelector('.content');
    
    content.innerHTML += ` <div class='contact-us'>
                                <div class='contact-info'>
                                    <div class='address'>
                                        <h4>CONTACT US</h4>
                                        <p>
                                            Address 1 : 241 Nguyen Trai , Nguyen Cu Trinh ward , Dist.1 , HCM city - Phone Number : 08.3838 5089
                                        </p>
                                            <br>
                                        <p> Address 2 : 288 Nguyen Tri Phuong , Ward 4, Dist. 10 , HCM city - Phone number : 08.3927 1888</p>
                                    </div>
                                    
                                    <br>
                                    <div class='delivery'> 
                                        <p>Delivery and pick up everyday from 10AM to 5PM.</p>
                                        <p>Place your oder via GRUBHUB or DOORDASH</p>
                                    </div>
                                </div>
                            </div>`;
                       
   


}

export{contactDisplay};