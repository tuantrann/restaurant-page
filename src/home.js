
function homeDisplay(){ 
    const home = document.querySelector('.content');
    home.innerHTML = `<header class="home-header">
                        <div class="logo"><a href='index.html'><img src="../img/logo.png" alt="logo"></a></div>
                        <div class="navbar">
                            <nav id="home">HOME</nav>
                            <nav id="menu">MENU</nav>
                            <nav id="contact-us">CONTACT US</nav>
                        </div>
                    </header>
                    <main>
                        <div class="home active">
                            <div class="about-us">
                                <h4>About Us</h4>
                                <br>
                                <p>Pho Hung was established in 2006, the first day is just a normal noodle shop like many other noodle shops on Nguyen Trai Street, District 1 downtown. HCM
                                    But with the motto of bringing the traditional Vietnamese taste of Pho to the next level, it is the quality of products and services as well as creating a sense of comfort and cleanness when enjoying Pho Hung.         
                                    Thereby we always keep the traditional and typical flavor of Pho Hung as well as improve the quality of customer service with the motto of fast, clean service, quality standards, with a comfortable space when enjoying Pho Hung </p>
                            </div>
                        </div>
                    </main>`;
}

export{homeDisplay};