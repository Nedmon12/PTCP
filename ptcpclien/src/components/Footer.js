const Footerlog = () => {
    return ( 
        <div className="footer">            
            <footer className="p-4 bg-white flex flex-row">
                <div className="footerside basis-4/12">

                </div>
                <div className="footercenter basis-6/12 flex flex-row" >
                    <div className="threetop">
                        <ul className="text-sm text-gray-800 flex flex-row">
                            <li>
                            <a href="#" className="mr-4 hover:underline ">Need Help</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline ">Term of use</a>
                            </li>
                        </ul>
                    </div>
                    <div className="oneunder">
                        <span className="text-sm text-gray ">
                            © 2022 
                            <a href="http://localhost:3000" className="hover:underline">
                                Beare PTC™
                            </a>. 
                            All Rights Reserved.
                        </span>
                    </div>
                </div>
                <div className="footerrigt basis-2/12">

                </div>
            </footer>
    </div>
     );
}
export default Footerlog;