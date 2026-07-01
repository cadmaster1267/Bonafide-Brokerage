const header = document.querySelector('#header');

window.addEventListener('load', function () {
    header.innerHTML = `
        <div class="center_logo">
            <a href="https://www.facebook.com/profile/php?id=61591720341549"><img src="Photos/icons/facebook_icon.png" alt="Facebook" class="social_media_icons"></a>
            <img src="Photos/Logos/Bonafide Brokerage Logo Steel Blue.png" alt="Bonafide Brokerage" class="logo">
            <a href="https://www.instagram.com/bonafide.brokerage?igsh=MXg0bHE2cnhpb3ZmOq=="><img src="Photos/icons/instagram_icon.png" alt="Instagram" class="social_media_icons"></a>

        </div>

        <ul class="menu_bar">
            <li class="li_menu"><a href="index.html" class="menu_text">Home</a></li>
            <li class="li_menu"><a href="listings.html" class="menu_text">Listings</a></li>
            <!-- <li class="li_menu"><a href="listings.html" class="menu_text">Cus</a></li>
            <li class="li_menu"><a href="remodel_repair.html" class="menu_text">Remodel & Repair</a></li>
            
            -->
            <li class="li_menu"><a href="contact.html" class="menu_text">Contact</a></li>

        </ul>`;

    footer.innerHTML = `
        <br>

    <div>
        <img src="Photos/Logos/Bonafide Brokerage Logo Black.png" alt="Bonafide Brokerage" class="footer_logo">

        <ul class="footer_list">
            <li class="footer_li"><a href="index.html" class="footer_links">Home</a></li>
            <li class="footer_li"><a href="listings.html" class="footer_links">Listings</a></li>
            <!-- <li class="footer_li"><a href=" custom_home.html" class="footer_links">Custom Homes</a></li>
            <li class="footer_li"><a href=" remodel_repair.html" class="footer_links">Remodel & Repair</a></li>
            -->
            <li class="footer_li"><a href=" contact.html" class="footer_links">Contact</a></li>
        </ul>
    </div>
    <br>
    <p class="footer_footnotes">
        All projects are completed under the General Contracting License held by Two Step LLC - License # 0095074
    </p>
    <br>
    
    `
});