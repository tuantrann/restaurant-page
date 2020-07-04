function menuDisplay(){
    const menuDis = document.querySelector('.content');
    menuDis.innerHTML += ` <div class="menu">
                            <div class="menu-pic">
                                
                            </div>
                            <div class="menu-food">
                                <h2>
                                </h2>
                                <div class="container">
                                    <div class='card'>
                                        <img class='img' src="../img/phobo.jpg" alt="image of Pho">
                                        <div class='info'>
                                            <h3>Pho Bo</h3>
                                            <p>Rare Beef Noodle Soup</p>
                                        </div>
                                    </div>

                                    <div class='card'>
                                        <img class='img' src="../img/bunbohue.jpeg" alt="imgage of Bun Bo Hue">
                                        <div class='info'>
                                            <h3>Bun Bo Hue</h3>
                                            <p>Spicy Beef & Pork Noodle Soup</p>
                                        </div>
                                    </div>

                                    <div class='card'>
                                        <img class='img' src="../img/comsuon.jpeg" alt="imgage of Com Suon">
                                        <div class='info'>
                                            <h3>Com Suon</h3>
                                            <p>Vietnamese Spicy Beef Rice</p>
                                        </div>
                                    </div>
                                    
                                    <div class='card'>
                                        <img class='img' src="../img/banhmithit.jpg" alt="imgage of banh mi">
                                        <div class='info'>
                                            <h3>Banh Mi Thit</h3>
                                            <p>Vietnamese Spicy Beef & Pork Sandwich</p>
                                        </div>
                                    </div>
                                    
                                    <div class='card'>
                                        <img class='img' src="../img/caphesuada.jpeg" alt="imgage of ca phe">
                                        <div class='info'>
                                            <h3>Ca Phe Sua Da</h3>
                                            <p>Vietnamese Special Milk Coffee</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div></div>
                        </div>`

}

export {menuDisplay};