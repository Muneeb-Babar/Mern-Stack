
import './index.css'

function Footer(){
    return <div>
        <div className="footer">
            <div className='footer container'>
            <div ><img src='https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp' width={250}/></div>
            <div><h3>TRY THE OLX APP</h3><p style={{fontSize:'1rem'}}>Buy, sell and find just about anything using the app on your mobile.</p></div>
            <div className='footer1'><p style={{fontSize:'.8rem',fontWeight:'600'}}>GET YOUR APP TODAY</p>
            <div className='footer2'>
                <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' width={80}/>
                <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' width={80}/>
                <img src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg' width={80}/>
            </div>
            </div>
            </div>
        </div>
        <div className='footer3'>
            <div className='footer-main  container'>
                <div><p>POPULAR CATEGORIES</p>
                    <ul>
                        <li>cars</li>
                        <li>Flats for rent</li>
                        <li>Mobiles Phone</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div><p>TRENDING SEARCHES</p>
                    <ul>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                </div>
                <div><p>ABOUT US</p>
                    <ul>
                        <li>About Dubizzle Group</li>
                        <li>Olx Blogs</li>
                        <li>Contact Us</li>
                        <li>OLX for Businesses</li>
                    </ul>
                </div>
                <div><p>OlX</p>
                    <ul>
                        <li>Help</li>
                        <li>Sites Map</li>
                        <li>Terms Of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div><p>Follow Us</p>
                <div className='footer4'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                <div className='footer2'>
                <img src='https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg' width={50}/>
                <img src='https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg' width={50}/>
                <img src='https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg' width={50}/>
            </div>
                </div>
            </div>
        </div>
        <div className='footer-last'>Free Classifieds in Pakistan . © 2006-2024 OLX</div>
    </div>
}

export default Footer